import { getAuthToken } from "@/utils/authToken";

export const fetchUserMates = async () => {
    const authToken = getAuthToken("authToken");

    try {
        const res = await fetch('/api/profile/mates', {
            headers: { "Authorization": `Bearer ${authToken}` }
        });

        if (!res.ok) {
            const err = await res.json();
            return { status: err.status };
        }

        const data = await res.json();
        return { data: data.message, status: res.status };
    } catch (e) {
        return { error: e };
    }
}