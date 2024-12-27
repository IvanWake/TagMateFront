import { setAuthToken } from "@/utils/authToken/setAuthToken";

type RegisterFormData = {
    email: string,
    name: string,
    lastName: string,
    surName: string ,
    birthDay: string,
    gender: string,
    city: string,
    purpose: string,
    interests: string[],
    password: string,
    repeatPassword: string
}

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
            return { status: res.status };
        }

        const data = await res.json();

        const token = data;

        setAuthToken("authToken", token);
    } catch (error) {
        return { error };
    }

}

export const userRegister = async (formData: RegisterFormData) => {
    try {
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })

        const data = await res.json();
        const token = data;

        setAuthToken("authToken", token);
    } catch (error) {
        return { error }
    }
}