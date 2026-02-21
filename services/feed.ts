import { getAuthToken } from "@/utils/authToken";

export const getFeed = async () => {
  const authToken = getAuthToken("authToken");

  try {
    const res = await fetch(`/api/feed`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
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
};
