export async function POST(req: Request) {
    const formData = await req.formData();
    console.log(formData);
    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/auth/registration`, {
        method: "POST",
        cache: "no-cache",
        body: formData
    })

    if (!res.ok) {
        const err = await res.text();
        console.error("Ответ сервера:", err);
        return { status: res.status }
    }

    const data = await res.json();
    return Response.json(data)
}