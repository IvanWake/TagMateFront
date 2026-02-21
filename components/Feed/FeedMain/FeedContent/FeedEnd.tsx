import feedStyles from "./FeedContent.module.css";
import feedMainImg from "@/public/purposesImg/feed_main-img.svg";
import Image from "next/image";

const FeedEnd = () => {
    return (
        <div className={feedStyles.feedEmpty}>
            <div className={feedStyles.contentWrapper}>
                <Image src={feedMainImg} alt="Тут пока пусто" />
                <div className={feedStyles.feedTitle}>{"Лента кончилась :("}</div>
                <div className={feedStyles.feedText}>Но не переживай — новые люди появятся совсем скоро. А пока можешь пообщаться с теми, кто уже добавлен в мейты</div>
            </div>
            <div onClick={() => window.location.replace("/mates")} className={feedStyles.button + " " + feedStyles.buttonPrimary} aria-label="Социальные сети">Перейти в мейты</div>
        </div>
    );
}

export default FeedEnd;