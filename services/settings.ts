import { getAuthToken } from "@/utils/authToken";

export const getUserSettings = async () => {
    const authToken = getAuthToken("authToken");

    try {
        const res = await fetch(`/api/settings`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${authToken}`
            },
        });

        if (!res.ok) {
            const err = await res.json();
            return { status: err.status };
        }
        const data = await res.json();
        return { data }
    } catch (e) {
        return { error: e };
    }
}

export const updatePrivacySettings = async (publicProfile: boolean) => {
    const authToken = getAuthToken("authToken");

    try {
        const res = await fetch(`/api/settings/privacy`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ publicProfile })
        });

        if (!res.ok) {
            const err = await res.json();
            return { status: err.status };
        }
        const data = await res.json();
        return { data }
    } catch (e) {
        return { error: e };
    }
}

export const updatePersonalSettings = async (name: string, lastName: string, birthDay: string, city: string) => {
    const authToken = getAuthToken("authToken");

    try {
        const res = await fetch(`/api/settings/personal`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, lastName, birthDay, city })
        });

        if (!res.ok) {
            const err = await res.json();
            return { status: err.status };
        }
        const data = await res.json();
        return { data }
    } catch (e) {
        return { error: e };
    }
}

export const updateInterests = async (interests: string[]) => {
    const authToken = getAuthToken("authToken");
    console.log(interests);
    try {
        const res = await fetch(`/api/settings/interests`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ interests: interests })
        });

        if (!res.ok) {
            const err = await res.json();
            return { status: err.status };
        }
        const data = await res.json();
        return { data }
    } catch (e) {
        return { error: e };
    }
}