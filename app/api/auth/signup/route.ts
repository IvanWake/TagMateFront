import { NextResponse, NextRequest} from "next/server";

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    console.log(formData);
    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/auth/registration`, {
        method: "POST",
        body: formData
    })

    if (!res.ok) {
        const error = await res.json();
        return NextResponse.json(error, { status: res.status });
    }


    const data = await res.json();
    return NextResponse.json(data);
}