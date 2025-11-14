"use client";

import { useEffect, useState } from "react";
import {getUserSettings, updateInterests} from "@/services/settings";
import { fetchInterests } from "@/utils/fetchUserData/fetchInterests";
import { ArrowLeftIcon } from "../../SettingIcons";
import CategoryItem from "./CategoryItem";
import signupStyles from "@/components/SignUp/SecondStep/SecondStep.module.css";
import styles from "./InterestsEdit.module.css";
import Link from "next/link";
import Loading from "@/components/Layout/Loading";

const ProfileEdit: React.FC = () => {
  const [categories, setCategories] = useState([]);
  const [comparesId, setComparesId] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [updatedInterests, setUpdatedInterests] = useState([]);

  const handleDataFromChild = (data) => {
    setUpdatedInterests(data);
  }

  const updateInterestsHandler = async () => {
    if(updatedInterests.length > 0) {
      await updateInterests(updatedInterests);
    }
  }

  useEffect(() => {
    const fetchUserInterests = async () => {
      setIsLoading(true);
      const res = await fetchInterests();
      const compare = await getUserSettings();
      setCategories(res);
      setComparesId(compare.data.interests);
      setIsLoading(false);
    }
    fetchUserInterests();
  }, [])

  return (
    <>
      <header className={styles.header}>
          <div onClick={updateInterestsHandler}>
        <Link href="/settings/edit-profile" className={styles.back}>
          <ArrowLeftIcon />
          Назад
        </Link>
          </div>
        <div className={styles.title}>Интересы</div>
        <Link
            href="/settings"
            className={styles.back}
            style={{ visibility: "hidden" }}
            onClick={() => updateInterestsHandler}
        >
          <ArrowLeftIcon />
          Назад
        </Link>
      </header>
      <div className={signupStyles["interests-container"]}>
        <div className={signupStyles.categories}>
          {
            isLoading ? <Loading w={"5"} h={"5"} isComp={false} /> :
            categories?.map((category) => (
                <CategoryItem category={category} comparesId={comparesId} handleDataFromChild={handleDataFromChild}/>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
