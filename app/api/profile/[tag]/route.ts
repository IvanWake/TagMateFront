import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }){
    const { tag } = params;
    const authToken = req.headers.get('Authorization')?.split(' ')[1];

    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/profile/${tag}`, {
        method: "GET",
        cache: "no-store",
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    });

    if (!res.ok) {
        return NextResponse.json(res, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
}