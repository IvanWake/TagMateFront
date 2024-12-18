'use client';

import { useFormContext } from "react-hook-form";

const ThirdStep = () => {
    const { register, formState: { errors }, getValues } = useFormContext();

    return (
        <section className="3">
            <div className="header">
                <h1 className="count">Шаг 3 из 3</h1>
                <h1>Завершение регистрации</h1>
            </div>
            <label>
                Придумайте пароль
                <div>
                    <input {...register("password", {
                        required: "Это поле обязательно",
                        minLength: { value: 8, message: "Пароль должен содержать минимум 8 символов" }
                    })} type="password" placeholder="Пароль" autoComplete="new-password" />
                    {errors.password && <span>{errors.password.message}</span>}
                    <input {...register("passwordRepeat", {
                        required: "Это поле обязательно",
                        validate: value => value === getValues("password") || "Пароли не совпадают"
                    })} type="password" placeholder="Повторите" autoComplete="new-password" />
                    {errors.passwordRepeat && <span>{errors.passwordRepeat.message}</span>}
                </div>
            </label>

            <label>
                Введите почту, чтобы получить тег
                <input {...register("email", {
                    required: "Это поле обязательно",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Неверный формат email"
                    }
                })} type="email" placeholder="name@mail.ru" />
                {errors.email && <span>{errors.email.message}</span>}
            </label>

            <button type="submit">Завершить</button>
        </section>
    );
}

export default ThirdStep;

