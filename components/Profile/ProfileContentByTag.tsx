import {ProfileData} from "@/types/userProfile/profileContent";
import UserTag from "@/components/User/UserTag";
import UserPurpose from "@/components/User/UserPurpose";
import InterestList from "@/components/Interests/InterestList";
import SocialLinksList from "@/components/Socials/SocialLinksList";
import profileContentStyles from "./Profile.module.css";
import Gallery from "@/components/Gallery/Gallery";
import DangerZone from "@/components/DangerZone/DangerZone";

const ProfileContentByTag = ({
                                 tag,
                                 purpose,
                                 interests,
                                 socials,
                                 images,
                                 isShowSocials,
                                 isUserMate,
                                 inBlackList,
                                 isBlocked
                             }: ProfileData) => {
    console.log(images);
    return (
        <main className={profileContentStyles["profile-content"]}>
            <section className={profileContentStyles["profile-details"]}>
                {
                    isBlocked ?
                        <>
                            <UserTag tag={tag}/>
                            <DangerZone isUserMate={isUserMate} inBlackList={inBlackList} tag={tag}/>
                        </>
                        :
                        <>
                            <UserTag tag={tag}/>
                            {purpose !== "none" && <UserPurpose purpose={purpose}/>}
                            <InterestList interests={interests} />
                            {isShowSocials && socials.length > 0 && <SocialLinksList socials={socials}/>}
                            {images.length > 0 && <Gallery images={images}/>}
                            <DangerZone isUserMate={isUserMate} inBlackList={inBlackList} tag={tag}/>
                        </>
                }

            </section>
        </main>
    );
}

export default ProfileContentByTag;
