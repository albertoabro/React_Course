import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary';

const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const cloudApiKey = process.env.CLOUDINARY_API_KEY;
const cloudApiSecret = process.env.CLOUDINARY_SECRET_KEY;


cloudinary.config({
  cloud_name: cloudName,
  api_key: cloudApiKey,
  api_secret: cloudApiSecret,
  secure: true
})

describe('Testing in FileUpload', () => {
  test('should upload file to cloudinary', async() => {
    console.log(cloudName)
    const imageUrl = 'https://static.vecteezy.com/system/resources/thumbnails/034/979/467/small_2x/ai-generated-beautiful-landscape-with-green-meadows-and-blue-sky-with-clouds-photo.jpg';
    
    const resp = await fetch( imageUrl );
    const blob = await resp.blob();
    const file = new File([blob], 'photo.jgp');

    const url = await fileUpload ( file );

    expect( typeof url ).toBe('string');
    
    const segments = url.split('/');
    const imageId = segments[ segments.length -1 ].replace('.jpg', '');

    await cloudinary.api.delete_resources( [ imageId ] );

  });
})
