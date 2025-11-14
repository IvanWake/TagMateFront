'use client';

import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {fetchUserProfileData} from "@/utils/fetchUserData/fetchUserProfileData";
import {fetchUserProfileDataByTag} from "@/utils/fetchUserData/fetchUserProfileDataByTag";
import {getAuthToken} from "@/utils/authToken";
import Loading from "@/components/Layout/Loading";
import Header from "@/components/Header/Header";
import HeaderSummary from "@/components/Header/HeaderSummary";
import ProfileHero from "@/components/Profile/ProfileHero";
import ProfileContent from "@/components/Profile/ProfileContent";
import ProfileContentByTag from "@/components/Profile/ProfileContentByTag";
import TabBar from '@/components/TabBar/TabBar';

const Page = ({ params }) => {
    const [userProfileData, setUserProfileData] = useState(null);
    const [userPrivacyData, setUserPrivacyData] = useState(null);
    const [userOptionsData, setUserOptionsData] = useState(null);
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
                    if (result.data.serviceId === resultByTag.data.userData.serviceId) {
                        window.location.replace("/");
                    } else {
                        setUserProfileData(resultByTag.data);
                        setUserPrivacyData(resultByTag.data.privacyPolicy);
                        setUserOptionsData(resultByTag.data.options);
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

            <Header displaySettings={false} />
            <ProfileHero
                isUserByTag={true}
                name={userProfileData.userData.name}
                lastName={userProfileData.userData.lastName}
                city={userProfileData.userData.city.city}
                avatar={userProfileData.userData.avatar.path}
                birthDay={userProfileData.userData.birthDay}
                tag={tag}
                isUserMate={userOptionsData.isUserFriend}
                isBlocked={userProfileData.isBlocked}
                inBlackList={userProfileData.inBlackList}
            />
            <ProfileContentByTag
                publicProfile={userPrivacyData.publicProfile}
                tag={userProfileData.userData.serviceId}
                purpose={userProfileData.userData.purpose}
                interests={userProfileData.userData.interests}
                socials={userProfileData.userData.socials}
                images={userProfileData.userData.images}
                isUserMate={userOptionsData.isUserFriend}
                inBlackList={userProfileData.inBlackList}
                isBlocked={userProfileData.isBlocked}
            />


            <TabBar/>
        </>
    );
}

export default Page;