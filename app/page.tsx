'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchUserProfileData } from "@/utils/fetchUserProfileData";
import {deleteAuthToken, getAuthToken} from "@/utils/authToken";
import Loading from "@/components/Layout/Loading";
import Header from "@/components/Header/Header";
import HeaderSummary from "@/components/Header/HeaderSummary";
import ProfileHero from "@/components/Profile/ProfileHero";
import ProfileContent from "@/components/Profile/ProfileContent";

const Page = ({ params }) => {
    const [userProfileData, setUserProfileData] = useState(null);
    const router = useRouter();
    const { tag } = params;

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
        <>
            <Header />
            <HeaderSummary
                name={userProfileData.name}
                lastName={userProfileData.lastName}
                avatar={userProfileData.avatar}
            />
            <ProfileHero
                name={userProfileData.name}
                lastName={userProfileData.lastName}
                city={userProfileData.city.city}
                avatar={userProfileData.avatar}
                birthDay={userProfileData.birthDay}
            />
            <ProfileContent
                isShowSocials={true}
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