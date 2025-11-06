import { NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
    const authToken = req.headers.get('authorization')?.split(' ')[1];
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('query');

    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/profile/search/?q=${query}`, {
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