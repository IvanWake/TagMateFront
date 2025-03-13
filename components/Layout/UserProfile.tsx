'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchUserProfileData } from "@/utils/fetchUserData/fetchUserProfileData";
import { deleteAuthToken } from "@/utils/authToken";
import Loading from "@/components/Layout/Loading";
import NonAuthRoute from "@/components/Auth/NonAuthRoute";
import Header from "@/components/Header/Header";
import HeaderSummary from "@/components/Header/HeaderSummary";
import ProfileHero from "@/components/Profile/ProfileHero";
import ProfileContent from "@/components/Profile/ProfileContent";
import indexStyles from "../../app/index.module.css";

const UserProfile = () => {
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
        <div className={indexStyles.pageWrapper}>
            <NonAuthRoute>
                <Header />
                <HeaderSummary />
                <ProfileHero
                    name={userProfileData.name}
                    lastName={userProfileData.lastName}
                    city={userProfileData.city.city}
                    avatar={userProfileData.avatar}
                    birthDay={userProfileData.birthDay}
                />
                <ProfileContent tag={userProfileData.serviceId} purpose={userProfileData.purpose}/>
            </NonAuthRoute>
        </div>
    );
}

export default UserProfile;