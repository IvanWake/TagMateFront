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
                <div className="regPassContainer">
                    <div className="regPass">
                        <input

                            type="password"
                            placeholder="Пароль"
                            autoComplete="off"
                            id="password"
                        />
                        {errors.password && <span>{errors.password.message}</span>}
                    </div>
                    <div className="regPass">
                        <input

                            type="password"
                            placeholder="Повторите"
                            autoComplete="off"
                            id="password-repeat"
                        />
                        {errors.repeatPassword && <span>{errors.repeatPassword.message}</span>}
                    </div>
                </div>
            </label>

            <label className="regPass">
                Введите почту, чтобы получить тег
                <input

                    type="email"
                    placeholder="name@mail.ru"
                    id="email"
                />
                {errors.email && <span>{errors.email.message}</span>}
            </label>

            <button type="submit">Завершить</button>
        </section>
    );
};

export default ThirdStep;

