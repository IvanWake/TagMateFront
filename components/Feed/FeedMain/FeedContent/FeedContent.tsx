"use client";

import contentStyles from "./FeedContent.module.css";
import NoSocialWorks from "./NoSocialNetworks";
import Image from "next/image";
import logo from "@/public/mailLogo.png";
import FeedMatch from "./FeedMatch";
import FeedCard from "./FeedCard";
import Loader from "./Loader";
import CardButtons from "./CardButtons";
import userPhoto from "@/public/Natalia.jpg";
import { useEffect, useState } from "react";
import { getFeed } from "@/services/feed";
import { getUserSettings } from "@/services/settings";
import { formatBirthDay } from "@/utils/formatBirthDay";
import Loading from "@/components/Layout/Loading";

// const test = {
//   avatar: {
//     path: 'https://i.pinimg.com/736x/74/40/ae/7440ae096b0647e06516a098e3230083.jpg'
//   },
//   similarityScore: 89.89,
//   city: {city: "Москва"},
//   name: "Наталья",
//   lastName: "Пигарова",
//   birthDay: "2004-01-23T00:00:00.000Z",
//   interests: [
//     { name: "📃 Оригами" },
//     { name: "🖌 Веб-дизайн" },
//     { name: "💨 Кальян" },
//     { name: "🎀 Аниме" },
//     { name: "📺 Сериалы" },
//   ],
// };

const FeedContent = () => {
  const [hasNotSocials, setHasNotSocials] = useState<boolean | null>(null);
  const [userInfo, setUserInfo] = useState(null);
  const [isLoadingCard, setIsLoadingCard] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const settingsResult = await getUserSettings();
      if (settingsResult.data) {
        const socials = settingsResult.data.socials;
        const newState = Object.values(socials).every(
          (value) => value === "link",
        );
        setHasNotSocials(newState);

        if (!newState) {
          setIsLoadingCard(true);
          const feedResult = await getFeed();
          if (feedResult.data) {
            setUserInfo(feedResult.data.user);
          }
          setIsLoadingCard(false);
        }
      }
    };
    fetchData();
  }, []);

  if (hasNotSocials === null) {
    return <Loading w={"5"} h={"5"} />;
  }

  if (hasNotSocials) {
    return <NoSocialWorks />;
  }

  return (
    <>
      <div 
        className={contentStyles.fullCardWrapper} 
        style={isLoadingCard || !userInfo ? { maxWidth: 512, width: "100%" } : undefined}
      >
        {isLoadingCard ? (
          <Loader />
        ) : userInfo ? (
          <FeedCard
            tag={userInfo.serviceId}
            photo={userInfo.avatar.path}
            match={Math.round(userInfo.similarityScore)}
            city={userInfo.city.city}
            name={userInfo.name}
            lastName={userInfo.lastName}
            age={formatBirthDay(userInfo.birthDay).yearsOld}
            hobbys={userInfo.interests}
          />
        ) : (
          <Loader />
        )}
        <CardButtons disabled={isLoadingCard || !userInfo} />
      </div>
    </>
  );
};

export default FeedContent;
