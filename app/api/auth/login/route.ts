import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    //
    // const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/auth/login`, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type" : "application/json",
    //     },
    //     body: JSON.stringify({ tag: body.tag, password: body.password })
    // })
    //
    // if (!res.ok) {
    //     const error = await res.json();
    //     return NextResponse.json(error, { status: res.status });
    // }
    //
    // const data = await res.json();

    return NextResponse.json(body.tag);
}

