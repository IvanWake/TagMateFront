'use client';

import { useState, useEffect } from "react";
import { fetchUserMates } from "@/utils/fetchUserData/fetchUserMates";
import mainStyles from "./Mates.module.css";
import UsersList from "./UsersList";
import NoMates from "@/components/Mates/Mates/NoMates";

const Mates = () => {
    const [userMates, setUserMates] = useState([]);

    useEffect(() => {
        const fetchUserProfileDataHandler = async () => {
            const result = await fetchUserMates();
            setUserMates(result.data);
        }
        fetchUserProfileDataHandler();
    }, []);

    return (
        <>
            <section className={mainStyles.mates}>
                <div className={mainStyles.sectionTitle}>Мейты</div>
                {
                    userMates ? <UsersList userItems={userMates}/> : <NoMates/>
                }
            </section>
            {
                !userMates &&
                <div className={mainStyles.bgWrapper}>
                    <img src="/purposesImg/search_bg-tag.png" alt="bg" className={mainStyles.bgTag}/>
                </div>
            }
        </>
    );
};

export default Mates;