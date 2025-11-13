"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./ProfileEdit.module.css";
import { ArrowLeftIcon, EditIcon, PlusIcon } from "../SettingIcons";
import SocialList from "@/components/Settings/Socials/SocialList";
import {getUserSettings} from "@/services/settings";
import social from "@/components/Settings/Socials/Social";


const ProfileEdit: React.FC = () => {
  const [galleryPhotos, setGalleryPhotos] = useState<string[]>([]);
  const [socials, setSocials] = useState();

  const handleAvatarEdit = () => {
    console.log("Edit avatar");
  };

  const handleAddPhoto = () => {
    console.log("Add photo to gallery");
  };

  useEffect(() => {
    const getUserSettingsHandler = async () => {
     const res = await getUserSettings();
      setSocials(res.data.socials);
    }
    getUserSettingsHandler();

  }, []);

  return (
    <>
      {/* Хедер */}
      <header className={styles.header}>
        <Link href="/settings" className={styles.back}>
          <ArrowLeftIcon />
          Назад
        </Link>
        <div className={styles.title}>Редактирование профиля</div>
        <Link
          href="/settings"
          className={styles.back}
          style={{ visibility: "hidden" }}
        >
          <ArrowLeftIcon />
          Назад
        </Link>
      </header>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Аватар */}
          <section className={styles.avatarSection}>
            <div className={styles.avatarContainer}>
              <div className={styles.avatar}>
                <div className={styles.avatarPlaceholder}></div>
              </div>
              <div className={styles.avatarEdit} onClick={handleAvatarEdit}>
                <EditIcon />
              </div>
            </div>
          </section>

          {/* Галерея */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>Галерея</div>
            </div>
            <div className={styles.gallery}>
              {galleryPhotos.map((photo, index) => (
                <div key={index} className={styles.galleryItem}>
                  <div className={styles.galleryPhoto}></div>
                </div>
              ))}
              <div className={styles.addPhotoButton} onClick={handleAddPhoto}>
                <PlusIcon />
              </div>
            </div>
          </section>

          {/* Интересы */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>Интересы</div>
            </div>
            {/* <InterestList  /> */}
            <Link
              href="/settings/edit-profile/interests"
              className={styles.editLink}
            >
              <div className={styles.editLinkIcon}>
                <EditIcon width={20} height={20} />
              </div>
              <div className={styles.editLinkText}>Редактировать</div>
            </Link>
          </section>

          {/* Социальные сети */}
          <SocialList socials={socials} />
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
