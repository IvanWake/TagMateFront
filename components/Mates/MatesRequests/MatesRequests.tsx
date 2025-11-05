"use client";

import {useState, useEffect} from "react";
import {getMatesRequests} from "@/services/whitelist";
import styles from "./MatesRequests.module.css";
import Link from "next/link";
import NoRequests from "./NoRequests/NoRequests";
import ArrowLeftIcon from "../MatesSvgIcons/ArrowLeftIcon";
import noRequestsImg1 from "@/public/purposesImg/mates_requests-img1.svg";
import noRequestsImg2 from "@/public/purposesImg/mates_requests-img2.svg";
import MatesRequest from "@/components/Mates/MatesRequests/MatesRequest";
import Loading from "@/components/Layout/Loading";
import MatesIncomingRequests from "@/components/Mates/MatesRequests/MatesIncomingRequests";
import user from "@/components/Mates/MatesMain/MatesList/User";

const incomingDescription =
    "Здесь появятся заявки в мейты от людей, которым ты понравился. Заполни профиль и они скоро появятся";
const outgoingDescription =
    "А здесь появятся твои заявки в мейты, заполни профиль, возьми тег и вперед";


export default function MatesRequests() {
    const [tab, setTab] = useState<"in" | "out">("in");
    const [isLoading, setIsLoading] = useState(true)
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchMatesRequestsHandler = async () => {
            const matesRequests = await getMatesRequests();
            setRequests(matesRequests.data);
            setIsLoading(false);
        }
        fetchMatesRequestsHandler();
    }, [])


    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Link href="/mates" className={styles.back}>
                    <ArrowLeftIcon/>
                    Назад
                </Link>
                <div className={styles.title}>Заявки</div>
                <Link href="/mates" className={styles.back} style={{visibility: "hidden"}}>
                    <ArrowLeftIcon/>
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
                {
                    isLoading ? <Loading/> :

                        tab === "in" ?
                            requests.incoming.length === 0 ?
                                <NoRequests
                                    image={tab === "in" ? noRequestsImg1 : noRequestsImg2}
                                    title="Заявок пока нет"
                                    description={tab === "in" ? incomingDescription : outgoingDescription}
                                />
                                :
                                <MatesIncomingRequests
                                    requests={requests.incoming}
                                    tab={tab}
                                />:
                            requests.outgoing.length === 0 ?
                                <NoRequests
                                    image={tab === "in" ? noRequestsImg1: noRequestsImg2}
                                    title="Заявок пока нет"
                                    description={tab === "in" ? incomingDescription : outgoingDescription}
                                /> :
                                < MatesIncomingRequests
                                    requests={requests.outgoing}
                                    tab={tab}
                                />

                }

            </div>
        </div>
    );
}