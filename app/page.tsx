'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchUserProfileData } from "@/utils/fetchUserProfileData";
import { fetchInterests } from "@/utils/fetchInterests";
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
    const [city, setCity] = useState('');
    const [interestsList, setInterestsList] = useState();
    const router = useRouter();

    useEffect(() => {

        const fetchInterestsHandler = async () => {
            const res = await fetchInterests();
            setInterestsList(res);
        }

        const fetchUserProfileDataHandler = async () => {
            const result = await fetchUserProfileData();

                if (result.status == 200) {
                    setUserProfileData(result.data);
                } else {
                    router.push("/auth/welcome");
                }
        }

        fetchUserProfileDataHandler();
        fetchInterestsHandler();
    }, []);

    if (!userProfileData) return <Loading />

    return (
        <NonAuthRoute>
            <h1>User profile</h1>
        </NonAuthRoute>
    );
}

export default Page;