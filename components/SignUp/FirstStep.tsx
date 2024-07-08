'use client';

type Props = {
    nextStep: () => {}
}

const FirstStep = ({ nextStep }: Props) => {
    return (
        <section className="1">
            <div className="header">
                <h1 className="count">Шаг 1 из 3</h1>
                <h1>Создание профиля</h1>
            </div>
            <p>Расскажите немного о себе, чтобы вы могли знакомиться с другими пользователями <span>TagMate</span>.</p>
            <label>
                Как нам следует вас называть?
                <input type="text" placeholder="Фамилия" autoComplete="off" name="lastName" id="lastName" required />
                    <input type="text" placeholder="Имя" autoComplete="off" name="firstName" id="firstName" required />
                        <input type="text" placeholder="Отчество" autoComplete="off" name="patronymic" id="patronymic" required />
            </label>
            <label>
                Выберите ваш пол
                <select style={{height: "40px", marginTop: "5px"}} name="sex" id="sex" required>
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                </select>
            </label>
            <label>
                Введите вашу дату рождения
                <div>
                    <input type="date" name="birthday" id="birthday" required />
                </div>
            </label>
            <label>
                Из какого вы города?
                <select style={{height: "40px", marginTop: "5px"}} name="city" id="city" required>
                    <option value="MOW">Москва</option>
                    <option value="SPB">Санкт-Петербург</option>
                    <option value="KOS">Кострома</option>
                </select>
            </label>
            <div id="step-1" className="step-disabled" onClick={nextStep}>Далее</div>
        </section>
    );
}

export default FirstStep;