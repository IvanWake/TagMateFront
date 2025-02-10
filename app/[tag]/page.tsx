'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchUserProfileData } from "@/utils/fetchUserProfileData";
import { fetchUserProfileDataByTag } from "@/utils/fetchUserProfileDataByTag";
import { deleteAuthToken } from "@/utils/authToken";
import Loading from "@/components/Layout/Loading";
import NonAuthRoute from "@/components/Auth/NonAuthRoute";

const Page = ({ params }) => {
    const [userProfileData, setUserProfileData] = useState(null);
    const { tag } = params;
    const router = useRouter();

    useEffect(() => {
        const fetchUserProfileDataHandler = async (tag: string) => {
            const result = await fetchUserProfileData();
            const resultByTag = await fetchUserProfileDataByTag(tag);

            if (result.status == 200 && resultByTag.status == 200) {
                if (result?.data.serviceId === resultByTag?.data.serviceId) {
                    router.push("/");
                } else {
                    setUserProfileData(resultByTag.data);
                }
            } else {
                deleteAuthToken("authToken");
                router.push("/auth/welcome");
            }

        }
        fetchUserProfileDataHandler(tag);
    }, [tag]);

    if (!userProfileData) return <Loading/>

    return (
        <NonAuthRoute>
            <h1>По тегу</h1>
        </NonAuthRoute>
    );
}

export default Page;