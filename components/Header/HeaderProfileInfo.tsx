'use client';

import styles from "./Header.module.css";

type Props = {
    name: string,
    lastName: string,
    wasOnline?: Date
}

const HeaderProfileInfo = ({ name, lastName, wasOnline }: Props) => {
    return (
        <div className="profile-info">
            <div className={styles["profile-name"]}>{name + " " + lastName}</div>
            <div className={styles["profile-online"]}>{"Был в сети" + wasOnline}</div>
        </div>
    );
}

export default HeaderProfileInfo;