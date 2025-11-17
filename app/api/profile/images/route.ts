import { NextResponse, NextRequest} from "next/server";

export async function PATCH(req: NextRequest) {
    const formData = await req.formData();
    const authToken = req.headers.get('authorization')?.split(' ')[1];


    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/profile/images`, {
        method: "PATCH",
        headers: {
            "Authorization": `Bearer ${authToken}`
        },
        body: formData
    })

    if (!res.ok) {
        const error = await res.json();
        return NextResponse.json(error, { status: res.status });
    }


    // const data = await res.json();
    return NextResponse.json(data);
}

export async function DELETE(req: NextRequest) {
    const authToken = req.headers.get('authorization')?.split(' ')[1];
    const body = await req.json();


    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/profile/images/${body.id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })

    if (!res.ok) {
        const error = await res.json();
        return NextResponse.json(error, { status: res.status });
    }


    // const data = await res.json();
    return NextResponse.json(data);
}