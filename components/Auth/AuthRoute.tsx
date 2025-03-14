'use client';

import { useEffect, ReactNode, useState } from "react";
import { getAuthToken } from "@/utils/authToken";
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

            if (!isAuthToken) {
                window.location.replace("/auth/welcome");
            }
            setIsUserLoading(false);
        }
        fetchUserProfileDataHandler();

    }, [cookies]);

    if (isUserLoading) return <Loading />;

    return props.children;
}

export default AuthRoute;