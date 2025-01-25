import Link from "next/link";
import NonAuthRoute from "@/components/Auth/NonAuthRoute";
import welcomeStyles from "./welcome.module.css";


const Page = () => {
    return (
        <NonAuthRoute>
            <main className={welcomeStyles.main}>
                <div className={welcomeStyles.logo}>
                    <img src="/icons/tagmate-min.svg" alt="TagMate" width="120px" />
                </div>
                <div className={welcomeStyles.hero}>
                    <h1 className={welcomeStyles.title}>Привет!</h1>
                    <p className={welcomeStyles.desc}>TagMate — ваш проводник в мире знакомств на улице, где каждый тег становится ключом к новым
                        друзьям и
                        возможным свиданиям</p>
                </div>
                <div className={welcomeStyles.menu}>
                    <Link href="/auth/login">
                        <div className={`${welcomeStyles.button} ${welcomeStyles.login}`}>Войти</div>
                    </Link>
                    <Link href="/auth/signup">
                        <div className={`${welcomeStyles.button} ${welcomeStyles.register}`}>Зарегистрироваться</div>
                    </Link>
                </div>
            </main>
            <footer className={welcomeStyles.footer}>© 2024 «Tagmate»</footer>
        </NonAuthRoute>
    );
}

export default Page;