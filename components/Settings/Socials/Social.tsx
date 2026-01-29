'use client';

import {useEffect, useRef, useState} from "react";
import { CheckIcon, EditIcon, PlusIcon } from "@/components/Settings/SettingIcons";
import styles from "@/components/Settings/ProfileEdit/ProfileEdit.module.css";
import Loading from "@/components/Layout/Loading";

type Props = {
    icon: string,
    link: string,
    onUpdateSocial: () => void
}

const Social = ({ icon, link, onUpdateSocial }: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSocialConnected, setIsSocialConnected] = useState(link !== "link");
    const [isSocialEditing, setIsSocialEditing] = useState(false);
    const [socialValue, setSocialValue] = useState(icon !== "discord" ? link?.split("/").pop()?.replace("@", "") : link);

    const onUpdateSocialHandler = () => {
        setIsLoading(true);
        onUpdateSocial(icon, socialValue);
        setIsSocialEditing (false);
        setIsSocialConnected(true);
        setIsLoading(false);
    }
    useEffect(() => {
        setSocialValue(icon !== "discord" ? link?.split("/").pop()?.replace("@", "") || "" : link);
        if (link === "link") {
            setSocialValue(icon);
            setIsSocialConnected(false);
        }
        setIsLoading(false);
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
                            autoFocus={true}
                            style={{border: "none", outline: "none", background: "#fcfcfc"}}
                            placeholder={"Сюда никнейм без @"}
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
                    isLoading ? <Loading w={"2"} h={"2"} isComp={true} /> :
                    isSocialEditing ? <div onClick={() => socialValue.length > 0 && onUpdateSocialHandler()}><CheckIcon/></div> :
                        isSocialConnected ?
                            <div onClick={() => {
                                setIsSocialEditing(true);
                            }}>
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