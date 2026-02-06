import { ProfileData } from "@/types/userProfile/profileContent";
import UserTag from "@/components/User/UserTag";
import UserPurpose from "@/components/User/UserPurpose";
import InterestList from "@/components/Interests/InterestList";
import SocialLinksList from "@/components/Socials/SocialLinksList";
import profileContentStyles from "./Profile.module.css";
import Gallery from "@/components/Gallery/Gallery";
import Banner from "@/components/Banner/Banner";

const ProfileContent = ({
  tag,
  purpose,
  interests,
  socials,
  images,
  isShowSocials,
}: ProfileData) => {
  return (
    <main className={profileContentStyles["profile-content"]}>
      <section className={profileContentStyles["profile-details"]}>
        <UserTag tag={tag} />
        <Banner
          link="https://t.me/tagmateru"
          image="/telegram-peer-photo.jpg"
          title="Телеграм канал Tagmate"
          description="Подпишись и быстрее всех узнаешь, когда добавим чат"
          buttonText="Подписаться"
        />
        {purpose !== "none" && <UserPurpose purpose={purpose} />}
        <InterestList interests={interests} />
        {socials.length > 0 && <SocialLinksList socials={socials} />}
        {images.length > 0 && <Gallery images={images} />}
      </section>
    </main>
  );
};

export default ProfileContent;
