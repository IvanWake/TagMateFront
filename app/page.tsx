'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchUserProfileData } from "@/utils/fetchUserProfileData";
import { deleteAuthToken } from "@/utils/authToken";
import Loading from "@/components/Layout/Loading";
import NonAuthRoute from "@/components/Auth/NonAuthRoute";

const Page = () => {
    const [userProfileData, setUserProfileData] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchUserProfileDataHandler = async () => {
            const result = await fetchUserProfileData();

                if (result.status == 200) {
                    setUserProfileData(result.data);
                } else {
                    deleteAuthToken("authToken");
                    router.push("/auth/welcome");
                }
        }

        fetchUserProfileDataHandler();
    }, []);

    if (!userProfileData) return <Loading />

    return (
        <NonAuthRoute>
            <h1>{userProfileData.serviceId}</h1>
        </NonAuthRoute>
    );
}

export default Page;