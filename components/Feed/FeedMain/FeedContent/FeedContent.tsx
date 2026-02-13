'use client';

import contentStyles from "./FeedContent.module.css";
import NoSocialWorks from "./NoSocialNetworks";
import Image from "next/image";
import logo from "@/public/mailLogo.png";
import FeedMatch from "./FeedMatch";

const FeedContent = () => {
    return (
        <>
            <div className={contentStyles.logoWrapper}>
                <Image src={logo} alt="Логотип" className={contentStyles.logo}/>
            </div>
            <NoSocialWorks />
        </>
    );
};

export default FeedContent;