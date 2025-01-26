'use client';

import { useFormContext } from "react-hook-form";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import mainStyles from "@/components/Auth/Login.module.css";

const LoginForm = () => {
    const { register } = useFormContext();

    return (
        <div className={mainStyles.main}>
            <div className={mainStyles.hero}>
                <h1>Авторизация</h1>
                <p>Добро пожаловать в TagMate</p>
            </div>
            <div className={mainStyles.form}>
                <div className={mainStyles.input}>
                    <label htmlFor={mainStyles["user-tag"]}>
                        <div className={mainStyles.tag}>#</div>
                        <input
                            {...register("userTag", {
                                required: "Заполните поле",
                                maxLength: {
                                    value: 4,
                                    message: "Не больше 4-ёх символов"
                                }
                            })}
                            type="text"
                            id="user-tag"
                            maxLength={4}
                            placeholder="Тег"
                        />
                    </label>
                    <input
                        type="password"
                        placeholder="Пароль"
                    />
                        <p>Забыли пароль? <Link href="/auth/recovery">Восстановить</Link></p>
                </div>
            </div>
        </div>
);
}

export default LoginForm;
