const Page = () => {
    return (
        <>
            <section id="welcome">
                <div className="tagmate">
                    <img src="/icons/tagmate-min.svg" width="128px" />
                        <div className="primary">Привет!</div>
                        <div className="secondary">
                            TagMate - ваш проводник в мире<br/>знакомств на улице, где каждый
                            тег<br/>становится ключом к новым друзьям<br/>и возможным свиданиям.
                        </div>
                </div>
                <div className="buttons">
                    <div className="button button-login">Войти</div>
                    <div className="button button-register">Зарегистрироваться</div>
                </div>
            </section>
            <footer>
                <div className="copyright">© 2024 «TagMate»</div>
            </footer>
        </>
    );
}

export default Page;