import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();

    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/friends/send`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${body.authToken}`,
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({ friendId: body.tag })
    })

    if (!res.ok) {
        const error = await res.json();
        return NextResponse.json(error, { status: res.status });
    }

    const data = await res.json();

    return NextResponse.json(data);
}

