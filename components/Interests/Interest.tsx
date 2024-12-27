'use client';

import styles from "./Interests.module.css";

type Props = { interest: string }

const Interest = ({ interest }: Props) => {
    return (
        <>
            <div className={styles["interest-row"]}>
                <div className={styles["interest-item"]}>
                    {interest}
                </div>
            </div>
        </>
    );
}

export default Interest;