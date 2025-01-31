'use client';

import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { cacheUserFormDataBySteps } from "@/utils/cacheUserFormDataBySteps";
import {Step} from "@/types/signup/steps";
import Link from "next/link";
import signupStyles from "./FirstStep.module.css";


const FirstStep = ({nextStep, stepId}: Step) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    const { register, formState: {errors}, getValues, watch} = useFormContext();
    const watchAllFields = watch();

    useEffect(() => {

        const values = getValues();

        if (values.name && values.lastName && values.gender && values.birthDay && values.city) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [watchAllFields])

    const logUserDataHandler = () => {
        const values = getValues();
        cacheUserFormDataBySteps(stepId, {
            name: values.name, lastName: values.lastName,
            gender: values.gender, birthDay: values.birthDay, city: values.city
        });
        nextStep();
    }



    return (
        <>
            <main className={signupStyles.main}>
                <div className={signupStyles.hero}>
                    <h1>Создание профиля</h1>
                    <p>Расскажи немного о себе, чтобы ты мог знакомиться с другими пользователями</p>
                </div>
                <div className={signupStyles.form}>
                    <div className={signupStyles.input}>
                        <label>Как тебя зовут?</label>
                        <input
                            {...register('name', { required: "Это поле обязательно"})}
                            type="text"
                            placeholder="Имя"
                            autoComplete="off"
                        />
                        <input
                            {...register('lastName', {required: "Это поле обязательно"})}
                            type="text"
                            placeholder="Фамилия"
                            autoComplete="off"
                        />
                    </div>
                    <div className={signupStyles.input}>
                        <label>Из какого ты города?</label>
                        <div className={signupStyles.icon}>
                            <img src="/icons/auth/city.svg" alt="City"/>
                            <select
                                className={signupStyles.select} {...register('city', {required: "Выберите город"})} >
                                <option value="1459">Москва</option>
                                <option value="1900">Санкт-Петербург</option>
                                <option value="1580">Новосибирск</option>
                                <option value="714">Екатеринбург</option>
                                <option value="947">Казань</option>
                            </select>
                        </div>
                    </div>
                    <div className={signupStyles.input}>
                        <label htmlFor="birthday">Дата рождения</label>
                        <div className={signupStyles.icon}>
                            <img src="/icons/auth/calendar.svg" alt="Birth day"/>
                            <input
                                {...register('birthDay')}
                                type="date"
                                placeholder="15.09.2005"
                                id="birthday"
                                max={new Date(new Date().getFullYear() - 14, new Date().getMonth(), new Date().getDate())
                                    .toISOString()
                                    .split("T")[0]}
                            />
                        </div>

                    </div>
                    <div className={signupStyles.input}>
                        <label>Выбери пол</label>
                        <select className={signupStyles.select} {...register('gender')}>
                            <option value="male">Мужской</option>
                            <option value="female">Женский</option>
                        </select>
                    </div>
                </div>
            </main>
            <footer className={signupStyles.footer}>
                <p>Есть аккаунт? <Link href="/auth/login">Войти</Link></p>
                <button
                    className={`${signupStyles.button} ${signupStyles.next}`}
                    type="button"
                    onClick={logUserDataHandler}
                    disabled={isButtonDisabled}
                    >Далее
                </button>
            </footer>
        </>
    )
}

export default FirstStep;

