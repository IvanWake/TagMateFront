"use client";

import React, { useState, useEffect } from "react";
import { getUserSettings, updatePrivacySettings } from "@/services/settings";
import { deleteAuthToken } from "@/utils/authToken";
import styles from "./SettingsMain.module.css";
import {
  ArrowRightIcon,
  PersonalDataIcon,
  EditIcon,
  LogoutIcon,
} from "../SettingIcons";
import SettingsMainModal from "./SettingsMainModal";
import Link from "next/link";
import Loading from "@/components/Layout/Loading";

const SettingsMain: React.FC = () => {
  const [isPrivateProfile, setIsPrivateProfile] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUserSettingsHandler = async () => {
      const res = await getUserSettings();
      setIsPrivateProfile(!res.data.publicProfile);
      setIsLoading(false);
    }

    fetchUserSettingsHandler();
  }, [])

  const handleTogglePrivateProfile = async () => {
    setIsPrivateProfile(prevState => !prevState);
    setIsLoading(true);
    await updatePrivacySettings(isPrivateProfile);
    setIsLoading(false);
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };

  const handleConfirmLogout = () => {
    deleteAuthToken("authToken");
    setShowLogoutModal(false);
    window.location.replace("/auth/welcome");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Настройки</h1>
        </div>
        <section className={styles.section}>

             <div className={styles.setting}>
              <div className={styles.settingInfo}>
                <div className={styles.textContent}>
                  <div className={styles.settingTitle}>Приватный профиль</div>
                  <div className={styles.settingDescription}>
                    Закрой доступ к соц.сетям, <br /> если не хочешь, чтобы тебе
                    писали
                  </div>
                </div>
              </div>
               {
                 isLoading ? <Loading w={"2"} h={"2"} isComp={true}/> :
                     <label className={styles.toggle}>
                       <input
                           type="checkbox"
                           checked={isPrivateProfile}
                           onChange={handleTogglePrivateProfile}
                           className={styles.toggleInput}
                       />
                       <span className={styles.toggleSlider} />
                     </label>
               }

            </div>
        </section>

        <section className={styles.section}>
          <div className={styles.divider} />
          <div className={styles.settingItemsContainer}>
            <Link href="/settings/personal-data" className={styles.settingItem}>
              <div className={styles.settingItemInfo}>
                <div className={styles.iconWrapper}>
                  <PersonalDataIcon />
                </div>
                <div className={styles.settingItemText}>
                  Персональные данные
                </div>
              </div>
              <ArrowRightIcon />
            </Link>

            <Link href="/settings/edit-profile" className={styles.settingItem}>
              <div className={styles.settingItemInfo}>
                <div className={styles.iconWrapper}>
                  <EditIcon />
                </div>
                <div className={styles.settingItemText}>
                  Редактировать профиль
                </div>
              </div>
              <ArrowRightIcon />
            </Link>
          </div>
          <div className={styles.divider} />
        </section>

        <section className={styles.section}>
          <div className={styles.settingItem} onClick={handleLogoutClick}>
            <div className={styles.settingItemInfo}>
              <div className={styles.iconWrapper}>
                <LogoutIcon />
              </div>
              <span className={styles.logoutText}>Выйти из аккаунта</span>
            </div>
          </div>
        </section>
      </div>
      <SettingsMainModal
        isOpen={showLogoutModal}
        onCancel={handleCancelLogout}
        onConfirm={handleConfirmLogout}
      />
    </>
  );
};

export default SettingsMain;
