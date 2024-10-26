import { v2 as cloudinary } from 'cloudinary';
import {connect} from '@/db/connect';
import Image from '@/db/image.model';

interface Result{
    asset_id:string;
    public_id:string;
    width?:string;
    height?:string;
    format?:string;
    resource_type?:string;
    bytes?:string;
    url:string;
    folder:string;
    created_at:string
}

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});



export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);


  const results:Result = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({
       folder:"PWC Hack"
    }, function (error, result:any) {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    })
    .end(buffer);
  });

  
  if(results){
  await connect(); 
    
    const image = new Image({
        subjectName:formData.get("subject") || "N.A",
        assetId:results.asset_id,
        publicId:results.public_id,
        width:results.width,
        height:results.height,
        format:results.format,
        resourceType:results.resource_type,
        bytes:results.bytes,
        url:results.url,
        folder:results.folder,
        uploadedAt:results.created_at,
    })

    await image.save()
    return Response.json({ mesaage:"Image Uploaded Successfully",data:{image}});
  }else{

      return Response.json({message: "Image upload failed"})
  }
}