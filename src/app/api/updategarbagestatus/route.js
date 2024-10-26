// pages/api/users.js
import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../Database/connection/connect';
import GarbageModel from '../../../Database/schema/garbageSchema';

export async function POST(req, res) {
    await connectToDatabase();
    try {
        const data = await req.json();
        var returndata;
        await GarbageModel.updateOne({ _id: data.id }, { $set: { status: data.status } })
        .then(result => returndata = result)
        .catch(err => console.error(err));
        return NextResponse.json({ success: true, data: returndata } , {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, error: 'Failed to update' } , {status : 400});
    }
}
