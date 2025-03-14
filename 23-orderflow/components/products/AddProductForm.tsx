"use client"

import { createProduct } from "@/actions/create-product-action";
import { ProductSchema } from "@/src/schema/validationSchema";
import { useImageStore } from "@/src/store/imageStore";
import { showErrors } from "@/src/utils/showValidationErrors";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { z } from "zod";

export const AddProductForm = ({children}: {children: React.ReactNode}) => {
    
    const uploadImage = useImageStore(state => state.uploadImage);
    const clearImageSelected = useImageStore(state => state.clearImageStore);
    const clearPreview = useImageStore(state => state.setPreviewUrl);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async(formData: FormData) => {
        
        setIsLoading(true);

        const data = {
            name: formData.get('name'),
            price: formData.get('price'),
            categoryId: formData.get('categoryId'),
        };
        
        const result = ProductSchema.omit({ image: true }).safeParse(data);

        if(!result.success) {
            setIsLoading(false);
            showErrors(result.error.issues);
            return;
        }

        const imgUrl = await uploadImage();

        if(!imgUrl || typeof imgUrl !== 'string'){
            setIsLoading(false);
            const imageError = new z.ZodError([
                {
                    code: 'custom',
                    message: 'Error uploading image',
                    path: ['image']
                }
            ]);

            showErrors(imageError.issues);
            return;
        }

        const finalData = {...data, image: imgUrl}
        const finalResult = ProductSchema.safeParse(finalData);

        if(!finalResult.success) {
            setIsLoading(false);
            showErrors(finalResult.error.issues);
            return;
        }

        clearImageSelected();
        clearPreview(null);

        const response = await createProduct(finalResult.data);

        if(response?.errors)
            showErrors(response.errors);

        setIsLoading(false);
        
        toast.success('Product created successfully');
        router.push('/admin/products');
    };

    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
            <form
                action={handleSubmit}
                className="space-y-5"
            > 
                {children}
                <input 
                    type="submit"
                    className={`bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold
                    ${isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer" }`}
                    disabled={isLoading}
                    value={`${isLoading ? 'Creating...' : 'Create Product'}`}
                />
            </form>
        </div>
    )
}
