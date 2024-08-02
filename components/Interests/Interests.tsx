'use client';

import Interest from "@/components/Interests/Interest";
import styles from "./Interests.module.css";

const Interests = () => {
    return (
        <>
            <p className="title">Интересы</p>
            <div className={styles["interests-list"]}>
               <Interest />
            </div>
        </>
    );
}

export default Interests;