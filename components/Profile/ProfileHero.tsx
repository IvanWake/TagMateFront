import { PersonalData } from "@/types/userProfile/profileContent";
import { formatBirthDay } from "@/utils/formatBirthDay";
import profileHero from "./Profile.module.css";
import AddMate from "@/components/Profile/AddMate/AddMate";
import RequestPending from "@/components/Profile/AddMate/RequestPending";

const ProfileHero = ({ name, lastName, avatar, city, birthDay, isUserByTag, tag }: PersonalData) => {
    return (
        <section className={profileHero["profile-hero"]} id="profile">
            <img src={avatar} alt="profile image" className={profileHero["profile-image"]} />
                <div className={profileHero["profile-info"]}>
                    <div className={profileHero["user-location"]}>{city}</div>
                    <div className={profileHero["user-name"]}>{`${name} ${lastName}`}, {formatBirthDay(birthDay).yearsOld}</div>
                    <div className="user-status">
                        {/*<div className="status-indicator"></div>*/}
                        <span>Был в сети недавно</span>
                    </div>
                    {
                        isUserByTag && <AddMate tag={tag}/>
                    }
                </div>
        </section>
    );
}

export default ProfileHero;
