'use client';

import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

type City = {
    _id: string,
    id: number,
    region: string,
    city: string,
    __v: number
}

type Props = {
    nextStep: () => {},
    cities: City[]
}

const FirstStep = ({ nextStep, cities }: Props) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    const { register, formState: { errors }, getValues, watch } = useFormContext();

    const watchAllFields = watch();

    useEffect(() => {
        const values = getValues();

        if (values.firstName && values.lastName && values.surName && values.sex && values.birthday && values.city) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [watchAllFields])

    return (
        <section className="1">
            <div className="header">
                <h1 className="count">Шаг 1 из 3</h1>
                <h1>Создание профиля</h1>
            </div>
            <p>Расскажите немного о себе, чтобы вы могли знакомиться с другими пользователями <span>TagMate</span>.</p>
            <label>
                Как нам следует вас называть?
                <input {...register('lastName', { required: "Это поле обязательно" })} type="text" placeholder="Фамилия" autoComplete="off" id="lastName" />
                    <input {...register('firstName', { required: "Это поле обязательно" })} type="text" placeholder="Имя" autoComplete="off" id="firstName" />
                        <input {...register('surName', { required: "Это поле обязательно" })} type="text" placeholder="Отчество" autoComplete="off" id="surName"  />
            </label>
            <label>
                Выберите ваш пол
                <select { ...register('sex') } style={{ height: "40px", marginTop: "5px" }} name="sex" id="sex">
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                </select>
            </label>
            <label>
                Введите вашу дату рождения
                <div>
                    <input
                        { ...register('birthday') }
                        type="date"
                        id="birthday"
                        max={new Date().toISOString().split('T')[0]}
                    />
                </div>
            </label>
            <label>
                Из какого вы города?
                <select { ...register('city', { required: "Выберите город" }) } style={{ height: "40px", marginTop: "5px" }} id="city">
                    {
                        cities?.map((city) => (
                            <option key={city.id} value={city.id}>{city.city}</option>
                        ))
                    }
                </select>
            </label>
            <button
                type="button"
                id="step-1"
                className="step"
                onClick={nextStep}
                disabled={isButtonDisabled}
            >
                Далее
            </button>
        </section>
    );
}

export default FirstStep;

