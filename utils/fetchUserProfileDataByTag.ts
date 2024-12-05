import { getAuthToken } from "@/utils/authToken/getAuthToken";

export const fetchUserProfileDataByTag = async (tag: string) => {
    const authToken = getAuthToken("authToken");

    try {
        const res = await fetch(`/api/profile/${tag}`, {
            headers: { "Authorization": `Bearer ${authToken}` }
        });

        if (!res.ok) {
            return { status: res.status }
        }

        const data = await res.json();
        return { data: data.userData };
    } catch (err) {
        return { error: err };
    }
}