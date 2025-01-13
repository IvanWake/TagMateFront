import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/interests`, {
        method: "GET"
    });

    if (!res.ok) {
        return NextResponse.json({ error: "Interests not found" }, { status: res.status });
    }

    const data = await res.json();

    return Response.json(data);
}