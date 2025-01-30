'use client';
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import signupStyles from "./FourthStep.module.css";

const FourthStep = ({ prevStep }: { prevStep: () => {} }) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    const { register, getValues, getFieldState, formState: { errors }, watch } = useFormContext();
    const watchAllFields = watch();

    useEffect(() => {
        if (!getFieldState("repeatPassword").invalid) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [watchAllFields])

    return (
        <>
            <main className={signupStyles.main}>
                <div className={signupStyles.hero}>
                    <div className={signupStyles.back} onClick={() => prevStep()}>Назад</div>
                    <h1>Почта и пароль</h1>
                </div>
                <div className={signupStyles.form}>
                    <div className={signupStyles.input}>
                        <label>Придумай пароль</label>
                        <input
                            {...register('password', {
                                required: "Введите пароль",
                                minLength: { value: 8, message: "Не меньше 8-ми символов"}
                            })}
                            type="password"
                            placeholder="Пароль"
                        />
                        <input
                            {...register('repeatPassword', {
                                required: "Повторите пароль",
                                validate: value => value === getValues('password') || "Пароли не совпадают"
                            })}
                            type="password"
                            placeholder="Повтори пароль"
                        />
                    </div>
                    <div className={signupStyles.input}>
                        <label>Введи почту, чтобы получить тег</label>
                        <input
                            {...register("email", {
                                required: "Заполните E-mail",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Неверный формат email"
                                }
                            })}
                            type="email"
                            placeholder="твоя@почта.ру"
                        />
                    </div>
                </div>
            </main>
            <footer className={signupStyles.footer}>
                <button
                    type="submit"
                    className={`${signupStyles.button} ${signupStyles.next}`}
                    disabled={isButtonDisabled}
                >Завершить
                </button>
            </footer>
        </>
    );
}

export default FourthStep;