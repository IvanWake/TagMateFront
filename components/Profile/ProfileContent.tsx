import { ProfileData } from "@/types/userProfile/profileContent";
import UserTag from "@/components/User/UserTag";
import UserPurpose from "@/components/User/UserPurpose";
import InterestList from "@/components/Interests/InterestList";
import profileContentStyles from "./Profile.module.css";

const ProfileContent = ({ tag, purpose, interests  }: ProfileData) => {
    return (
        <main className={profileContentStyles["profile-content"]}>
            <section className={profileContentStyles["profile-details"]}>
                <UserTag tag={tag} />
                { purpose !== "none"  && <UserPurpose purpose={purpose}/> }
                <InterestList interests={interests} />
            </section>
        </main>
    );
}

export default ProfileContent;
