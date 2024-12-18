'use client';

import { useFormContext } from "react-hook-form";

type Props = {
    nextStep: () => void
}

const SecondStep = ({ nextStep }: Props) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <section className="2">
            <div className="header">
                <h1 className="count">Шаг 2 из 3</h1>
                <h1>Заполнение профиля</h1>
            </div>
            <label>
                Что вы хотите обрести с нашей помощью?
                <select {...register("status", { required: "Это поле обязательно" })} style={{height: "40px", marginTop: "5px"}}>
                    <option value="1">Друзей</option>
                    <option value="2">Отношения</option>
                    <option value="3">Единомышленников</option>
                    <option value="4">Собеседников</option>
                    <option value="5">Всё вышеперечисленное</option>
                </select>
                {errors.status && <span>{errors.status.message}</span>}
            </label>
            <label>
                Выберите все ваши интересы
                <div className="checkbox-wrapper">
                    <div className="row">
                        {/* Повторите это для всех интересов */}
                        <label className="checkbox-btn">
                            <input {...register("interests")} type="checkbox" value="1"/>
                            <span>Путешествия</span>
                        </label>
                        {/* ... */}
                    </div>
                </div>
            </label>
            <label>
                Добавьте фотографию профиля
                <input {...register("profileImage")} type="file" accept="image/png, image/jpeg" />
            </label>
            <div id="step-2" className="step" onClick={nextStep}>Далее</div>
        </section>
    );
}

export default SecondStep;

