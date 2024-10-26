// pages/api/users.js
import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../Database/connection/connect';
import GarbageModel from '../../../Database/schema/garbageSchema';

export async function GET(req, res) {
    try {
        const data = await GarbageModel.find({status: 'success'})
        return NextResponse.json({ success: true, data: data } , {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, error: 'Failed to add' } , {status : 400});
    }
}
