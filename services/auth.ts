import { setAuthToken } from "@/utils/authToken/setAuthToken";

export const userLogin = async (tag: string, password: string)=> {
    try {
        const res =  await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ userTag: tag, userPassword: password })
        });

        if (!res.ok) {
            const error = await res.json();
            return { message: error.message, status: error.status };
        }

        const data = await res.json();
        const token = data.token;

        setAuthToken("authToken", token);

        return { status: data.status };
    } catch (error) {
        return { error };
    }

}

export const userRegister = async (formData: FormData) => {
    try {
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: formData
        })
        console.log(res);

        const data = await res.json();
        const token = data;

        setAuthToken("authToken", token);

    } catch (error) {
        return { error }
    }
}