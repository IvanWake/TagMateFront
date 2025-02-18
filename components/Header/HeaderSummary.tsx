'use client';

import { useEffect } from "react";
import "./HeaderSummary.css";

type Props = {
    avatar: string,
    name: string,
    lastName: string
}

const HeaderSummary = ({ avatar, name, lastName }: Props) => {
    useEffect(() => {
        const checkScroll = () => {
            const avatar = document.getElementById("profile");
            const miniHeader = document.getElementById("heading");
            const avatarRect = avatar.getBoundingClientRect();

            if (avatarRect.bottom < 108) {
                miniHeader.classList.add("shown");
            } else {
                miniHeader.classList.remove("shown");
            }
        }

            window.addEventListener("scroll", checkScroll);
    },[])


    return (
        <section className="heading-profile-summary" id="heading">
            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${avatar}`} alt="profile image" className="profile-thumbnail"/>
                <div className="profile-summary">
                    <div className="user-location">Москва</div>
                    <div className="user-name">{`${name} ${lastName}`}</div>
                    {/*<div className="user-status">*/}
                    {/*    <div className="status-indicator"></div>*/}
                    {/*    <span>В сети</span>*/}
                    {/*</div>*/}
                </div>
        </section>
    );
}

export default HeaderSummary;
