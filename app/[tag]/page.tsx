'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchUserProfileData } from "@/utils/fetchUserProfileData";
import { fetchUserProfileDataByTag } from "@/utils/fetchUserProfileDataByTag";
import { getAuthToken } from "@/utils/authToken";
import Loading from "@/components/Layout/Loading";

const Page = ({ params }) => {
    const [userProfileData, setUserProfileData] = useState(null);
    const { tag } = params;
    const router = useRouter();

    useEffect(() => {
        const fetchUserProfileDataHandler = async (tag: string) => {
            const isAuthToken = getAuthToken("authToken");
            const confirmProcess = localStorage.getItem("confirmProcess");

            const result = await fetchUserProfileData();
            const resultByTag = await fetchUserProfileDataByTag(tag);

            if (isAuthToken) {
                if (result.status == 200 && resultByTag.status == 200) {
                    if (result.data.serviceId === resultByTag.data.serviceId) {
                        router.push("/");
                    } else {
                        setUserProfileData(resultByTag.data);
                    }
                } else {
                    router.push("/404");
                }
            } else if (confirmProcess) {
                router.push("/auth/confirm");
            } else {
                router.push("/auth/welcome");
            }

        }
        fetchUserProfileDataHandler(tag);
    }, [tag]);

    if (!userProfileData) return <Loading/>

    return (
            <h1>По тегу {userProfileData.serviceId}</h1>
    );
}

export default Page;