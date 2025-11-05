'use client';

import { formatBirthDay } from "@/utils/formatBirthDay";
import { UserItemSearch } from "@/types/mates/userItem";
import styles from "./MatesRequests.module.css";
import Link from "next/link";

const MatesRequest = ({ tab, serviceId, name, lastName, avatar, birthDay, city }: UserItemSearch<string>) => {
    return (
        <Link href={`/${serviceId}`}>
            <div key={serviceId} className={styles.userItem}>
                <img src={avatar} alt="" className={styles.userPicture} />
                <div className={styles.userInfo}>
                    <div className={styles.userName}>{name} {lastName}</div>
                    <div className={styles.userDescription}>{`${formatBirthDay(birthDay).yearsOld}, ${city}`}</div>
                    <div className={styles.actions}>
                        {
                            tab === "in" ? (
                            <>
                                <div className={styles.accept}>Добавить</div>
                                <div className={styles.reject}>Отклонить</div>
                            </>
                        ) : (
                            <div className={styles.cancel}>Отменить заявку</div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default MatesRequest;