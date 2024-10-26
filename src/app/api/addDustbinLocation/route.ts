import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/Database/connection/connect';
import DustDustbinLocations from '@/Database/schema/dustbinLoationSchema';

export async function POST(req:Request, res:Response) {
    await connectToDatabase();
    const data = await req.json();
    console.log(data)
    const newDustbinLocation = new DustDustbinLocations(data);
    await newDustbinLocation.save();
    return NextResponse.json({success:true , data:newDustbinLocation} , {status:201});
}
