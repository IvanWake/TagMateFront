'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchUserProfileData } from "@/utils/fetchUserProfileData";
import { fetchUserProfileDataByTag } from "@/utils/fetchUserProfileDataByTag";
import { getAuthToken } from "@/utils/authToken";
import Loading from "@/components/Layout/Loading";
import Header from "@/components/Header/Header";
import HeaderSummary from "@/components/Header/HeaderSummary";
import ProfileHero from "@/components/Profile/ProfileHero";
import ProfileContent from "@/components/Profile/ProfileContent";

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
        <>
            <Header />
            <HeaderSummary avatar={userProfileData.avatar} />
            <ProfileHero
                name={userProfileData.name}
                lastName={userProfileData.lastName}
                city={userProfileData.city.city}
                avatar={userProfileData.avatar}
                birthDay={userProfileData.birthDay}
            />
            <ProfileContent
                tag={userProfileData.serviceId}
                purpose={userProfileData.purpose}
                interests={userProfileData.interests}
                socials={userProfileData.socials}
                images={userProfileData.images}
            />
        </>
    );
}

export default Page;