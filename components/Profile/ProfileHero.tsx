import { PersonalData } from "@/types/userProfile/profileContent";
import { formatBirthDay } from "@/utils/formatBirthDay";
import profileHero from "./Profile.module.css";
import AddMate from "@/components/Profile/AddMate/AddMate";

const ProfileHero = ({name, lastName, avatar, city, birthDay, isUserByTag, tag, isUserMate }: PersonalData) => {
    return (
        <section className={profileHero["profile-hero"]} id="profile">
            <img src={avatar} alt="profile image" className={profileHero["profile-image"]}/>
            <div className={profileHero["profile-info"]}>
                <div className={profileHero["user-location"]}>{city}</div>
                <div
                    className={profileHero["user-name"]}>{`${name} ${lastName}`}, {formatBirthDay(birthDay).yearsOld}</div>
                { isUserByTag &&
                    <>
                        <div className="user-status">
                            {/*<div className="status-indicator"></div>*/}
                            <span>Был недавно</span>
                        </div>
                        <AddMate tag={tag} isUserMate={isUserMate} />
                    </>
                }
            </div>
        </section>
    );
}

export default ProfileHero;
