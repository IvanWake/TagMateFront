import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
    const authToken = req.headers.get('authorization')?.split(' ')[1];
    const body = await req.json();

    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/settings/socials`, {
        method: "PATCH",
        cache: "no-store",
        headers: {
            "Content-Type" : "application/json",
            "Authorization": `Bearer ${authToken}`,
        },
        body: JSON.stringify({ socials: body.socials })
    })

    if (!res.ok) {
        const error = await res.json();
        return NextResponse.json(error, { status: res.status });
    }

    const data = await res.json();

    return NextResponse.json(data);
}

