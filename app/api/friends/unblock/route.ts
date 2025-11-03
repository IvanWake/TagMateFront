import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const authToken = req.headers.get('authorization')?.split(' ')[1];
    const body = await req.json();

    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/friends/unblock`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify({ tag: body.tag })
    })

    if (!res.ok) {
        const error = await res.json();
        return NextResponse.json(error, { status: res.status });
    }

    const data = await res.json();

    return NextResponse.json(data);
}

