import { NextResponse } from "next/server";


export async function POST(req: Request) {
    const res = await fetch(`process.env.NEXT_BACKEND_URL`, {
        method: "POST",
        body: {
            tag: req.body.tag,
            pass: req.body.pass
        }
    })

    if (!res.ok) {
        return { status: res.status }
    }
}