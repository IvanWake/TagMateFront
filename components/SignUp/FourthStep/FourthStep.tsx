'use client';
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import signupStyles from "./FourthStep.module.css";

const FourthStep = ({ prevStep }: { prevStep: () => {} }) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    const { register, getValues, formState: { errors, isValid }, watch } = useFormContext();

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
                                minLength: { value: 8, message: "Пароль не меньше 8-ми символов"}
                            })}
                            type="password"
                            placeholder="Пароль"
                        />
                        { errors.password?.message && <p>{errors.password?.message}</p> }
                        <input
                            {...register('repeatPassword', {
                                required: "Повторите пароль",
                                validate: value => value === getValues('password') || "Пароли не совпадают"
                            })}
                            type="password"
                            placeholder="Повтори пароль"
                        />
                        { errors.repeatPassword?.message && <p>{errors.repeatPassword?.message}</p> }

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
                        { errors.email?.message && <p>{errors.email?.message}</p> }

                    </div>
                </div>
            </main>
            <footer className={signupStyles.footer}>
                <button
                    type="submit"
                    className={`${signupStyles.button} ${signupStyles.next}`}
                    disabled={!isValid}
                >Завершить
                </button>
            </footer>
        </>
    );
}

export default FourthStep;