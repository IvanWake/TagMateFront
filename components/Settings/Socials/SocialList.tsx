'use client';

import React, { useState } from "react";
import { EditIcon, PlusIcon } from "@/components/Settings/SettingIcons";
import styles from "@/components/Settings/ProfileEdit/ProfileEdit.module.css";
import Social from "@/components/Settings/Socials/Social";

type Props = {
    socials: { vk: string, telegram: string, inst: string, discord: string },
    onUpdateSocial: () => void
}

const SocialList = ({ socials }: Props) => {
    const onUpdateSocial = (item: string, link: string) => {
        let updatedSocials = socials;
        updatedSocials[item] = link;
    }
    return (
        <section className={styles.section}>
            <div className={styles.sectionTitle}>Социальные сети</div>
            <div className={styles.sectionDescription}>
                Для знакомства нужен один шаг - подключил соцсети
            </div>

            <div className={styles.socialList}>
                <Social icon={"vk"} link={"https://vk.com/purplebaby16"} onUpdateSocial={onUpdateSocial}/>
            </div>
        </section>
    );
}

export default SocialList;