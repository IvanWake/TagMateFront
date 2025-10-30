import { getAuthToken } from "@/utils/authToken";

export const friendSend = async (tag: string) => {
    const authToken = getAuthToken("authToken");

    try {
        const res = await fetch('/api/friends/send', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({ tag: tag, authToken: authToken })
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

export const cancelFriendRequest = async (tag: string) => {
    const authToken = getAuthToken("authToken");

    try {
        const res = await fetch('/api/friends/cancel', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({ tag: tag, authToken: authToken })
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

export const rejectFriendRequest = async (tag: string) => {
    const authToken = getAuthToken("authToken");

    try {
        const res = await fetch('/api/friends/reject', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({ tag: tag, authToken: authToken })
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