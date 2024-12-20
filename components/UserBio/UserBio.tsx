'use client';


import { formatBirthDay } from "@/utils/formatBirthDay";
import styles from "./UserBio.module.css";

type Props = {
    gender: string,
    birthDay: string,
    city: string
}

const UserBio = ({ gender, birthDay, city }: Props) => {
    const males= { "male": "Мужской", "female": "Женский" };

    return (
        <div className={styles["description-wrapper"]}>
            <div className={styles["desc-element"]}>
                <div className={styles["desc-name"]}>Пол</div>
                <div className="desc-info">{males[gender]}</div>
            </div>
            <div className={styles["desc-element"]}>
                <div className={styles["desc-name"]}>Дата рождения</div>
                <div className={styles["desc-info"]}>{formatBirthDay(birthDay)}</div>
            </div>
            <div className={styles["desc-element"]}>
                <div className={styles["desc-name"]}>Город</div>
                <div className={styles["desc-info"]}>{city}</div>
            </div>
        </div>
    );
}

export default UserBio;