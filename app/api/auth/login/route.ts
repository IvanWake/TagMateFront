import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();


    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({ tag: body.userTag, password: body.userPassword })
    })

    if (!res.ok) {
        const error = await res.json();
        return NextResponse.json(error.message, { status: res.status, message: error.message });
    }

    const data = await res.json();

    return NextResponse.json(data);
}

