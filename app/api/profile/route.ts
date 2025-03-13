import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest ){
    const authToken = req.headers.get('authorization')?.split(' ')[1];

    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/profile`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    });

    if (!res.ok) {
        return NextResponse.json(res || "User not found", { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
}