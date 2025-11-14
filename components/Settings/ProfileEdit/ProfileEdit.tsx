'use client';

import React, { useState, useEffect } from "react";
import { addPhoto, getUserSettings, updateAvatar } from "@/services/settings";
import { ArrowLeftIcon, EditIcon, PlusIcon } from "../SettingIcons";
import SocialList from "@/components/Settings/Socials/SocialList";
import Link from "next/link";
import styles from "./ProfileEdit.module.css";
import Loading from "@/components/Layout/Loading";


const ProfileEdit = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [avatar, setAvatar] = useState("");
    const [photo, setPhoto] = useState("");
    const [galleryPhotos, setGalleryPhotos] = useState([]);
    const [userSocials, setUserSocials] = useState<{
        vk: string,
        telegram: string,
        inst: string,
        discord: string
    }>({vk: "", telegram: "", inst: "", discord: ""});

    const updateAvatarHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAvatar(URL.createObjectURL(file))
            const formData = new FormData();
            formData.append("avatar", file)
            await updateAvatar(formData);
        }
    }

    const handleAddPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPhoto(URL.createObjectURL(file))
            const formData = new FormData();
            formData.append("image", file)
            await addPhoto(formData);
        }
    };

    useEffect(() => {
        const getUserSettingsHandler = async () => {
            const res = await getUserSettings();
            setUserSocials(res.data.socials);
            setGalleryPhotos(res.data.images);
            setAvatar(res.data.avatar.path);
            setIsLoading(false);
        }
        getUserSettingsHandler();
    }, []);

    return (
        <>
            {/* Хедер */}
            <header className={styles.header}>
                <Link href="/settings" className={styles.back}>
                    <ArrowLeftIcon/>
                    Назад
                </Link>
                <div className={styles.title}>Редактирование профиля</div>
                <Link
                    href="/settings"
                    className={styles.back}
                    style={{visibility: "hidden"}}
                >
                    <ArrowLeftIcon/>
                    Назад
                </Link>
            </header>
            {
                isLoading ? <Loading w={"5"} h={"5"} isComp={false}/> :
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <section className={styles.avatarSection}>
                                <input
                                    type="file"
                                    style={{display: "none"}} id="avatar"
                                    accept=".jpg,.png,.heif"
                                    onChange={updateAvatarHandler}
                                />
                                <label htmlFor="avatar">
                                    <div className={styles.avatarContainer}>
                                        <div className={styles.avatar}>
                                            <img src={avatar} className={styles.avatarPlaceholder}/>
                                        </div>
                                        <div className={styles.avatarEdit}>
                                            <EditIcon/>
                                        </div>
                                    </div>
                                </label>
                            </section>

                            {/* Галерея */}
                            <section className={styles.section}>
                                <div className={styles.sectionHeader}>
                                    <div className={styles.sectionTitle}>Галерея</div>
                                </div>
                                <div className={styles.gallery}>
                                    {
                                        galleryPhotos?.map((photo, index) => (
                                            <div key={index} className={styles.galleryItem}>
                                                <img src={photo.path} className={styles.galleryPhoto}/>
                                            </div>
                                        ))
                                    }
                                    <input
                                        type="file"
                                        style={{display: "none"}} id="photo"
                                        accept=".jpg,.png,.heif"
                                        onChange={handleAddPhoto}
                                    />
                                    <label htmlFor="photo">
                                        <div className={styles.addPhotoButton}>
                                            <PlusIcon/>
                                        </div>
                                    </label>
                                </div>
                            </section>

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
                                        <EditIcon width={20} height={20}/>
                                    </div>
                                    <div className={styles.editLinkText}>Редактировать</div>
                                </Link>
                            </section>
                            <SocialList socials={userSocials}/>
                        </div>
                    </div>
            }

        </>
    );
};

export default ProfileEdit;
