export const fileUpload = async ( file ) => {

    if(!file) throw new Error('File does not exist')

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dkhp2v4v2/upload';

    const formData = new FormData();
    formData.append('upload_preset','react-journal');
    formData.append('file', file );

    console.log(cloudUrl)

    try{
        const response = await fetch(cloudUrl, {
            method: 'POST',
            body: formData,
        });        

        console.log(response)

        if( !response.ok ) throw new Error('Can not upload image')

        const cloudResp = await response.json();

        return cloudResp.secure_url;
        
    }catch( error ){
        throw new Error(error.message)
    }
} 