'use client';

import { useFormContext } from "react-hook-form";

type Interest = {
    id: number,
    value: string
}

type Props = {
    nextStep: () => {},
    interests: Interest[]
}

const SecondStep = ({ nextStep, interests }: Props) => {
    const { register } = useFormContext();
    return (
        <section className="2">
            <div className="header">
                <h1 className="count">Шаг 2 из 3</h1>
                <h1>Заполнение профиля</h1>
            </div>
            {/*<label>*/}
            {/*    Что вы хотите обрести с нашей помощью?*/}
            {/*    <select style={{height: "40px", marginTop: "5px"}} name="status" id="status" required>*/}
            {/*        <option value="1">Друзей</option>*/}
            {/*        <option value="2">Отношения</option>*/}
            {/*        <option value="3">Единомышленников</option>*/}
            {/*        <option value="4">Собеседников</option>*/}
            {/*        <option value="5">Всё вышеперечисленное</option>*/}
            {/*    </select>*/}
            {/*</label>*/}
            <label>
                Выберите все ваши интересы
                <div className="checkbox-wrapper">
                    <div className="row">
                        {
                            interests?.map((interest) => (
                                <label className="checkbox-btn">
                                    <input {...register('interests')} type="checkbox" value={interest.id} />
                                    <span>{interest.value}</span>
                                </label>
                            ))
                        }

                    </div>
                </div>
            </label>
            <button type="submit" className="step" /* onClick={nextStep} */>Далее</button>
        </section>
    );
}

export default SecondStep;