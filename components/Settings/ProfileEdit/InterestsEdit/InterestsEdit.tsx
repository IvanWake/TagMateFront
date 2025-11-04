"use client";

import Link from "next/link";
import styles from "./InterestsEdit.module.css";
import { ArrowLeftIcon } from "../../SettingIcons";
import CategoryItem from "./CategoryItem";

const ProfileEdit: React.FC = () => {
  return (
    <>
      {/* Хедер */}
      <header className={styles.header}>
        <Link href="/settings/edit-profile" className={styles.back}>
          <ArrowLeftIcon />
          Назад
        </Link>
        <div className={styles.title}>Интересы</div>
        <Link
          href="/settings"
          className={styles.back}
          style={{ visibility: "hidden" }}
        >
          <ArrowLeftIcon />
          Назад
        </Link>
      </header>
      {/* <CategoryItem /> */}
    </>
  );
};

export default ProfileEdit;
