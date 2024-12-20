'use client';

import { useState, useEffect } from "react";
import { fetchInterests } from "@/utils/fetchInterests";

type Props = {
    nextStep: () => {}
}

const SecondStep = ({ nextStep }: Props) => {
    const [interests, setInterests] = useState();


    useEffect(() => {
        const fetchInterestsHandler = async () => {
            const res = await fetchInterests();

            const interests = await res;
            setInterests(interests);
        }

        fetchInterestsHandler();
    }, []);

    return (
        <section className="2">
            <div className="header">
                <h1 className="count">Шаг 2 из 3</h1>
                <h1>Заполнение профиля</h1>
            </div>
            <label>
                Что вы хотите обрести с нашей помощью?
                <select style={{height: "40px", marginTop: "5px"}} name="status" id="status" required>
                    <option value="1">Друзей</option>
                    <option value="2">Отношения</option>
                    <option value="3">Единомышленников</option>
                    <option value="4">Собеседников</option>
                    <option value="5">Всё вышеперечисленное</option>
                </select>
            </label>
            <label>
                Выберите все ваши интересы
                <div className="checkbox-wrapper">
                    <div className="row">
                        {
                            interests?.map((interest) => (
                                <label className="checkbox-btn">
                                    <input type="checkbox" name="interests[]" value={interest.id} />
                                    <span>{interest.value}</span>
                                </label>
                            ))
                        }

                    </div>
                </div>
            </label>
            <label>
                Добавьте фотографию профиля
                    <input type="file" name="profile-image" id="profile-image" accept="image/*"
                       accept="image/png, image/jpeg" />
            </label>
            <div id="step-2" className="step-disabled" onClick={nextStep}>Далее</div>
        </section>
    );
}

export default SecondStep;