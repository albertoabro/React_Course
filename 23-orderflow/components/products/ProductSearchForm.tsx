"use client"

import { SearchProductSchema } from "@/src/schema/validationSchema";
import { showErrors } from "@/src/utils/showValidationErrors";
import { useRouter } from "next/navigation";


export const ProductSearchForm = () => {

    const router = useRouter();
    
    const handleSearchForm = (formData: FormData) => {
        const data = {
            search: formData.get('search')
        };

        const result = SearchProductSchema.safeParse(data);

        if(!result.success){
            showErrors(result.error.issues);
            return;
        }

        router.push(`/admin/products/search?search=${result.data.search}`);
    };

    return (
        <form
        action={handleSearchForm}
            className="flex items-center"
        >
            <input 
                type="text"
                placeholder="Search Product"
                className="p-2 placeholder-gray-400 w-full bg-white"
                name='search'
            />

            <input
                type="submit"
                value={'Search'}
                className="bg-indigo-600 p-2 text-white cursor-pointer"
            />
        </form>
    )
}
