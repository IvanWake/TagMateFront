import Link from "next/link";
import NonAuthRoute from "@/components/Auth/NonAuthRoute";

const Page = () => {
    return (
        <NonAuthRoute>
            <div className="page-welcome">
                <section id="welcome">
                    <div className="tagmate">
                        <img src="/icons/tagmate-min.svg" width="128px"/>
                        <div className="primary">Привет!</div>
                        <div className="secondary">
                            TagMate - ваш проводник в мире<br/>знакомств на улице, где каждый
                            тег<br/>становится ключом к новым друзьям<br/>и возможным свиданиям.
                        </div>
                    </div>
                    <div className="buttons">
                        <Link href="/auth/login">
                            <div className="button button-login">Войти</div>
                        </Link>
                        <Link href="/auth/signup">
                            <div className="button button-register">Зарегистрироваться</div>
                        </Link>
                    </div>
                </section>
                <footer>
                    <div className="copyright">© 2024 «TagMate»</div>
                </footer>
            </div>
        </NonAuthRoute>
    );
}

export default Page;