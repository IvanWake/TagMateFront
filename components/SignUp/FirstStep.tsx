'use client';

import { useFormContext } from "react-hook-form";

type Props = {
    nextStep: () => void
}

const FirstStep = ({ nextStep }: Props) => {
    const { register, formState: { errors, isValid } } = useFormContext();

    return (
        <section className="1">
            <div className="header">
                <h1 className="count">Шаг 1 из 3</h1>
                <h1>Создание профиля</h1>
            </div>
            <p>Расскажите немного о себе, чтобы вы могли знакомиться с другими пользователями <span>TagMate</span>.</p>
            <label>
                Как нам следует вас называть?
                <input {...register("lastName", { required: "Это поле обязательно" })} type="text" placeholder="Фамилия" autoComplete="off" />
                {errors.lastName && <span>{errors.lastName.message}</span>}
                <input {...register("firstName", { required: "Это поле обязательно" })} type="text" placeholder="Имя" autoComplete="off" />
                {errors.firstName && <span>{errors.firstName.message}</span>}
                <input {...register("patronymic", { required: "Это поле обязательно" })} type="text" placeholder="Отчество" autoComplete="off" />
                {errors.patronymic && <span>{errors.patronymic.message}</span>}
            </label>
            <label>
                Выберите ваш пол
                <select {...register("sex", { required: "Это поле обязательно" })} style={{height: "40px", marginTop: "5px"}}>
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                </select>
                {errors.sex && <span>{errors.sex.message}</span>}
            </label>
            <label>
                Введите вашу дату рождения
                <div>
                    <input {...register("birthday", { required: "Это поле обязательно" })} type="date" />
                    {errors.birthday && <span>{errors.birthday.message}</span>}
                </div>
            </label>
            <label>
                Из какого вы города?
                <select {...register("city", { required: "Это поле обязательно" })} style={{height: "40px", marginTop: "5px"}}>
                    <option value="MOW">Москва</option>
                    <option value="SPB">Санкт-Петербург</option>
                </select>
                {errors.city && <span>{errors.city.message}</span>}
            </label>
            <button
                type="button"
                id="step-1"
                className="step"
                disabled={errors.city || errors.birthday || errors.sex || errors.patronymic || errors.firstName || errors.lastName}
                onClick={nextStep}>Далее</button>
        </section>
    );
}

export default FirstStep;

