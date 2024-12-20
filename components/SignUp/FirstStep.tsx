'use client';

import { useFormContext } from "react-hook-form";

type Props = {
    nextStep: () => {}
}

const FirstStep = ({ nextStep }: Props) => {
    const { register, formState: { errors } } = useFormContext();

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
                <select style={{height: "40px", marginTop: "5px"}} name="sex" id="sex">
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                </select>
            </label>
            <label>
                Введите вашу дату рождения
                <div>
                    <input type="date" id="birthday" />
                </div>
            </label>
            <label>
                Из какого вы города?
                <select style={{ height: "40px", marginTop: "5px" }} id="city">
                    <option value="Москва">Москва</option>
                    <option value="Санкт-Петербург">Санкт-Петербург</option>
                    <option value="Кострома">Кострома</option>
                </select>
            </label>
            <button type="button" id="step-1" className="step" onClick={nextStep} disabled={false}>Далее</button>
        </section>
    );
}

export default FirstStep;

