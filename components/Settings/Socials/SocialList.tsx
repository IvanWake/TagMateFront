'use client';

import React, { useState } from "react";
import styles from "@/components/Settings/ProfileEdit/ProfileEdit.module.css";
import Social from "@/components/Settings/Socials/Social";

type Props = {
    socials: { vk: string, telegram: string, inst: string, discord: string },
}

const SocialList = ({ socials }: Props) => {
    const onUpdateSocial = (item: string, link: string) => {
        const updatedSocials = socials;
        updatedSocials[item] = link;
    }

    console.log(socials)

    return (
        <section className={styles.section}>
            <div className={styles.sectionTitle}>Социальные сети</div>
            <div className={styles.sectionDescription}>
                Для знакомства нужен один шаг - подключил соцсети
            </div>

            <div className={styles.socialList}>
                <Social icon={"vk"} link={"link"} onUpdateSocial={onUpdateSocial}/>
                <Social icon={"telegram"} link={socials.telegram} onUpdateSocial={onUpdateSocial}/>
                <Social icon={"inst"} link={socials.inst} onUpdateSocial={onUpdateSocial}/>
                <Social icon={"discord"} link={socials.discord} onUpdateSocial={onUpdateSocial}/>
            </div>
        </section>
    );
}

export default SocialList;