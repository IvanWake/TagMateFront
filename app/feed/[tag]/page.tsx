"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchUserProfileDataByTag } from "@/utils/fetchUserData/fetchUserProfileDataByTag";
import { getAuthToken } from "@/utils/authToken";
import Loading from "@/components/Layout/Loading";
import Header from "@/components/Header/Header";
import ProfileHero from "@/components/Profile/ProfileHero";
import ProfileContentByTag from "@/components/Profile/ProfileContentByTag";
import TabBar from "@/components/TabBar/TabBar";
import CardButtons from "@/components/Feed/FeedMain/FeedContent/CardButtons";
import { UserProfileResponse } from "@/types/userProfile/profileContent";

type Props = {
  params: {
    tag: string;
  };
};

const Page = ({ params }: Props) => {
  const [userProfileData, setUserProfileData] =
    useState<UserProfileResponse | null>(null);
  const [userPrivacyData, setUserPrivacyData] = useState<{
    publicProfile: boolean;
  } | null>(null);
  const [userOptionsData, setUserOptionsData] = useState<{
    isUserFriend: string;
  } | null>(null);
  const { tag } = params;
  const router = useRouter();

  useEffect(() => {
    const fetchUserProfileDataHandler = async (tag: string) => {
      const isAuthToken = getAuthToken("authToken");
      const confirmProcess =
        typeof window !== "undefined"
          ? localStorage.getItem("confirmProcess")
          : null;

      const resultByTag = await fetchUserProfileDataByTag(tag);

      if (isAuthToken) {
        if (resultByTag.status == 200) {
          setUserProfileData(resultByTag.data);
          setUserPrivacyData(resultByTag.data.privacyPolicy);
          setUserOptionsData(resultByTag.data.options);
        } else {
          router.push("/404");
        }
      } else if (confirmProcess) {
        router.push("/auth/confirm");
      } else {
        router.push("/auth/welcome");
      }
    };
    fetchUserProfileDataHandler(tag);
  }, [tag]);

  if (!userProfileData || !userPrivacyData || !userOptionsData)
    return <Loading w={"5"} h={"5"} />;

  return (
    <>
      <Header displaySettings={false} isFeed={true} />
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
        commonInterests={userProfileData.userData.commonInterests}
        socials={userProfileData.userData.socials}
        images={userProfileData.userData.images}
        isUserMate={userOptionsData.isUserFriend}
        inBlackList={userProfileData.inBlackList}
        isBlocked={userProfileData.isBlocked}
      />
      <CardButtons disabled={false} />

      <TabBar />
    </>
  );
};

export default Page;
