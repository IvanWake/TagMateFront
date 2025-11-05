'use client';

import { useEffect, useState } from "react";
import { getMatesRequests } from "@/services/whitelist";
import Link from "next/link";
import matesMainStyles from "./MatesMain.module.css";
import MatesList from "./MatesList/MatesList";
import SearchIcon from "@/components/Mates/MatesSvgIcons/SearchIcon";
import ArrowRightIcon from "@/components/Mates/MatesSvgIcons/ArrowRightIcon";

const MatesMain = () => {
    const [requestsCount, setRequestsCount] = useState(0);

    useEffect(() => {
        const fetchMatesRequestsHandler = async () => {
            const matesRequests = await getMatesRequests();
            setRequestsCount(matesRequests.data.incoming.length + matesRequests.data.outgoing.length);
        }
        fetchMatesRequestsHandler();
    }, [])

    return (
        <div className={matesMainStyles.main}>
            <div className={matesMainStyles.mainСontent}>
                <div className={matesMainStyles.topBar}>
                    <h1 className={matesMainStyles.topTitle}>Мейты</h1>
                    <Link href="/mates/search" className={matesMainStyles.topAction} aria-label="Поиск">
                        <SearchIcon
                            color={"#7462FF"}
                            fillOpacity={1}
                            width={24}
                            height={24}
                        />
                    </Link>
                </div>

                <Link href="/mates/requests" className={matesMainStyles.requests} aria-label="Заявки">
                    <div className={matesMainStyles.requestsLeft}>
                        <div className={matesMainStyles.requestsInfo}>
                            <div className={matesMainStyles.requestsTitle}>Заявки</div>
                            { requestsCount > 0 && <div className={matesMainStyles.requestsCount}>{requestsCount}</div> }
                        </div>
                    </div>
                    <div className={matesMainStyles.requestsArrow}>
                        <ArrowRightIcon />
                    </div>
                </Link>
                <MatesList />
            </div>
        </div>
    );
}

export default MatesMain;