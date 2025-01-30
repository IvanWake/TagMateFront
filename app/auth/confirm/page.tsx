'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import InputConfirmCode from "@/components/SignUp/Confirm/InputConfirmCode";
import confirmStyle from "./confirm.module.css";

const Confirm = () => {
    const userMail = localStorage.getItem("userMail");
    const router = useRouter();

    const backToConfirmHandler = () => {
        localStorage.removeItem("confirmProcess");
        router.push("/auth/signup");
    }

    useEffect(() => {
        const confirmProcess = localStorage.getItem("confirmProcess");
        if (!confirmProcess) {
            router.push("/auth/welcome");
        }
    }, [])

    return (
        <body className={confirmStyle.body}>
            <div className={confirmStyle.main}>
                <div className={confirmStyle.hero}>
                    <div className={confirmStyle.back} onClick={backToConfirmHandler}>Назад</div>
                    <h1>Подтверждение кода</h1>
                </div>
                <div className={confirmStyle.form}>
                    <div className={confirmStyle["info-text"]}>
                        Введите код, отправленный на почту <span className={confirmStyle["info-mail"]}>{userMail}</span>
                    </div>
                    <InputConfirmCode />
                    <p className={confirmStyle.resend}>Не пришел код? <a className={confirmStyle["resend-button"]}>Повторить</a></p>
                </div>
            </div>
            <div className={confirmStyle.footer}>
                <button type="button" className={`${confirmStyle.button} ${confirmStyle.next}`} onClick={() => localStorage.clear()}>Подтвердить</button>
            </div>
        </body>
    );
}

export default Confirm;
