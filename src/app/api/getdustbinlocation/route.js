// pages/api/users.js
import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../Database/connection/connect';
import dustbinSchema from '../../../Database/schema/dustbinSchema';

export async function GET(req, res) {
    await connectToDatabase();
    try {
        const data = await dustbinSchema.find({})
        return NextResponse.json({ success: true, data: data } , {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, error: 'Failed to add' } , {status : 400});
    }
}
