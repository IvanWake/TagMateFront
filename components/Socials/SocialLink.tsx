import { Social } from "@/types/userProfile/profileContent";
import socialStyles from "./Socials.module.css";

const SocialLink = ({ social, link }:Social) => {
    const linkProfileName = link.split("/").pop();

    const socialUrl = {
        vk: "https://vk.com/",
        inst: "https://instagram.com/",
        telegram: "https://t.me/"
    }

    return (
        <a href={socialUrl[social]} className={socialStyles["social-media-item"]} target="_blank">
            <img src={`/icons/socials/icon_${social}.png`} alt={link} className={socialStyles["social-media-icon"]} />
            <div>{linkProfileName}</div>
        </a>
    );
}

export default SocialLink;
