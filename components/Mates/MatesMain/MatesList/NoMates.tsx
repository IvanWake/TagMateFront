import mainStyles from "./MatesList.module.css";
import matesMainImg from "@/public/purposesImg/mates_main-img.svg";
import Link from "next/link";
import Image from "next/image";

const NoMates = () => {
    return (
        <div className={mainStyles.noMates}>
            <Image src={matesMainImg} alt="Тут пока пусто" />
            <div className={mainStyles.matesTitle}>Тут пока пусто</div>
            <div className={mainStyles.matesText}>Заполни свой профиль, так собеседник сможет лучше узнать тебя и с большей вероятностью решится написать</div>
            <Link href="/" className={mainStyles.noMatesButton} aria-label="Профиль">Открыть профиль</Link>
        </div>
    );
}

export default NoMates;