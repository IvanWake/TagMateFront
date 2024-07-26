import { NextResponse } from "next/server";

export async function GET(req: Request ){
    const authToken = req.headers.get('Authorization')?.split(' ')[1];

    const res = await fetch(`http://localhost:5000/api/profile`, {
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