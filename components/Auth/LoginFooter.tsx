'use client';

import { useFormContext } from "react-hook-form";
import Link from "next/link";
import footerStyles from "./Login.module.css";
const LoginFooter = () => {
    const { formState: { isValid } } = useFormContext();

    return (
        <div className={footerStyles.footer}>
            <p>Нет аккаунта? <Link href="/auth/signup">Зарегистрироваться</Link></p>
            <button type="submit" className={`${footerStyles.button} ${footerStyles.next}`} disabled={!isValid}>Войти</button>
        </div>
    );
}

export default LoginFooter;