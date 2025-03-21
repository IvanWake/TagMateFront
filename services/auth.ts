import { setAuthToken } from "@/utils/authToken";

export const userLogin = async (tag: string, password: string)=> {
    try {
        const res =  await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ tag: tag.toUpperCase(), password: password })
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

        if (!res.ok) {
            const error = await res.json();
            console.log(error.error || error.message);
            return { message: error.error || erorr.message, status: error.status };
        }


        const data = await res.json();
    } catch (error) {
        return { error }
    }
}

export const userConfirm = async (token: string)=> {
    try {
        const res =  await fetch("/api/auth/confirm", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ token })
        });

        if (!res.ok) {
            const error = await res.json();
            return { message: error.error, status: error.status };
        }

        const data = await res.json();
        const jwtToken = data.token;

        setAuthToken("authToken", jwtToken);

        return { status: data.status };
    } catch (error) {
        return { error };
    }

}