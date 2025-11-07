"use client";

import React, { useState } from "react";
import styles from "./SettingsMain.module.css";
import {
  ArrowRightIcon,
  PersonalDataIcon,
  EditIcon,
  LogoutIcon,
} from "../SettingIcons";
import SettingsMainModal from "./SettingsMainModal";
import Link from "next/link";

const SettingsMain: React.FC = () => {
  const [isPrivateProfile, setIsPrivateProfile] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleTogglePrivateProfile = () => {
    setIsPrivateProfile(!isPrivateProfile);
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };

  const handleConfirmLogout = () => {
    // Логика выхода из аккаунта
    console.log("Пользователь вышел из аккаунта");
    setShowLogoutModal(false);
    // Здесь можно добавить redirect или очистку токенов
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Настройки</h1>
        </div>
        {/* Секция приватности */}
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
            <label className={styles.toggle}>
              <input
                type="checkbox"
                checked={isPrivateProfile}
                onChange={handleTogglePrivateProfile}
                className={styles.toggleInput}
              />
              <span className={styles.toggleSlider} />
            </label>
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
