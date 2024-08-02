import NonAuthRoute from "@/components/Auth/NonAuthRoute";
import styles from "./login.module.css";

const Page = () => {
    return (
        <NonAuthRoute>
            <section id="welcome" className={styles.section}>
                <div className={styles.tagmate}>
                    <img src="/icons/tagmate-min.svg" width="100px" />
                    <p>Авторизация в <span className={styles.span}>TagMate</span></p>
                </div>
                <div className={styles.auth}>
                    <div className={styles["input-tag"]}>
                        <span className={styles.span}>#</span>
                        <input type="text" name="tag" minLength="4" maxLength="4" autoComplete="off" placeholder="XXXX"
                               autoFocus required/>
                    </div>
                    <input className={styles.input} type="password" name="password" autoComplete="off" placeholder="Пароль"
                           required/>
                    <div className={styles.button}>Войти</div>
                </div>
                <p className={styles["forgot-pw"]}>Забыли пароль? <span>Восстановить</span></p>
            </section>
            <footer>
                <div className={styles.copyright}>© 2024 «TagMate»</div>
            </footer>
        </NonAuthRoute>
    );
}

export default Page;