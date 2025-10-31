"use client";

import { useState } from "react";
import mainStyles from "./MatesSearch.module.css";
import Link from "next/link";
import NoMatesSearch from "./NoMatesSearch/NoMatesSearch";
import { formatBirthDay } from "@/utils/formatBirthDay";

const mockResults = [
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

const MatesSearch = () => {
  const [query, setQuery] = useState("");
  // Для примера: если есть текст, показываем моковые результаты, иначе пусто
  const results = query ? mockResults : [];

  return (
    <div className={mainStyles.wrapper}>
      <section className={mainStyles.searchInput}>
          <Link href="/mates" aria-label="Назад">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3837 17.9551C13.6181 17.7207 13.7497 17.4028 13.7497 17.0713C13.7497 16.7399 13.6181 16.422 13.3837 16.1876L7.19625 10.0001L13.3837 3.81256C13.6114 3.57681 13.7374 3.26106 13.7346 2.93331C13.7317 2.60556 13.6003 2.29205 13.3685 2.06029C13.1368 1.82853 12.8232 1.69707 12.4955 1.69422C12.1678 1.69137 11.852 1.81736 11.6162 2.04506L4.545 9.11631C4.31066 9.35072 4.17902 9.66861 4.17902 10.0001C4.17902 10.3315 4.31066 10.6494 4.545 10.8838L11.6162 17.9551C11.8507 18.1894 12.1685 18.321 12.5 18.321C12.8315 18.321 13.1493 18.1894 13.3837 17.9551Z" fill="#949494" />
            </svg>
          </Link>
        <div className={mainStyles.searchInputWrapper}>
          <input
            type="search"
            placeholder="Имя, фамилия, тег"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {query && (
            <button
              type="button"
              aria-label="Очистить"
              onClick={() => setQuery("")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                marginLeft: 4,
                display: "flex",
                alignItems: "center"
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11.1666L5.91671 15.2499C5.76393 15.4027 5.56949 15.4791 5.33337 15.4791C5.09726 15.4791 4.90282 15.4027 4.75004 15.2499C4.59726 15.0971 4.52087 14.9027 4.52087 14.6666C4.52087 14.4305 4.59726 14.236 4.75004 14.0833L8.83337 9.99992L4.75004 5.91659C4.59726 5.76381 4.52087 5.56936 4.52087 5.33325C4.52087 5.09714 4.59726 4.9027 4.75004 4.74992C4.90282 4.59714 5.09726 4.52075 5.33337 4.52075C5.56949 4.52075 5.76393 4.59714 5.91671 4.74992L10 8.83325L14.0834 4.74992C14.2362 4.59714 14.4306 4.52075 14.6667 4.52075C14.9028 4.52075 15.0973 4.59714 15.25 4.74992C15.4028 4.9027 15.4792 5.09714 15.4792 5.33325C15.4792 5.56936 15.4028 5.76381 15.25 5.91659L11.1667 9.99992L15.25 14.0833C15.4028 14.236 15.4792 14.4305 15.4792 14.6666C15.4792 14.9027 15.4028 15.0971 15.25 15.2499C15.0973 15.4027 14.9028 15.4791 14.6667 15.4791C14.4306 15.4791 14.2362 15.4027 14.0834 15.2499L10 11.1666Z" fill="#7462FF" />
            </svg>
            </button>
          )}
        </div>
      </section>

      <section className={mainStyles.list}>
        {results.length === 0 ? (
          <NoMatesSearch
        />
        ) : (
          results.map((user) => (
            <div key={user.id} className={mainStyles.userItem}>
              <img src={user.avatar} alt="" className={mainStyles.userPicture} />
              <div className={mainStyles.userInfo}>
                <div className={mainStyles.userName}>{user.name} {user.lastName}</div>
                <div className={mainStyles.userDescription}>{`${formatBirthDay(user.birthDay).yearsOld}, ${user.city}`}</div>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default MatesSearch;