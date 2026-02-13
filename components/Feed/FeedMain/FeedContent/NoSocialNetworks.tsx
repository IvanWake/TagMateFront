import feedStyles from "./FeedContent.module.css";
import feedMainImg from "@/public/purposesImg/feed_main-img.svg";
import Image from "next/image";

const NoSocialWorks = () => {
    return (
        <div className={feedStyles.noSocialNetworks}>
            <div className={feedStyles.contentWrapper}>
                <Image src={feedMainImg} alt="Тут пока пусто" />
                <div className={feedStyles.feedTitle}>Лента</div>
                <div className={feedStyles.feedText}>Чтобы пользоваться лентой — нужно добавить социальные сети к себе в профиль</div>
            </div>
            <div onClick={() => window.location.replace("/settings/edit-profile")} className={feedStyles.button} aria-label="Социальные сети">Добавить соц.сети</div>
        </div>
    );
}

export default NoSocialWorks;