"use client";

import { useState } from "react";
import mainStyles from "./MatesSearch.module.css";
import Link from "next/link";
import NoMatesSearch from "./NoMatesSearch/NoMatesSearch";
import { formatBirthDay } from "@/utils/formatBirthDay";
import CloseIcon from "../MatesSvgIcons/CloseIcon";
import ArrowLeftIcon from "../MatesSvgIcons/ArrowLeftIcon";

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
            <ArrowLeftIcon color="#949494"/>
          </Link>
        <div className={mainStyles.searchInputWrapper}>
          <input
            type="search"
            placeholder="Имя, фамилия, тег"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {query && (
            <div
              aria-label="Очистить"
              onClick={() => setQuery("")}
              className={mainStyles.closeIcon}
            >
              <CloseIcon />
            </div>
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