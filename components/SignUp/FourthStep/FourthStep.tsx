import { useFormContext } from "react-hook-form";
import signupStyles from "./FourthStep.module.css";

const FourthStep = () => {
    const { register, getValues, formState: { errors } } = useFormContext();

    return (
        <>
            <main className={signupStyles.main}>
                <div className={signupStyles.hero}>
                    <div className={signupStyles.back}>Назад</div>
                    <h1>Почта и пароль</h1>
                </div>
                <div className={signupStyles.form}>
                    <div className={signupStyles.input}>
                        <label>Придумай пароль</label>
                        <input
                            {...register('password', {
                                required: "Введите пароль",
                                minLength: { value: 6, message: "Не меньше 6-ти символов" }
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
                <button className={`${signupStyles.button} ${signupStyles.next}`}>Завершить</button>
            </footer>
        </>
    );
}

export default FourthStep;