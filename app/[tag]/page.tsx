'use client';

import { useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
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

    useEffect(() => {
        const fetchUserProfileData = async () => {
            try {
                const res = await fetch(`/api/profile/${tag}`);
                if (!res.ok) {
                    router.push("/404");
                    return;
                }
                const data = await res.json();
                setUserProfileData(data.userData);
                console.log(data);
            } catch (err) {
                router.push("/404");
            }
        }
        fetchUserProfileData();
    }, [tag]);

    if (!userProfileData) {
        return <Loading />
    }

    return (
        <>
            <Header tag={params.tag.toUpperCase()}/>
            <HeaderProfile userName={userProfileData.username} wasOnline={""}/>
            <main>
                <HeaderProfileInfo userName={userProfileData.username} wasOnline={""}/>
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