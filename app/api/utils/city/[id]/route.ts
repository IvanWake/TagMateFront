import { NextResponse } from "next/server";

export async function GET(req: Request, { params }) {
    const { id } = params;

    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/city/${id}`, {
        method: "GET"
    });

    if (!res.ok) {
        return NextResponse.json({ error: "City not found" }, { status: res.status });
    }

    const data = await res.json();

    return Response.json(data);
}