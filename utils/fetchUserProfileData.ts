import { getAuthToken } from "@/utils/authToken";

export const fetchUserProfileData = async () => {
    const authToken = getAuthToken("authToken");

    try {
        const res = await fetch('/api/profile', {
            headers: { "Authorization": `Bearer ${authToken}` }
        });

        if (!res.ok) {
            const err = await res.json();
            console.log(err);
            return { status: err.status };
        }

        const data = await res.json();
        return { data: data.userData, status: res.status };
    } catch (e) {
        return { error: e };
    }
}