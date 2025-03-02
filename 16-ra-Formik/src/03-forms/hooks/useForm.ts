import { ChangeEvent, useState } from "react";

export const useForm = <T>( initialData: T ) => {
    
    const [formData, setFormData] = useState(initialData);

    const handleChange = ( event: ChangeEvent<HTMLInputElement> ) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    };

    const handleReset = () => {
        setFormData( { ...initialData } );
    }

    return {
        ...formData,
        formData,
        handleChange,
        handleReset,
    }
}
