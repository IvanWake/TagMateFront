'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchUserProfileData } from "@/utils/fetchUserProfileData";
import { fetchUserProfileDataByTag } from "@/utils/fetchUserProfileDataByTag";
import Header from "@/components/Header/Header";
import HeaderProfile from "@/components/Header/HeaderProfile";
import Stats from "@/components/Stats/Stats";
import UserBio from "@/components/UserBio/UserBio";
import Interests from "@/components/Interests/Interests";
import FamilyStatus from "@/components/FamilyStatus/FamilyStatus";
import Gallery from "@/components/Gallery/Gallery";
import HeaderProfileInfo from "@/components/Header/HeaderProfileInfo";
import Loading from "@/components/Layout/Loading";

const Page = ({ params }) => {
    const [userProfileData, setUserProfileData] = useState(null);
    const { tag } = params;
    const router = useRouter();

    useEffect(() => {
        const fetchUserProfileDataHandler = async (tag: string) => {
            const result = await fetchUserProfileData();
            const resultByTag = await fetchUserProfileDataByTag(tag);

            if (resultByTag.status === 404) {
                router.push("/404");
            } else {
                if (resultByTag.status === 401) {
                    router.push("/auth/welcome");
                } else {
                    if (result.data.serviceId === resultByTag.data.serviceId) {
                        router.push("/");
                    } else {
                        setUserProfileData(resultByTag.data);
                    }
                }
            }
        }
        fetchUserProfileDataHandler(tag);
    }, [tag]);

    if (!userProfileData) return <Loading/>

    return (
        <>
            <Header tag={params.tag.toUpperCase()}/>
            <HeaderProfile name={userProfileData.name} lastName={userProfileData.lastName} wasOnline={""}/>
            <main>
                <HeaderProfileInfo
                    name={userProfileData.name}
                    lastName={userProfileData.lastName}
                    wasOnline={""}
                />
                <Stats
                    mates={userProfileData.mates}
                    friendlinessFactor={userProfileData.friendlinessFactor}
                />
                <UserBio
                    gender={userProfileData.gender}
                    city={userProfileData.city}
                    birthDay={userProfileData.birthDay}
                />
                <Interests/>
                <FamilyStatus/>
                <Gallery/>
            </main>
        </>
    );
}

export default Page;