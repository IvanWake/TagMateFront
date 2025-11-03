'use client';

import { useState, useEffect } from "react";
import { fetchUserMates } from "@/utils/fetchUserData/fetchUserMates";
import mainStyles from "./MatesList.module.css";
import UserList from "./UserList";
import NoMates from "./NoMates";
import Loading from "@/components/Layout/Loading";
import { mockMates } from "../mockMates";

const Mates = () => {
    // const [userMates, setUserMates] = useState([]);
    // const [isMatesLoading, setIsMatesLoading] = useState(true);

    // useEffect(() => {
    //     setIsMatesLoading(true);
    //     const fetchUserProfileDataHandler = async () => {
    //         const result = await fetchUserMates();
    //         setUserMates(result.data);
    //         setIsMatesLoading(false);
    //     }
    //     fetchUserProfileDataHandler();
    // }, []);

    // if (isMatesLoading) return <Loading />
    const userMates = mockMates;

    return (
        <>
            <section className={mainStyles.mates}>
                {
                    userMates.length > 0 ? <UserList userItems={userMates}/> : <NoMates/>
                }
            </section>
            {/* {
                userMates.length <= 0 &&
                <div className={mainStyles.bgWrapper}>
                    <img src="/purposesImg/search_bg-tag.png" alt="bg" className={mainStyles.bgTag}/>
                </div>
            } */}
        </>
    );
};

export default Mates;