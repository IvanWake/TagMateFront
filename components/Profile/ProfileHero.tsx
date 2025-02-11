import { PersonalData } from "@/types/userProfile/profileContent";
import { formatBirthDay } from "@/utils/formatBirthDay";
import profileHero from "./Profile.module.css";

const ProfileHero = ({ name, lastName, avatar, city, birthDay }: PersonalData) => {
    return (
        <section className={profileHero["profile-hero"]} id="profile">
            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${avatar}`} alt="profile image" className={profileHero["profile-image"]} />
                <div className={profileHero["profile-info"]}>
                    <div className={profileHero["user-location"]}>{city}</div>
                    <div className={profileHero["user-name"]}>{`${name} ${lastName}`}, {formatBirthDay(birthDay).yearsOld}</div>
                    {/*<div className="user-status">*/}
                    {/*    <div className="status-indicator"></div>*/}
                    {/*    <span>В сети</span>*/}
                    {/*</div>*/}
                </div>
        </section>
    );
}

export default ProfileHero;
