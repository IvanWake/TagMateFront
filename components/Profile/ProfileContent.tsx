import { ProfileData } from "@/types/userProfile/profileContent";
import UserTag from "@/components/User/UserTag";
import UserPurpose from "@/components/User/UserPurpose";
import InterestList from "@/components/Interests/InterestList";
import SocialLinksList from "@/components/Socials/SocialLinksList";
import profileContentStyles from "./Profile.module.css";
import Gallery from "@/components/Gallery/Gallery";

const ProfileContent = ({ tag, purpose, interests, socials, images, isShowSocials }: ProfileData) => {
    return (
        <main className={profileContentStyles["profile-content"]}>
            <section className={profileContentStyles["profile-details"]}>
                <UserTag tag={tag} />
                { purpose !== "none"  && <UserPurpose purpose={purpose}/> }
                <InterestList interests={interests} />
                { isShowSocials && socials.length > 0 &&  <SocialLinksList socials={socials}/> }
            </section>
        </main>
    );
}

export default ProfileContent;
