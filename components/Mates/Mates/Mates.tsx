'use client';

import { useState, useEffect } from "react";
import { fetchUserMates } from "@/utils/fetchUserData/fetchUserMates";
import mainStyles from "./Mates.module.css";
import UsersList from "./UsersList";
import NoMates from "@/components/Mates/Mates/NoMates";
import Loading from "@/components/Layout/Loading";

const Mates = () => {
    const [userMates, setUserMates] = useState([]);
    const [isMatesLoading, setIsMatesLoading] = useState(true);

    useEffect(() => {
        setIsMatesLoading(true);
        const fetchUserProfileDataHandler = async () => {
            const result = await fetchUserMates();
            setUserMates(result.data);
            setIsMatesLoading(false);
        }
        fetchUserProfileDataHandler();
    }, []);

    if (isMatesLoading) return <Loading />

    return (
        <>
            <section className={mainStyles.mates}>
                <div className={mainStyles.sectionTitle}>Мейты</div>
                {
                    userMates.length > 0 ? <UsersList userItems={userMates}/> : <NoMates/>
                }
            </section>
            {
                userMates.length <= 0 &&
                <div className={mainStyles.bgWrapper}>
                    <img src="/purposesImg/search_bg-tag.png" alt="bg" className={mainStyles.bgTag}/>
                </div>
            }
        </>
    );
};

export default Mates;