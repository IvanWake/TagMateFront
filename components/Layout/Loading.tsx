import styles from "./Loading.module.css";

const Loading = () => {
    return (
        <div className={styles.page}>
            <div className={styles.spin}></div>
        </div>
    );
}

export default Loading;