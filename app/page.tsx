'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchUserProfileData } from "@/utils/fetchUserData/fetchUserProfileData";
import { deleteAuthToken } from "@/utils/authToken";
import Loading from "@/components/Layout/Loading";
import Header from "@/components/Header/Header";
import ProfileHero from "@/components/Profile/ProfileHero";
import ProfileContent from "@/components/Profile/ProfileContent";
import TabBar from '@/components/TabBar/TabBar';

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

    if (!userProfileData) return <Loading w={"5"} h={"5"} isComp={false} />

    return (
        <>
            <Header displaySettings={true} />
            <ProfileHero
                name={userProfileData.name}
                lastName={userProfileData.lastName}
                city={userProfileData.city.city}
                avatar={userProfileData.avatar.path}
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
            <TabBar/>
        </>
    );
}

export default Page;