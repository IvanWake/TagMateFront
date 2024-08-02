'use client';
import styles from "./FamilyStatus.module.css";

const FamilyStatus = () => {
    return (
        <>
            <p className="title">Статус</p>
            <div className={styles["status-wrapper"]}>
                В поиске <span>отношений</span>
            </div>
        </>
    );
}

export default FamilyStatus;