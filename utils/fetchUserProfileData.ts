import { getAuthToken } from "@/utils/getAuthToken";

export const fetchUserProfileData = async () => {
    const authToken = getAuthToken("authToken");

    try {
        const res = await fetch(`/api/profile`, {
            headers: { "Authorization": `Bearer ${authToken}` }
        });

        if (!res.ok) {
            return { status: res.status };
        }

        const data = await res.json();
        return { data: data.userData, status: res.status };
    } catch (err) {
        return { error: err };
    }
}