'use client';

import { useEffect, ReactNode, useState } from "react";
import { getAuthToken } from "@/utils/authToken";
import { useRouter } from "next/navigation";
import Loading from "@/components/Layout/Loading";

type Props = {
    children?: ReactNode
}

const AuthRoute = (props: Props) => {
    const [isUserLoading, setIsUserLoading] = useState(true);

    const cookies = getAuthToken("authToken");
    useEffect(() => {

        setIsUserLoading(true);
        const fetchUserProfileDataHandler = () => {
            const isAuthToken = getAuthToken("authToken");
            const confirmProcess = localStorage.getItem("confirmProcess");

            if (!isAuthToken) {
                window.location.replace("/auth/welcome");
            }
            setIsUserLoading(false);
        }
        fetchUserProfileDataHandler();

    }, [cookies]);

    if (isUserLoading) return <Loading></Loading>;

    return props.children;
}

export default AuthRoute;