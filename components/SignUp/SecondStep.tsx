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
            <label>
                Что вы хотите обрести с нашей помощью?
                <select {...register('purpose')} style={{height: "40px", marginTop: "5px"}} name="status" id="status" required>
                    <option value="fiends">Друзей</option>
                    <option value="relationship">Отношения</option>
                    <option value="confederate">Единомышленников</option>
                    <option value="companion">Собеседников</option>
                    <option value="all">Всё вышеперечисленное</option>
                </select>
            </label>
            <label>
                Выберите все ваши интересы
                <div className="checkbox-wrapper">
                    <div className="row">
                        {
                            interests?.map((interest) => (
                                <label className="checkbox-btn" key={interest.id} id={interest.id}>
                                    <input {...register('interests')} type="checkbox" value={interest.id} />
                                    <span>{interest.value}</span>
                                </label>
                            ))
                        }

                    </div>
                </div>
            </label>
            {/*<label>*/}
            {/*    Добавьте фотографию профиля*/}
            {/*    <input*/}
            {/*        { ...register('profileImage') }*/}
            {/*        type="file"*/}
            {/*        id="profile-image"*/}
            {/*        accept="image/png, image/jpeg"*/}
            {/*    />*/}
            {/*</label>*/}
            <button type="button" className="step" onClick={nextStep}>Далее</button>
        </section>
    );
}

export default SecondStep;