import InputConfirmCode from "@/components/SignUp/FifthStep/InputConfirmCode";
import signupStyles from "./FifthStep.module.css";

const FifthStep = () => {
    return (
        <>
            <div className={signupStyles.main}>
                <div className={signupStyles.hero}>
                    <div className={signupStyles.back}>Назад</div>
                    <h1>Подтверждение кода</h1>
                </div>
                <div className={signupStyles.form}>
                    <div className={signupStyles["info-text"]}>
                        Введите код, отправленный на почту <span className={signupStyles["info-mail"]}>твоя@почта.ру</span>
                    </div>
                    <InputConfirmCode />
                    <p className={signupStyles.resend}>Не пришел код? <a className={signupStyles["resend-button"]}>Повторить</a></p>
                </div>
            </div>
            <div className={signupStyles.footer}>
                <button className={`${signupStyles.button} ${signupStyles.next}`}>Подтвердить</button>
            </div>
        </>
    );
}

export default FifthStep;
