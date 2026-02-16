'use client';

import contentStyles from "./FeedContent.module.css";
import NoSocialWorks from "./NoSocialNetworks";
import Image from "next/image";
import logo from "@/public/mailLogo.png";
import FeedMatch from "./FeedMatch";
import FeedCard from "./FeedCard";
import CardButtons from "./CardButtons";

const FeedContent = () => {
    return (
        <>
            <div className={contentStyles.logoWrapper}>
                <img src="/icons/tagmate-min.svg" alt="Логотип" className={contentStyles.logo}/>
            </div>
            {/* <NoSocialWorks /> */}
            <FeedCard />
            <CardButtons />
        </>
    );
};

export default FeedContent;