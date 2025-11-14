'use client';

import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import {getUserSettings, updatePersonalSettings} from "@/services/settings";
import styles from "./PersonalData.module.css";
import {
  ArrowLeftIcon,
  LocationIcon,
  CalendarIcon,
  ArrowRightIcon,
} from "../SettingIcons";
import Link from "next/link";
import signupStyles from "@/components/SignUp/FirstStep/FirstStep.module.css";
import Loading from "@/components/Layout/Loading";

interface UserData {
  name?: string;
  lastName?: string;
  birthDay?: string;
  city?: string;
}

const PersonalData: React.FC = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [userSettings, setUserSettings] = useState<UserData | null>(null);
  const [initialData, setInitialData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const {
    register,
    reset,
    formState: { errors},
    control, handleSubmit
  } = useForm<UserData>({
    mode: "onTouched"
  });

  const watchedFields = useWatch({
    control,
    name: ['name', 'lastName', 'birthDay', 'city']
  });

  const submitHandler = async (values) => {
    const { name, lastName, birthDay, city } = values;
    setIsLoading(true);
    await updatePersonalSettings(name, lastName, birthDay, city)
    setIsLoading(false);
    setIsButtonDisabled(true);
  }

  useEffect(() => {
    if (initialData) {
      const [name, lastName, birthDay, city] = watchedFields;
      const currentData = { name, lastName, birthDay, city };

      const hasChanges =
          currentData.name !== initialData.name ||
          currentData.lastName !== initialData.lastName ||
          currentData.birthDay !== initialData.birthDay ||
          currentData.city !== initialData.city;

      if (hasChanges) {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    }
  }, [watchedFields, initialData]);

  useEffect(() => {
    const getUserSettingsHandler = async () => {
      const res = await getUserSettings();
      const userData = res.data;
      setUserSettings(userData);
      const birthDay = userData.birthDay
          ? new Date(userData.birthDay).toISOString().split('T')[0]
          : '';

      const initial = {
        name: userData.name,
        lastName: userData.lastName,
        city: userData.city?.id,
        birthDay: birthDay
      };
      setInitialData(initial);

      reset(initial);
      setIsLoading(false);
    }
    getUserSettingsHandler();
  }, [reset]);

  return (
      <form onSubmit={handleSubmit(submitHandler)}>
        <header className={styles.header}>
          <Link href="/settings" className={styles.back}>
            <ArrowLeftIcon/>
            Назад
          </Link>
          <div className={styles.title}>Персональные данные</div>
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
              <>
                <div className={styles.container}>
                  <div className={styles.content}>
                    <section className={styles.section}>
                      <div className={styles.sectionTitle}>Имя и фамилия</div>

                      <div className={styles.fields}>
                        <div className={styles.field}>
                          <div className={signupStyles.input}>
                            <input
                                {...register('name', {required: "Это поле обязательно"})}
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
                          <img src="/icons/auth/city.svg" alt="City"/>
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
              </>
        }
        <footer className={signupStyles.footer}>
          <button
              className={`${signupStyles.button} ${signupStyles.next}`}
              type="submit"
              disabled={isButtonDisabled}
          >Сохранить
          </button>
        </footer>
      </form>
  );
};

export default PersonalData;