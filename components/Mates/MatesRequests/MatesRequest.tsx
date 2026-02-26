'use client';

import { formatBirthDay } from "@/utils/formatBirthDay";
import { UserItemSearch } from "@/types/mates/userItem";
import { whiteListActions } from "@/services/whitelist";
import styles from "./MatesRequests.module.css";
import Link from "next/link";

const MatesRequest = ({tab, serviceId, name, lastName, avatar, birthDay, city}: UserItemSearch<string>) => {
    const acceptRequestHandler = async () => {
        await whiteListActions(serviceId, "accept");
        window.location.reload();
    }

    const rejectRequestHandler = async () => {
        await whiteListActions(serviceId, "reject");
        window.location.reload();
    }

    const cancelRequestHandler = async () => {
        await whiteListActions(serviceId, "cancel");
        window.location.reload();
    }

    return (
        <div key={serviceId} className={styles.userItem}>
            <div onClick={() => window.location.replace(`/${serviceId}`)}>
                <img src={avatar} alt="" className={styles.userPicture}/>
            </div>
            <div className={styles.userInfo}>
                <div className={styles.userName}>{name} {lastName}</div>
                <div className={styles.userDescription}>{`${formatBirthDay(birthDay).yearsOld}, ${city}`}</div>
                <div className={styles.actions}>
                    {
                        tab === "in" ? (
                            <>
                                <div onClick={acceptRequestHandler} className={styles.accept}>Добавить</div>
                                <div onClick={rejectRequestHandler} className={styles.reject}>Отклонить</div>
                            </>
                        ) : (
                            <div onClick={cancelRequestHandler} className={styles.cancel}>Отменить заявку</div>
                        )}
                </div>
            </div>
        </div>
    );
}

export default MatesRequest;