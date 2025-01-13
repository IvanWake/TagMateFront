'use client';

import styles from "./Interests.module.css";

type Props = { interest: string, key: string }

const Interest = ({ interest, key }: Props) => {
    return (
            <div key={key} className={styles["interest-row"]}>
                <div className={styles["interest-item"]}>
                    {interest}
                </div>
            </div>
    );
}

export default Interest;