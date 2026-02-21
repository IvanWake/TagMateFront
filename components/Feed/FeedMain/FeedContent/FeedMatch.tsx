import feedStyles from "./FeedContent.module.css";

const FeedMatch = ({photo}: {photo: string}) => {
    return (
        <div className={feedStyles.feedMatch}>
            <div className={feedStyles.contentWrapper}>
                <div className={feedStyles.photoContainer}>
                  <img src={photo} alt="Фото мейта" className={feedStyles.photo}/>
                </div>
                <div className={feedStyles.feedTitle}>Это мэтч!</div>
                <div className={feedStyles.feedText}>{"Мэтч — это только первый шаг. Не упусти шанс узнать друг друга ближе)"}</div>
            </div>
            <div className={feedStyles.buttons}>
                <div onClick={() => window.location.replace("/")} className={feedStyles.button + " " + feedStyles.buttonPrimary} aria-label="Профиль">Перейти в профиль</div>
                <div onClick={() => window.location.replace("/feed")} className={feedStyles.button + " " + feedStyles.buttonSecondary} aria-label="Лента">Вернуться в ленту</div>
            </div>
        </div>
    );
}

export default FeedMatch;