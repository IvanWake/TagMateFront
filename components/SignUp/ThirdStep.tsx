'use client';

const ThirdStep = () => {
    return (
        <section className="3">
            <div className="header">
                <h1 className="count">Шаг 3 из 3</h1>
                <h1>Завершение регистрации</h1>
            </div>
            <label>
                Придумайте пароль
                <div>
                    <input type="new-password" placeholder="Пароль" autoComplete="off" name="password" id="password"
                           required />
                        <input type="new-password" placeholder="Повторите" autoComplete="off" name="password-repeat"
                               id="password-repeat" required />
                </div>
            </label>

            <label>
                Введите почту, чтобы получить тег
                <input type="email" placeholder="name@mail.ru" name="email" id="email" required />
            </label>

            <button name="action" value="register">Завершить</button>
        </section>
    );
}

export default ThirdStep;