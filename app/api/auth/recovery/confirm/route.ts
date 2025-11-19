import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        if (!body.token || !body.password) {
            return NextResponse.json(
                { message: "Токен и пароль обязательны" },
                { status: 400 }
            );
        }

        const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/auth/recovery/confirm`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                token: body.token,
                password: body.password 
            })
        });

        if (!res.ok) {
            const error = await res.json();
            return NextResponse.json(error, { status: res.status });
        }

        const data = await res.json();
        return NextResponse.json(data);

    } catch (error) {
        console.error("Recovery confirm error:", error);
        return NextResponse.json(
            { message: "Внутренняя ошибка сервера" },
            { status: 500 }
        );
    }
}