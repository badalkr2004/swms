// pages/api/users.js
import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../Database/connection/connect';
import GarbageModel from '../../../Database/schema/garbageSchema';

export async function POST(req, res) {
    await connectToDatabase();
    try {
        const data = await req.json();
        console.log(data);
        const newGarbage = new GarbageModel(data);
        await newGarbage.save();
        return NextResponse.json({ success: true, data: newGarbage } , {status: 201});
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, error: 'Failed to add' } , {status : 400});
    }
}
