'use client';

import {UserItemSearch} from "@/types/mates/userItem";
import Link from "next/link";
import {formatBirthDay} from "@/utils/formatBirthDay";
import mainStyles from "./MatesList.module.css";

const User = ({name, lastName, city, avatar, birthDay, serviceId}: UserItemSearch<string>) => {
    return (
        <div onClick={() => window.location.replace(`/${serviceId}`)}>
            <div className={mainStyles.userItem}>
                <img src={avatar} alt="user avatar"
                     className={mainStyles.userPicture}/>
                <div className={mainStyles.userInfo}>
                    <div className={mainStyles.userName}>{`${name} ${lastName}`}</div>
                    <div className={mainStyles.userDescription}>{`${formatBirthDay(birthDay).yearsOld}, ${city}`}</div>
                </div>
            </div>
        </div>
    );
}

export default User;