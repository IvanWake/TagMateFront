export async function POST(req: Request) {
    const body = await req.json();

    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/auth/registration`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            email: body.email,
            name: body.firstName,
            lastName: body.lastName,
            birthDay: body.birthday,
            gender: body.sex,
            city: body.city,
            purpose: body.purpose,
            interests: body.interests,
            password: body.password,
            repeatPassword: body.repeatPassword
        })
    })
    const data = await res.json();


    if (!res.ok) {
        return { status: res.status }

    }

    return Response.json(data)
}