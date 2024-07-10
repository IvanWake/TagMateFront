const Page = () => {
    return (
        <>
            <section id="welcome">
                <div className="tagmate">
                    <img src="/icons/tagmate-min.svg" width="100px"/>
                        <p>Авторизация в <span>TagMate</span></p>
                </div>
                <div className="auth">
                    <div className="input-tag">
                        <span>#</span>
                        <input type="text" name="tag" minLength="4" maxLength="4" placeholder="XXXX" autoFocus required />
                    </div>
                    <input className="input" type="password" name="password" placeholder="Пароль" required />
                        <div className="button">Войти</div>
                </div>
                <p className="forgot-pw">Забыли пароль? <span>Восстановить</span></p>
            </section>
            <footer>
                <div className="copyright">© 2024 «TagMate»</div>
            </footer>
        </>
    );
}

export default Page;