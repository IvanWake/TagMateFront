"use client";

import NoRequests from "./NoRequests/NoRequests";
import Link from "next/link";
import { useState } from "react";
import styles from "./MatesRequests.module.css";
import { formatBirthDay } from "@/utils/formatBirthDay";
import noRequestsImg1 from "../../../public/purposesImg/mates_requests-img1.svg"; 
import noRequestsImg2 from "../../../public/purposesImg/mates_requests-img2.svg";

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
      <header className={styles.header}>
        <Link href="/mates" className={styles.back}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z" fill="#9188FF" />
          </svg>
          Назад
        </Link>
        <div className={styles.title}>Заявки</div>
        <Link href="/mates" className={styles.back} style={{ visibility: "hidden" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z" fill="#9188FF" />
          </svg>
          Назад
        </Link>
      </header>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${tab === "in" ? styles.active : ""}`}
          onClick={() => setTab("in")}
        >
          Входящие
        </button>
        <button
          className={`${styles.tab} ${tab === "out" ? styles.active : ""}`}
          onClick={() => setTab("out")}
        >
          Исходящие
        </button>
      </div>

      <div className={styles.list}>
        {requests.length === 0 ? (
          <NoRequests
            image={tab === "in" ? noRequestsImg1: noRequestsImg2}
            title="Заявок пока нет"
            description={
            tab === "in"
                ? "Здесь появятся заявки в мейты от людей, которым ты понравился. Заполни профиль и они скоро появятся"
                : "А здесь появятся твои заявки в мейты, заполни профиль, возьми тег и вперед"
            }
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
                      <button className={styles.accept}>Добавить</button>
                      <button className={styles.reject}>Отклонить</button>
                    </>
                  ) : (
                    <button className={styles.cancel}>Отменить заявку</button>
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