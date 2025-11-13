'use client';

import { useEffect, useState } from "react";
import { CheckIcon, EditIcon, PlusIcon } from "@/components/Settings/SettingIcons";
import styles from "@/components/Settings/ProfileEdit/ProfileEdit.module.css";

type Props = {
    icon: string,
    link: string,
    onUpdateSocial: () => void
}

const Social = ({ icon, link, onUpdateSocial }: Props) => {
    const [isSocialConnected, setIsSocialConnected] = useState(link !== "link");
    const [isSocialEditing, setIsSocialEditing] = useState(false);
    const [socialValue, setSocialValue] = useState(icon !== "discord" ? link?.split("/").pop() : link);

    const onUpdateSocialHandler = () => {
        setIsSocialEditing (false);
        onUpdateSocial(icon, socialValue)
    }
    useEffect(() => {
        setSocialValue(icon !== "discord" ? link?.split("/").pop() || "" : link);
    }, [link, icon]);

    return (
        <div className={styles.socialItem}>
            <div className={styles.socialInfo}>
                <div className={styles.socialIcon}>
                    <img src={`/icons/socials/icon_${icon}.png`} alt="VK"/>
                </div>
                {
                    isSocialEditing ?
                        <input
                            type="text"
                            style={{border: "none", outline: "none", background: "#fcfcfc"}}
                            placeholder={"Сюда никнейм"}
                            value={socialValue}
                            onChange={(e) => setSocialValue(e.target.value)}
                        /> :
                        <div className={styles.socialName}>{socialValue}</div>
                }
            </div>
            <div
                className={`${styles.socialAction} ${styles.socialActionAdd}`}
            >
                {
                    isSocialEditing ? <div onClick={onUpdateSocialHandler}><CheckIcon/></div> :
                        isSocialConnected ?
                            <div onClick={() => setIsSocialEditing(true)}>
                                <EditIcon/>
                            </div> :
                            <div onClick={() => setIsSocialEditing(true)}>
                                <PlusIcon/>
                            </div>
                }
            </div>
        </div>
    );
}

export default Social;