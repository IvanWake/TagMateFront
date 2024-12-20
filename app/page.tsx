'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchUserProfileData } from "@/utils/fetchUserProfileData";
import Header from "@/components/Header/Header";
import HeaderProfile from "@/components/Header/HeaderProfile";
import HeaderProfileInfo from "@/components/Header/HeaderProfileInfo";
import Stats from "@/components/Stats/Stats";
import UserBio from "@/components/UserBio/UserBio";
import Interests from "@/components/Interests/Interests";
import FamilyStatus from "@/components/FamilyStatus/FamilyStatus";
import Gallery from "@/components/Gallery/Gallery";
import Loading from "@/components/Layout/Loading";
import NonAuthRoute from "@/components/Auth/NonAuthRoute";
import styles from "./index.module.css";

const Page = () => {
    const [userProfileData, setUserProfileData] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchUserProfileDataHandler = async () => {
            const result = await fetchUserProfileData();

                if (result.status == 200) {
                    setUserProfileData(result.data);
                } else {
                    router.push("/auth/welcome");
                    console.log(result.status)
                }
        }

        fetchUserProfileDataHandler();
    }, []);

    if (!userProfileData) return <Loading />

    return (
        <NonAuthRoute>
            <Header tag={userProfileData.serviceId} />
            <HeaderProfile name={userProfileData.name} lastName={userProfileData.lastName} wasOnline={""}/>
            <main className={styles.main}>
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
        </NonAuthRoute>
    );
}

export default Page;