import NonAuthRoute from "@/components/Auth/NonAuthRoute";
import LoginForm from "@/components/Auth/LoginForm";
import styles from "./login.module.css";


const Page = () => {


    return (
        <NonAuthRoute>
                <LoginForm />
                <footer className={styles.footer}>
                    <div className={styles.copyright}>© 2024 «TagMate»</div>
                </footer>
        </NonAuthRoute>
    );
}

export default Page;