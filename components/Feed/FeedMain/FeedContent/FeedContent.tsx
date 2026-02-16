'use client';

import contentStyles from "./FeedContent.module.css";
import NoSocialWorks from "./NoSocialNetworks";
import Image from "next/image";
import logo from "@/public/mailLogo.png";
import FeedMatch from "./FeedMatch";
import FeedCard from "./FeedCard";
import Loader from "./Loader";
import CardButtons from "./CardButtons";
import userPhoto from "@/public/Natalia.jpg";
import { useState } from "react";

const test = {
  photo: userPhoto, 
  match: 89,
  city: "Москва",
  name: "Наталья",
  lastName: "Пигарова",
  age: 26,
  hobbys: [
    { icon: "📃", name: "Оригами" },
    { icon: "🖌", name: "Веб-дизайн" },
    { icon: "💨", name: "Кальян" },
    { icon: "🎀", name: "Аниме" },
    { icon: "📺", name: "Сериалы" },
  ],
};

const FeedContent = () => {
    const [userInfo, setUserInfo] = useState(test);
    return (
      <>
        <div className={contentStyles.logoWrapper}>
          <img
            src="/icons/tagmate-min.svg"
            alt="Логотип"
            className={contentStyles.logo}
          />
        </div>
        {/* <NoSocialWorks /> */}
        {userInfo ? (<FeedCard
          photo={userInfo.photo}
          match={userInfo.match}
          city={userInfo.city}
          name={userInfo.name}
          lastName={userInfo.lastName}
          age={userInfo.age}
          hobbys={userInfo.hobbys}
        />)
        :
        (<Loader />) }
        <CardButtons disabled={!userInfo}/>
      </>
    );
};

export default FeedContent;