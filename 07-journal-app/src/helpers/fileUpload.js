

export const fileUpload = async( file ) => {
    
    if( !file ) throw new Error( 'Not file to upload' );

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dwfvjtohr/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if( !resp.ok ) throw new Error("Image can not be upload");

        const cloudResponse = await resp.json();

        return cloudResponse.secure_url;
        
    } catch (error) {
        throw new Error(error.message);
        
    }
}