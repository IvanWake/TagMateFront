import { getAuthToken } from "@/utils/authToken";

export const whiteListActions = async (tag: string, type: string) => {
    const authToken = getAuthToken("authToken");

    try {
        const res = await fetch(`/api/friends/${type}`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${authToken}`
            },
            body: JSON.stringify({ tag: tag  })
        });

        if (!res.ok) {
            const err = await res.json();
            return { status: err.status };
        }

        return { status: res.status };
    } catch (e) {
        return { error: e };
    }
}