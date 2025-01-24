'use client';

import { useRouter } from "next/navigation";
import InputConfirmCode from "@/components/SignUp/Confirm/InputConfirmCode";
import NonAuthRoute from "@/components/Auth/NonAuthRoute";
import confirmStyle from "@/app/auth/confirm/confirm.module.css";

const Confirm = () => {
    const router = useRouter();
    return (
        <NonAuthRoute>
            <div className={confirmStyle.main}>
                <div className={confirmStyle.hero}>
                    <div className={confirmStyle.back} onClick={() => router.push("/auth/signup")}>Назад</div>
                    <h1>Подтверждение кода</h1>
                </div>
                <div className={confirmStyle.form}>
                    <div className={confirmStyle["info-text"]}>
                        Введите код, отправленный на почту <span className={confirmStyle["info-mail"]}>твоя@почта.ру</span>
                    </div>
                    <InputConfirmCode />
                    <p className={confirmStyle.resend}>Не пришел код? <a className={confirmStyle["resend-button"]}>Повторить</a></p>
                </div>
            </div>
            <div className={confirmStyle.footer}>
                <button type="button" className={`${confirmStyle.button} ${confirmStyle.next}`} onClick={() => localStorage.clear()}>Подтвердить</button>
            </div>
        </NonAuthRoute>
    );
}

export default Confirm;
