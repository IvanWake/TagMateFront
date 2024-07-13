import { NextResponse } from "next/server";

export async function GET(req: Request, { params }){
    const { tag } = params;
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhlNzg4ZjRlMDU0MjRkZjNlNjU0ODkiLCJpYXQiOjE3MjA2MTM4MzQsImV4cCI6MTcyMzIwNTgzNH0.gdbpr5ikZM3LJGBsOZqYnj1ZmZu-NMScEZJhzqpvPBU";

    const res = await fetch(`http://localhost:5000/api/profile/${tag}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (!res.ok) {
        console.log("Error in server side");
        return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }

    const data = await res.json();
    return NextResponse.json(data);
}