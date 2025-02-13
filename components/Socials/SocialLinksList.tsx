import { Social } from "@/types/userProfile/profileContent";
import SocialLink from "@/components/Socials/SocialLink";
import socialStyles from "./Socials.module.css";

const SocialLinksList = ({ socials }: Social[]) => {
    console.log(socials);
    return (
        <div className={socialStyles["user-social-media"]}>
            <div className={socialStyles["section-title"]}>Социальные сети</div>
            <div className={socialStyles["social-media-list"]}>
                {
                    socials?.map((social) => (
                        <SocialLink social={social.social} link={social.link} />
                    ))
                }
            </div>
        </div>
    );
}

export default SocialLinksList;
