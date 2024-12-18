'use client';

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { userLogin } from "@/services/auth";
import { useRouter } from 'next/navigation';
import styles from "@/app/auth/login/login.module.css";

const LoginForm = () => {
    const router = useRouter();

    const { register,
        handleSubmit,
        formState: { isValid}
    } = useForm({ mode: "onBlur" });

    const onSubmitHandler = (formData) => {
        if (isValid) {
            userLogin(formData.userTag, formData.userPassword);
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <section id="welcome" className={styles.section}>

                <div className={styles.tagmate}>
                    <img src="/icons/tagmate-min.svg" width="100px" alt="logo"/>
                    <p>Авторизация в <span className={styles.span}>TagMate</span></p>
                </div>
                <div className={styles.auth}>
                    <div className={styles["input-tag"]}>
                        <span className={styles.span}>#</span>
                        <input
                            {...register("userTag", {
                                required: "Заполните поле",
                                maxLength: {
                                    value: 4,
                                    message: "Не больше 4-ёх символов"
                                }
                            })}
                            type="text"
                            minLength="4"
                            maxLength="4"
                            autoComplete="off"
                            placeholder="XXXX"
                            autoFocus
                        />
                    </div>
                    <input
                        {...register("userPassword", {
                            required: "Заполните поле",
                            minLength: { value: 6, message: "Не меньше 6-ти символов" }
                        })}
                        className={styles.input}
                        type="password"
                        autoComplete="off"
                        placeholder="Пароль"
                    />
                    <button type="submit" className={styles.button}>Войти</button>
                </div>

                <p className={styles["forgot-pw"]}>Забыли пароль? <span>Восстановить</span></p>
            </section>
        </form>
    );
}

export default LoginForm;
