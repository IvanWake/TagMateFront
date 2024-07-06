'use client';

const SecondStep = () => {
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
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="1"/>
                                <span>Путешествия</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="2"/>
                                <span>Фотография</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="3"/>
                                <span>Музыка</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="4"/>
                                <span>Искусство</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="5"/>
                                <span>Спорт</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="6"/>
                                <span>Кино</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="7"/>
                                <span>Литература</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="8"/>
                                <span>Кулинария</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="9"/>
                                <span>Танцы</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="10"/>
                                <span>Путешествия на природе</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="11"/>
                                <span>Велоспорт</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="12"/>
                                <span>Чтение</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="13"/>
                                <span>Театр</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="14"/>
                                <span>Горы и альпинизм</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="15"/>
                                <span>Изучение языков</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="16"/>
                                <span>Азартные игры</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="17"/>
                                <span>Плавание</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="18"/>
                                <span>Аниме и манга</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="19"/>
                                <span>Видео-игры</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="20"/>
                                <span>Живопись</span>
                        </label>
                    </div>
                    <div className="row">
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="21"/>
                                <span>Фотоискусство</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="22"/>
                                <span>Астрономия</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="23"/>
                                <span>Компьютерные игры</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="24"/>
                                <span>Вождение автомобиля</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="25"/>
                                <span>История</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="26"/>
                                <span>География</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="27"/>
                                <span>Философия</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="28"/>
                                <span>Психология</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="29"/>
                                <span>Экстрим</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="30"/>
                                <span>Туризм</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="31"/>
                                <span>Дизайн</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="32"/>
                                <span>Техника</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="33"/>
                                <span>Фитнес</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="34"/>
                                <span>Собаки</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="35"/>
                                <span>Кошки</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="36"/>
                                <span>Рыбалка</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="37"/>
                                <span>Садоводство</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="38"/>
                                <span>Флористика</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="39"/>
                                <span>Граффити</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="interests[]" value="40"/>
                                <span>Мотоспорт</span>
                        </label>
                    </div>
                </div>
            </label>
            <label>
                Добавьте фотографию профиля
                <input type="file" name="profile-image" id="profile-image" accept="image/*"
                       accept="image/png, image/jpeg" />
            </label>
            <div id="step-2" className="step-disabled">Далее</div>
        </section>
    );
}

export default SecondStep;