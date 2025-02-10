import { getAuthToken } from "@/utils/authToken";

export const fetchUserProfileDataByTag = async (tag: string) => {
    const authToken = getAuthToken("authToken");

    try {
        const res = await fetch(`/api/profile/${tag}`, {
            headers: { "Authorization": `Bearer ${authToken}` }
        });

        if (!res.ok) {
            const err = await res.json();
            console.log(err);
            return { status: err.status }
        }

        const data = await res.json();
        return { data: data.userData, status: res.status};
    } catch (err) {
        return { error: err };
    }
}