"use client"

import { useImageStore } from "@/src/store/imageStore";
import Image from "next/image";
import { ChangeEvent, useEffect, useRef } from "react";
import { TbPhotoPlus } from "react-icons/tb"

export const ImageProductUpload = () => {

    const sendImage = useImageStore(state => state.sendImage);
    const clearImageSelected = useImageStore(state => state.clearImageStore);
    const setPreviewUrl = useImageStore(state => state.setPreviewUrl);
    const preview = useImageStore(state => state.previewUrl);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if(inputRef.current) return;
    }, []);

    const handleImageUpload =  (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            clearImageSelected()
            const file = e.target.files[0];
            const tempUrl = URL.createObjectURL(file);
            setPreviewUrl(tempUrl);
            sendImage(e);
        }
    };

    const handleClick = () => {
        if(inputRef.current) inputRef.current.click();
    };

    return (

        <div className="space-y-2">
            <span className="text-slate-800">Product Image</span>

            <button 
                className="relative cursor-pointer hover:opacity-70 p-10 border-neutral-300 flex flex-col 
                justify-center items-center gap-4 text-neutral-600 bg-slate-100 w-full"
                type="button"
                onClick={handleClick}
            >

            <input
                type="file"
                ref={inputRef}
                className="hidden"
                onChange={handleImageUpload}
                />

                {
                    preview && (
                        <Image 
                            src={preview}
                            alt= 'Product Image'
                            width={200}
                            height={200}
                            className="rounded-lg"
                        />
                    )
                }
                <TbPhotoPlus
                    className={` ${ preview ? "absolute top-2 right-2 p-1 " : ""}`}
                    size={50}
                />
                {
                    preview ? ( <p className="text-lg font-semibold">Change Image</p>) 
                            : ( <p className="text-lg font-semibold">Add Image</p>)
                }
            
            </button>
        </div>
    )
}
