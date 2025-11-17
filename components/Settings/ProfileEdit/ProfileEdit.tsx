'use client';

import React, {useState, useEffect} from "react";
import {addPhoto, deletePhoto, getUserSettings, updateAvatar} from "@/services/settings";
import {ArrowLeftIcon, EditIcon, PlusIcon, Trash} from "../SettingIcons";
import SocialList from "@/components/Settings/Socials/SocialList";
import Link from "next/link";
import styles from "./ProfileEdit.module.css";
import Loading from "@/components/Layout/Loading";


const ProfileEdit = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingPhoto, setIsLoadingPhoto] = useState(false);
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
            setIsLoading(true);
            setAvatar(URL.createObjectURL(file))
            const formData = new FormData();
            formData.append("avatar", file)
            await updateAvatar(formData);
            setIsLoading(false);
        }
    }

    const handleDeletePhoto = async (key: string) => {
        setIsLoadingPhoto(true);
        setGalleryPhotos(prevPhotos => prevPhotos.filter(photo => photo.key !== key));
        await deletePhoto(key);
        setIsLoadingPhoto(false);
    }

    const handleAddPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPhoto(URL.createObjectURL(file))
            const formData = new FormData();
            formData.append("image", file)
            await addPhoto(formData);
            window.location.reload();
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
            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.avatarSection}>
                        {
                            isLoading ? <Loading w={"6.25"} h={"6.25"} isComp={true}/> :
                                <>
                                    <input
                                        type="file"
                                        style={{display: "none"}} id="avatar"
                                        accept="image/jpeg,image/png,image/heic,image/heif,image/jpg"
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
                                </>
                        }
                    </section>


                    {/* Галерея */}
                    <section className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionTitle}>Галерея</div>
                        </div>
                        {
                            isLoadingPhoto ? <Loading w={"5"} h={"5"} isComp={true}/> :
                                <div className={styles.gallery}>
                                    <input
                                        type="file"
                                        style={{display: "none"}} id="photo"
                                        accept="image/jpeg,image/png,image/heic,image/heif,image/jpg"
                                        onChange={handleAddPhoto}
                                    />
                                    <label htmlFor="photo">
                                        <div className={styles.addPhotoButton}>
                                            <PlusIcon/>
                                        </div>
                                    </label>

                                    {galleryPhotos?.map((photo) => (
                                    <div key={photo.key} className={styles.galleryItem}>
                                        <img src={photo.path} className={styles.galleryPhoto}/>
                                        <div className={styles.galleryActions}>
                                            <div className={styles.actionButton}
                                                 onClick={() => handleDeletePhoto(photo.key)}>
                                                <Trash/>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                        }
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
        </>
    );
};

export default ProfileEdit;
