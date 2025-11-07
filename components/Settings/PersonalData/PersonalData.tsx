import styles from "./PersonalData.module.css";
import {
  ArrowLeftIcon,
  LocationIcon,
  CalendarIcon,
  ArrowRightIcon,
} from "../SettingIcons";
import Link from "next/link";

const PersonalData: React.FC = () => {
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
                <div className={styles.input}>
                  <input
                    name="name"
                    autoComplete="on"
                    type="search"
                    placeholder="Имя"
                    className={styles.inputField}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <div className={styles.input}>
                  <input
                    name="lastName"
                    autoComplete="on"
                    type="search"
                    placeholder="Фамилия"
                    className={styles.inputField}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionTitle}>Город</div>
            <div className={styles.field}>
              <div className={`${styles.input} ${styles.inputWithIcons}`}>
                <div className={styles.leftIcon}>
                  <LocationIcon />
                </div>
                <input
                  name="city"
                  autoComplete="on"
                  type="search"
                  placeholder="Город"
                  className={styles.inputField}
                />
                <div className={styles.rightIcon}>
                  <ArrowRightIcon />
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionTitle}>Дата рождения</div>
            <div className={styles.field}>
              <div className={`${styles.input} ${styles.inputWithIcons}`}>
                <div className={styles.leftIcon}>
                  <CalendarIcon />
                </div>
                <input
                  name="date"
                  autoComplete="on"
                  type="date"
                  placeholder="01.01.2000"
                  className={styles.inputField}
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
  );
};

export default PersonalData;
