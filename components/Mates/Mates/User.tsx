import { UserItemSearch } from "@/types/mates/userItem";
import Link from "next/link";
import { formatBirthDay } from "@/utils/formatBirthDay";
import mainStyles from "./Mates.module.css";

const User = ({ name, lastName, city, avatar, birthDay, serviceId }: UserItemSearch<string>) => {
    return (
        <div className={mainStyles.userItem}>
            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${avatar}`} alt="user avatar" className={mainStyles.userPicture} />
            <div className={mainStyles.userInfo}>

                <Link href={`/${serviceId}`}>
                    <div className={mainStyles.userName}>{`${name} ${lastName}`}</div>
                </Link>
                <div className={mainStyles.userDescription}>{`${formatBirthDay(birthDay).yearsOld}, ${city}`}</div>
            </div>
        </div>
    );
}

export default User;