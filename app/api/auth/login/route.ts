


export async function POST(req: Request) {
    const body = await req.json();

    console.log(body);

    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({ tag: body.userTag, password: body.userPassword })
    })
    const data = await res.json();

    if (!res.ok) {
        return { status: 401 };
    }

    return Response.json(data);
}