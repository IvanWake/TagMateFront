"use client";

import contentStyles from "./FeedContent.module.css";
import NoSocialWorks from "./NoSocialNetworks";
import FeedMatch from "./FeedMatch";
import FeedCard from "./FeedCard";
import Loader from "./Loader";
import CardButtons from "./CardButtons";
import { useEffect, useState } from "react";
import { getFeed } from "@/services/feed";
import { getUserSettings } from "@/services/settings";
import { formatBirthDay } from "@/utils/formatBirthDay";
import Loading from "@/components/Layout/Loading";
import { whiteListActions } from "@/services/whitelist";

const FeedContent = () => {
  const [hasNotSocials, setHasNotSocials] = useState<boolean | null>(null);
  const [userInfo, setUserInfo] = useState(null);
  const [isLoadingCard, setIsLoadingCard] = useState<boolean>(false);
  const [isLoadingMatch, setIsLoadingMatch] = useState<boolean>(false);
  const [showMatch, setShowMatch] = useState(false);

  useEffect(() => {
    setShowMatch(false);
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

  const loadNextUser = async () => {
    setIsLoadingCard(true);
    const feedResult = await getFeed();
    if (feedResult.data) {
      setUserInfo(feedResult.data.user);
    }
    setIsLoadingCard(false);
  };

  const handleReject = async () => {
    await loadNextUser();
  };

  const handleLike = async () => {
    if (!userInfo) return;

    if (userInfo.friendship === null) {
      const result = await whiteListActions(userInfo.serviceId, "send");
      if (!result.error) {
        await loadNextUser();
      }
    } else if (userInfo.friendship === "pending") {
      setIsLoadingMatch(true);
      const result = await whiteListActions(userInfo.serviceId, "accept");
      if (!result.error) {
        setIsLoadingMatch(false);
        setShowMatch(true);
      }
    } else {
      setIsLoadingCard(false);
    }
  };

  if (hasNotSocials === null || isLoadingMatch) {
    return <Loading w={"5"} h={"5"} />;
  }

  if (hasNotSocials) {
    return <NoSocialWorks />;
  }

  if (showMatch && userInfo) {
    return <FeedMatch photo={userInfo.avatar.path} />;
  }

  return (
    <>
      <div
        className={contentStyles.fullCardWrapper}
        style={
          isLoadingCard || !userInfo
            ? { maxWidth: 512, width: "100%" }
            : undefined
        }
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
        <CardButtons
          disabled={isLoadingCard || !userInfo}
          onReject={handleReject}
          onLike={handleLike}
        />
      </div>
    </>
  );
};

export default FeedContent;
