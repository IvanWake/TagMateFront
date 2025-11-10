'use client';

import styles from "./PersonalData.module.css";
import {
  ArrowLeftIcon,
  LocationIcon,
  CalendarIcon,
  ArrowRightIcon,
} from "../SettingIcons";
import Link from "next/link";
import signupStyles from "@/components/SignUp/FirstStep/FirstStep.module.css";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

const PersonalData: React.FC = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const { register, formState: {errors}, getValues, watch} = useForm();
  const watchAllFields = watch();

  useEffect(() => {

    const values = getValues();

    if (values.name || values.lastName || values.birthDay || values.city) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [watchAllFields])


  return (
    <>
      <header className={styles.header}>
        <Link href="/settings" className={styles.back}>
          <ArrowLeftIcon />
          Назад
        </Link>
        <div className={styles.title}>Персональные данные</div>
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
          <section className={styles.section}>
            <div className={styles.sectionTitle}>Имя и фамилия</div>

            <div className={styles.fields}>
              <div className={styles.field}>
                <div className={signupStyles.input}>
                  <input
                      {...register('name', { required: "Это поле обязательно"})}
                      type="text"
                      placeholder="Имя"
                      autoComplete="off"
                  />
                  <input
                      {...register('lastName', {required: "Это поле обязательно"})}
                      type="text"
                      placeholder="Фамилия"
                      autoComplete="off"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionTitle}>Город</div>
            <div className={signupStyles.input}>
              <div className={signupStyles.icon}>
                <img src="/icons/auth/city.svg" alt="City" />
                <select
                    className={signupStyles.select} {...register('city', {required: "Выберите город"})} >
                  <option value="1459">Москва</option>
                  <option value="1900">Санкт-Петербург</option>
                  <option value="1580">Новосибирск</option>
                  <option value="714">Екатеринбург</option>
                  <option value="947">Казань</option>
                </select>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionTitle}>Дата рождения</div>
            <div className={signupStyles.input}>
              <div className={signupStyles.icon}>
                <img src="/icons/auth/calendar.svg" alt="Birth day"/>
                <input
                    {...register('birthDay')}
                    type="date"
                    placeholder="15.09.2005"
                    id="birthday"
                    max={new Date(new Date().getFullYear() - 14, new Date().getMonth(), new Date().getDate())
                        .toISOString()
                        .split("T")[0]}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer className={signupStyles.footer}>
        <button
            className={`${signupStyles.button} ${signupStyles.next}`}
            type="button"
            disabled={isButtonDisabled}
        >Сохранить
        </button>
      </footer>
    </>
  );
};

export default PersonalData;
