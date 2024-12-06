'use client';

import { useEffect } from "react";
import { displayHeaderProfileHandler } from "@/services/layout";
import styles from "./Header.module.css";

type Props = {
    name: string,
    lastName: string,
    wasOnline?: Date
}

const HeaderProfile = ({ name, lastName, wasOnline }: Props) => {
    useEffect(() => {
        window.addEventListener("scroll", displayHeaderProfileHandler);
    }, [])

    return (
        <>
            <div className={styles["profile-image"]}>
                <img
                    src="https://avatars.mds.yandex.net/i?id=950a3ac5bab93652b5b5311e7e711cf2b6ea2ac0-12714644-images-thumbs&n=13"
                />
            </div>
            <div className="profile-header">
                <img
                    src="https://avatars.mds.yandex.net/i?id=950a3ac5bab93652b5b5311e7e711cf2b6ea2ac0-12714644-images-thumbs&n=13"
                    className={styles["profile-header-image"]}/>
                <div className={styles["profile-header-info"]}>
                    <div className={styles["profile-name"]}>{name + " " + lastName}</div>
                    <div className={styles["profile-online"]}>{"Был в сети " + wasOnline}</div>
                </div>
            </div>
        </>
    );
}

export default HeaderProfile;