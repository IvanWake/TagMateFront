'use client';

import { useState, useEffect } from "react";
import { fetchUserMates } from "@/utils/fetchUserData/fetchUserMates";
import mainStyles from "./MatesList.module.css";
import UserList from "./UserList";
import NoMates from "./NoMates";
import Loading from "@/components/Layout/Loading";

const Mates = () => {
    const [userMates, setUserMates] = useState(null);
    const [isMatesLoading, setIsMatesLoading] = useState(true);

    useEffect(() => {
        const fetchUserMatesHandler = async() => {
            const res = await fetchUserMates();
            setUserMates(res.data);
            setIsMatesLoading(false);
        }
        fetchUserMatesHandler();
    }, []);

    return (
        <>
            <section className={mainStyles.mates}>
                {
                    isMatesLoading ? <Loading /> :
                        userMates.length > 0 ?
                        <UserList userItems={userMates}/> :
                        <NoMates/>
                }
            </section>
        </>
    );
};

export default Mates;