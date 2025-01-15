import signupStyles from "./FourthStep.module.css";

const FourthStep = () => {
    return (
        <>
            <main className={signupStyles.main}>
                <div className={signupStyles.hero}>
                    <div className={signupStyles.back}>Назад</div>
                    <h1>Почта и пароль</h1>
                </div>
                <div className={signupStyles.form}>
                    <div className={signupStyles.input}>
                        <label>Придумай пароль</label>
                        <input type="password" placeholder="Пароль"/>
                        <input type="password" placeholder="Повтори пароль"/>
                    </div>
                    <div className={signupStyles.input}>
                        <label>Введи почту, чтобы получить тег</label>
                        <input type="email" placeholder="твоя@почта.ру"/>
                    </div>
                </div>
            </main>
            <footer className={signupStyles.footer}>
                <button className={`${signupStyles.button} ${signupStyles.next}`}>Завершить</button>
            </footer>
        </>
    );
}

export default FourthStep;