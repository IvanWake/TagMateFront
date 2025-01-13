'use client';

import styles from "./Stats.module.css";

type Props = {
    mates: number,
    friendlinessFactor: number
}

const Stats = ({ mates, friendlinessFactor }: Props) => {
    return (
        <div className={styles["stats-wrapper"]}>
            <div className={styles["stats-element"]}>
                <div className={styles["stats-element-info"]}>{friendlinessFactor}%</div>
                <div className={styles["stats-element-name"]}>Дружелюбие</div>
            </div>
            <div className={styles["stats-element"]}>
                <div className={styles["stats-element-info"]}>{mates}</div>
                <div className={styles["stats-element-name"]}>Мейты</div>
            </div>
        </div>
    );
}

export default Stats;