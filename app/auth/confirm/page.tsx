'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { userConfirm } from "@/services/auth";
import confirmStyle from "./confirm.module.css";

const Confirm = () => {
    const [confirmCode, setConfirmCode] = useState(["", "", "", ""])
    const [errorConfirm, setErrorConfirm] = useState();
    const router = useRouter();
    const inputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];
    const userMail = localStorage.getItem("userMail");

    const backToConfirmHandler = () => {
        localStorage.removeItem("confirmProcess");
        router.push("/auth/signup");
    }

    const onChangeHandler = (index: number, value: string) => {
        const newConfirmCode = [...confirmCode];
        newConfirmCode[index] = value.toUpperCase();
        setConfirmCode(newConfirmCode);

        if (value && index < 3) {
            inputRefs[index + 1].current?.focus()
        }
    }

    const onKeyDownHandler = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !confirmCode[index] && index > 0) {
            inputRefs[index - 1].current?.focus();
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const res = await userConfirm(confirmCode.join(""));
        if (res.message) {
            setErrorConfirm(res.message);
            return;
        }
        localStorage.clear();
        router.push("/");
    }

    useEffect(() => {
        const confirmProcess = localStorage.getItem("confirmProcess");
        if (!confirmProcess) {
            router.push("/auth/welcome");
        }
    }, [])

    return (
        <body className={confirmStyle.body}>
        <form style={{ display: "flex", flexDirection: "column", flex: 1 }} onSubmit={submitHandler}>
            <div className={confirmStyle.main}>
                <div className={confirmStyle.hero}>
                    <div className={confirmStyle.back} onClick={backToConfirmHandler}>Назад</div>
                    <h1>Подтверждение кода</h1>
                </div>
                <div className={confirmStyle.form}>
                    <div className={confirmStyle["info-text"]}>
                        Введите код, отправленный на почту <span className={confirmStyle["info-mail"]}>{userMail}</span>
                    </div>
                    <div className={confirmStyle["input-group"]}>
                        {
                            confirmCode?.map((item, index) => (
                                <input
                                    className={errorConfirm && confirmStyle["input-error"]}
                                    key={index}
                                    ref={inputRefs[index]}
                                    required={true}
                                    type="text"
                                    value={item}
                                    maxLength={1}
                                    autoComplete="one-time-code"
                                    onChange={(e) => onChangeHandler(index, e.target.value)}
                                    onKeyDown={(e) => onKeyDownHandler(index, e)}
                                />
                            ))
                        }
                    </div>
                        { errorConfirm && <p className={confirmStyle.alert}>{errorConfirm}</p> }
                    <p className={confirmStyle.resend}>Не пришел код? <a className={confirmStyle["resend-button"]}>Повторить</a></p>
                </div>
            </div>
            <div className={confirmStyle.footer}>
                <button type="submit" className={`${confirmStyle.button} ${confirmStyle.next}`}>Подтвердить</button>
            </div>
        </form>
        </body>
    );
}

export default Confirm;
