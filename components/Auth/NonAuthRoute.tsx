'use client';

import { useEffect, ReactNode, useState } from "react";
import { getAuthToken } from "@/utils/authToken/getAuthToken";
import { useRouter } from "next/navigation";
import Loading from "@/components/Layout/Loading";

type Props = {
    children?: ReactNode
}

const NonAuthRoute = (props: Props) => {
    const [isUserLoading, setIsUserLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        setIsUserLoading(true);
        const fetchUserProfileDataHandler = () => {
            const isAuthToken = getAuthToken("authToken");

            if (isAuthToken) {
                router.push("/");
            }
            setIsUserLoading(false);
        }
        fetchUserProfileDataHandler();
    }, []);

    if (isUserLoading) return <Loading></Loading>;

    return props.children;
}

export default NonAuthRoute;