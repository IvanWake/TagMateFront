import { NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
    const authToken = req.headers.get('authorization')?.split(' ')[1];

    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/profile/mates`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    });

    if (!res.ok) {
        const error = await res.json();
        return NextResponse.json(error, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
}