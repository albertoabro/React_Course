import { useEffect, useState } from "react";
import {getGifs} from '@/utilities/getGifs'

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages()
    }, []) //With empty [], the function only will be trigger once time when the component it's created


    return {
        images,//If variable has the same name than parameter, it's possible omit the variable
        isLoading
    }
}