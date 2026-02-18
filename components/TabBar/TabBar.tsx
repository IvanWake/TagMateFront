"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./TabBar.module.css";
import TabMatesIcon from "./TabBarSvgIcons/TabMatesIcon";
import TabProfileIcon from "./TabBarSvgIcons/TabProfileIcon";
import SearchIcon from "@/components/Mates/MatesSvgIcons/SearchIcon";
import TabFeedIcon from "./TabBarSvgIcons/TabFeedIcon";

const TabBar = () => {
  const pathname = usePathname();

  const isMatesActive =
    pathname.split("/").length > 1 &&
    pathname !== "/" &&
    !pathname.startsWith("/settings") &&
    pathname !== "/mates/search" &&
    !pathname.startsWith("/feed");
  const isProfileActive = pathname === "/" || pathname.startsWith("/settings");
  const isSearchActive = pathname.startsWith("/mates/search");
  const isFeedActive = pathname.startsWith("/feed");

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div
          onClick={() => window.location.replace("/feed")}
          className={isFeedActive ? styles.iconActive : styles.icon}
        >
          <div className={styles.iconDiv}>
            <TabFeedIcon
              color={isFeedActive ? "#7462FF" : "#A1A1A1"}
              width={24}
              height={24}
            />
            <p
              className={
                isFeedActive
                  ? styles.iconText + "  " + styles.iconTextActive
                  : styles.iconText
              }
            >
              Лента
            </p>
          </div>
        </div>

        <div
          onClick={() => window.location.replace("/mates")}
          className={isMatesActive ? styles.iconActive : styles.icon}
        >
          <div className={styles.iconDiv}>
            <TabMatesIcon
              color={isMatesActive ? "#7462FF" : "#A1A1A1"}
              width={24}
              height={24}
            />
            <p
              className={
                isMatesActive
                  ? styles.iconText + "  " + styles.iconTextActive
                  : styles.iconText
              }
            >
              Мейты
            </p>
          </div>
        </div>

        <div
          onClick={() => window.location.replace("/mates/search")}
          className={styles.icon}
        >
          <div className={styles.iconDiv}>
            <SearchIcon
              color={isSearchActive ? "#7462FF" : "#A1A1A1"}
              fillOpacity={1}
              width={24}
              height={24}
            />
            <p
              className={
                isSearchActive
                  ? styles.iconText + "  " + styles.iconTextActive
                  : styles.iconText
              }
            >
              Поиск
            </p>
          </div>
        </div>

        <div
          onClick={() => window.location.replace("/")}
          className={isProfileActive ? styles.iconActive : styles.icon}
        >
          <div className={styles.iconDiv}>
            <TabProfileIcon
              color={isProfileActive ? "#7462FF" : "#A1A1A1"}
              width={24}
              height={24}
            />
            <p
              className={
                isProfileActive
                  ? styles.iconText + "  " + styles.iconTextActive
                  : styles.iconText
              }
            >
              Профиль
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TabBar;
