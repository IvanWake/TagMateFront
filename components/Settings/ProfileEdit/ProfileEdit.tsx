"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./ProfileEdit.module.css";
import { ArrowLeftIcon, EditIcon, PlusIcon } from "../SettingIcons";

// import InterestList from "@/components/Interests/InterestList";
// import { Interest } from "@/types/signup/steps";

const ProfileEdit: React.FC = () => {
  const [galleryPhotos, setGalleryPhotos] = useState<string[]>([]);
  const [vkConnected, setVkConnected] = useState(false);
  const [telegramConnected, setTelegramConnected] = useState(false);
  const [instagramConnected, setInstagramConnected] = useState(false);
  const [discordConnected, setDiscordConnected] = useState(false);

  const handleAvatarEdit = () => {
    console.log("Edit avatar");
  };

  const handleAddPhoto = () => {
    console.log("Add photo to gallery");
  };

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
          <section className={styles.section}>
            <div className={styles.sectionTitle}>Социальные сети</div>
            <div className={styles.sectionDescription}>
              Для знакомства нужен один шаг - подключил соцсети
            </div>

            <div className={styles.socialList}>
              {/* VK */}
              <div className={styles.socialItem}>
                <div className={styles.socialInfo}>
                  <div className={styles.socialIcon}>
                    <img src="/icons/socials/icon_vk.png" alt="VK" />
                  </div>
                  <div className={styles.socialName}>VK</div>
                </div>
                <div
                  className={`${styles.socialAction} ${
                    vkConnected
                      ? styles.socialActionEdit
                      : styles.socialActionAdd
                  }`}
                  onClick={() => setVkConnected(!vkConnected)}
                >
                  {vkConnected ? <EditIcon /> : <PlusIcon />}
                </div>
              </div>

              {/* Telegram */}
              <div className={styles.socialItem}>
                <div className={styles.socialInfo}>
                  <div className={styles.socialIcon}>
                    <img
                      src="/icons/socials/icon_telegram.png"
                      alt="Telegram"
                    />
                  </div>
                  <div className={styles.socialName}>Telegram</div>
                </div>
                <div
                  className={`${styles.socialAction} ${
                    telegramConnected
                      ? styles.socialActionEdit
                      : styles.socialActionAdd
                  }`}
                  onClick={() => setTelegramConnected(!telegramConnected)}
                >
                  {telegramConnected ? <EditIcon /> : <PlusIcon />}
                </div>
              </div>

              {/* Instagram */}
              <div className={styles.socialItem}>
                <div className={styles.socialInfo}>
                  <div className={styles.socialIcon}>
                    <img
                      src="/icons/socials/icon_instagram.png"
                      alt="Instagram"
                    />
                  </div>
                  <div className={styles.socialName}>Instagram</div>
                </div>
                <div
                  className={`${styles.socialAction} ${
                    instagramConnected
                      ? styles.socialActionEdit
                      : styles.socialActionAdd
                  }`}
                  onClick={() => setInstagramConnected(!instagramConnected)}
                >
                  {instagramConnected ? <EditIcon /> : <PlusIcon />}
                </div>
              </div>

              {/* Discord */}
              <div className={styles.socialItem}>
                <div className={styles.socialInfo}>
                  <div className={styles.socialIcon}>
                    <img src="/icons/socials/icon_discord.png" alt="Discord" />
                  </div>
                  <div className={styles.socialName}>Discord</div>
                </div>
                <div
                  className={`${styles.socialAction} ${
                    discordConnected
                      ? styles.socialActionEdit
                      : styles.socialActionAdd
                  }`}
                  onClick={() => setDiscordConnected(!discordConnected)}
                >
                  {discordConnected ? <EditIcon /> : <PlusIcon />}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
