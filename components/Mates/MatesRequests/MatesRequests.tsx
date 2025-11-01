"use client";

import NoRequests from "./NoRequests/NoRequests";
import Link from "next/link";
import { useState } from "react";
import styles from "./MatesRequests.module.css";
import { formatBirthDay } from "@/utils/formatBirthDay";
import noRequestsImg1 from "@/public/purposesImg/mates_requests-img1.svg";
import noRequestsImg2 from "@/public/purposesImg/mates_requests-img2.svg";
import ArrowLeftIcon from "../MatesSvgIcons/ArrowLeftIcon";

const incomingDescription =
  "Здесь появятся заявки в мейты от людей, которым ты понравился. Заполни профиль и они скоро появятся";
const outgoingDescription =
  "А здесь появятся твои заявки в мейты, заполни профиль, возьми тег и вперед";

const incomingRequests = [
  {
    id: "1",
    name: "Иван",
    lastName: "Иванов",
    city: "Москва",
    avatar: "/Serega.jpg",
    birthDay: new Date(1995, 4, 12),
  },
  {
    id: "2",
    name: "Мария",
    lastName: "Петрова",
    city: "Санкт-Петербург",
    avatar: "https://i.pravatar.cc/100",
    birthDay: new Date(1998, 10, 5),
  },
];

const outgoingRequests = [
  {
    id: "3",
    name: "Алексей",
    lastName: "Сидоров",
    city: "Казань",
    avatar: "https://i.pravatar.cc/100",
    birthDay: new Date(1992, 7, 23),
  },
];

export default function MatesRequests() {
  const [tab, setTab] = useState<"in" | "out">("in");

  const requests = tab === "in" ? incomingRequests : outgoingRequests;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Link href="/mates" className={styles.back}>
          <ArrowLeftIcon />
          Назад
        </Link>
        <div className={styles.title}>Заявки</div>
        <Link href="/mates" className={styles.back} style={{ visibility: "hidden" }}>
          <ArrowLeftIcon />
        </Link>
      </div>

      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${tab === "in" ? styles.active : ""}`}
          onClick={() => setTab("in")}
        >
          Входящие
        </div>
        <div
          className={`${styles.tab} ${tab === "out" ? styles.active : ""}`}
          onClick={() => setTab("out")}
        >
          Исходящие
        </div>
      </div>

      <div className={styles.list}>
        {requests.length === 0 ? (
          <NoRequests
            image={tab === "in" ? noRequestsImg1: noRequestsImg2}
            title="Заявок пока нет"
            description={tab === "in" ? incomingDescription : outgoingDescription}
        />
        ) : (
          requests.map((user) => (
            <div key={user.id} className={styles.userItem}>
              <img src={user.avatar} alt="" className={styles.userPicture} />
              <div className={styles.userInfo}>
                <div className={styles.userName}>{user.name} {user.lastName}</div>
                <div className={styles.userDescription}>{`${formatBirthDay(user.birthDay).yearsOld}, ${user.city}`}</div>
                <div className={styles.actions}>
                  {tab === "in" ? (
                    <>
                      <div className={styles.accept}>Добавить</div>
                      <div className={styles.reject}>Отклонить</div>
                    </>
                  ) : (
                    <div className={styles.cancel}>Отменить заявку</div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}