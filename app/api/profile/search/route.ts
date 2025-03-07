import { NextRequest, NextResponse } from "next/server";

export async function POST (req: NextRequest) {
    const authToken = req.headers.get('authorization')?.split(' ')[1];
    const body = await req.json();

    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/profile/search/?q${body.query}`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })

    if (!res.ok) {
        const error = await res.json();
        return NextResponse.json(error, { status: res.status, message: error });
    }
}