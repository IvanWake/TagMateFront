'use client';

import {useEffect, ReactNode, useState} from "react";
import { fetchUserProfileData } from "@/utils/fetchUserProfileData";
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
        const fetchUserProfileDataHandler = async () => {

            const res = await fetchUserProfileData();

            if (res.status == 200) {
                router.push("/")
            }
            setIsUserLoading(false);
        }
        fetchUserProfileDataHandler();
    }, []);

    if (isUserLoading) return <Loading></Loading>;

    return props.children;
}

export default NonAuthRoute;