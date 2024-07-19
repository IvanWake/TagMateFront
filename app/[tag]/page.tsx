'use client';

import { useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import { fetchUserProfileData } from "@/utils/fetchUserProfileData";
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
    const router = useRouter();
    const { tag } = params;

    useEffect(() => { fetchUserProfileDataHandler() }, [tag]);

    const fetchUserProfileDataHandler = async () => {
        const result = await fetchUserProfileData(tag);

        if (result.error) {
            router.push("/404");
        } else {
            setUserProfileData(result.data);
        }
    }

    if (!userProfileData) {
        return <Loading />
    }

    return (
        <>
            <Header tag={params.tag.toUpperCase()}/>
            <HeaderProfile name={userProfileData.name} lastName={userProfileData.lastName} wasOnline={""}/>
            <main>
                <HeaderProfileInfo name={userProfileData.name} lastName={userProfileData.lastName} wasOnline={""}/>
                <Stats/>
                <UserBio/>
                <Interests/>
                <FamilyStatus/>
                <Gallery/>
            </main>
        </>
    );
}

export default Page;