import { NextResponse } from "next/server";

export async function GET(req: Request ){
    const authToken = req.headers.get('Authorization')?.split(' ')[1];

    const res = await fetch(`${process.env.NEXT_BACKEND_HOST}/api/profile`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    });

    if (!res.ok) {
        return NextResponse.json({ error: 'Profile not found' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
}