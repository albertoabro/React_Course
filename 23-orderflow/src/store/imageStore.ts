import { ChangeEvent } from "react";
import { create } from "zustand";

interface ImageStore {
    dataImage: FormData | {};
    previewUrl: string | null;
    sendImage: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
    uploadImage:() => Promise<string | undefined>
    getImage: () => FormData | {};
    clearImageStore: () => void;
    setPreviewUrl: (url: string | null ) => void ;
};

const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export const useImageStore = create<ImageStore>((set, get) => ({
    dataImage: {},
    previewUrl: null,

    sendImage: async(e) => {
        const file = e.target.files![0];
        const data = new FormData();

        data.append('file', file);
        data.append('upload_preset', preset!);

        set(() => ({
            dataImage: data
        }))
    },

    uploadImage: async() => {
        const data = get().dataImage;

        if(!(data instanceof FormData)) {
            console.log("Format not valid")
            return;
        }

        try {
            const url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;
    
            const response = await fetch(url, {
                method: "POST",
                body: data
            });
    
            const result = await response.json();
    
            if (response.ok) {
                return result.secure_url;
            } else {
                console.error("Error of Cloudinary:", result);
            }
        } catch (error) {
            console.error("Error Uploading Image:", error);
        }
    },

    getImage: () => {
        return get().dataImage;
    },

    clearImageStore: () => {
        set(() => ({
            dataImage: {}
        }))
    },

    setPreviewUrl: (url: string | null ) => {
        set(() => ({
            previewUrl: url
        }))
    }
}))