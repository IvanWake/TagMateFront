import Link from "next/link";
import footerStyles from "./Login.module.css";
const LoginFooter = () => {
    return (
        <div className={footerStyles.footer}>
            <p>Нет аккаунта? <Link href="/auth/signup">Зарегистрироваться</Link></p>
            <button className={`${footerStyles.button} ${footerStyles.next}`}>Войти</button>
        </div>
    );
}

export default LoginFooter;