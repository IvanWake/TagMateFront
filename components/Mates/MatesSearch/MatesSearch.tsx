'use client';

import React, { useEffect, useRef, useState } from "react";
import { getSearchRequest } from "@/services/search";
import { formatBirthDay } from "@/utils/formatBirthDay";
import Link from "next/link";
import NoMatesSearch from "./NoMatesSearch/NoMatesSearch";
import CloseIcon from "../MatesSvgIcons/CloseIcon";
import ArrowLeftIcon from "../MatesSvgIcons/ArrowLeftIcon";
import mainStyles from "./MatesSearch.module.css";
import Loading from "@/components/Layout/Loading";

const MatesSearch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const setQueryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setQuery(inputValue);
        if (inputValue.length === 0) {
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(async () => {
            const res = await getSearchRequest(inputValue);
            if (res.data?.users != null && typeof res.data?.users === 'object' && !Array.isArray(res.data?.users)) {
                setResults([]);
            } else {
                setResults(res.data?.users);
            }

            setIsLoading(false); //SUka
        }, 1000);
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        }
    }, []);

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
                        onChange={setQueryHandler}
                    />
                    {
                        query && (
                        <div
                            aria-label="Очистить"
                            onClick={() => setQuery("")}
                            className={mainStyles.closeIcon}
                        >
                            <CloseIcon/>
                        </div>
                    )}
                </div>
            </section>

            <section className={mainStyles.list}>
                {
                    isLoading ? <Loading/> :
                        results?.length === 0 || query.length === 0 ?
                            <NoMatesSearch
                            />
                            : (
                                results?.map((user) => (

                                    <Link href={`/${user.serviceId}`} key={user._id}>
                                        <div className={mainStyles.userItem}>
                                            <img src={user.avatar.path} alt="userImage"
                                                 className={mainStyles.userPicture}/>
                                            <div className={mainStyles.userInfo}>
                                                <div className={mainStyles.userName}>{user.name} {user.lastName}</div>
                                                <div
                                                    className={mainStyles.userDescription}>{`${formatBirthDay(user.birthDay).yearsOld}, ${user.city.city}`}</div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            )}
            </section>
        </div>
    );
};

export default MatesSearch;