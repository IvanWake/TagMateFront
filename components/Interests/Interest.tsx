'use client';

import styles from "./Interests.module.css";

const Interest = () => {
    return (
        <>
            <div className={styles["interest-row"]}>
                <div className={styles["interest-item"]}>
                    Кулинария
                </div>
                <div className={styles["interest-item"]}>
                    Оригами
                </div>
                <div className={styles["interest-item"]}>
                    Аниме
                </div>
                <div className={styles["interest-item"]}>
                    Прогулки
                </div>
            </div>
            <div className={styles["interest-row"]}>
                <div className={styles["interest-item"]}>
                    Сериалы
                </div>
                <div className={styles["interest-item"]}>
                    Веб-дизайн
                </div>
                <div className={styles["interest-item"]}>
                    Кальян
                </div>
            </div>
        </>
    );
}

export default Interest;