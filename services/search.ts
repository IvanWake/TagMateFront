import { getAuthToken } from "@/utils/authToken";

export const getSearchRequest = async (query: string) => {
    const authToken = getAuthToken("authToken");

    try {
        const res = await fetch(`/api/profile/search?query=${query}`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${authToken}`
            },
        });

        if (!res.ok) {
            const err = await res.json();
            return { status: err.status };
        }
        const data = await res.json();
        return { data };
    } catch (e) {
        return { error: e };
    }
}