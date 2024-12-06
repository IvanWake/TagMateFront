import { setAuthToken } from "@/utils/authToken/setAuthToken";

export const userLogin = async (tag: string, password: string)=> {
    try {
        const res =  await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ userTag: tag, userPassword: password })
        });

        if (!res.ok) {
            return { status: res.status };
        }

        const data = await res.json();

        const token = data;

        setAuthToken("authToken", token);
    } catch (e) {
        return { error: e };
    }


}