'use client';


import { useEffect } from "react";
import { displayHeaderProfileHandler } from "@/service/service";


const HeaderProfile = () => {
    useEffect(() => {
        window.addEventListener("scroll", displayHeaderProfileHandler);
    }, [])

    return (
        <>
            <div className="profile-image">
                <img
                    src="https://fikiwiki.com/uploads/posts/2022-02/1644850768_8-fikiwiki-com-p-utki-krasivie-kartinki-13.jpg"
                />
            </div>
            <div className="profile-header">
                <img
                    src="https://fikiwiki.com/uploads/posts/2022-02/1644850768_8-fikiwiki-com-p-utki-krasivie-kartinki-13.jpg"
                    className="profile-header-image"/>
                <div className="profile-header-info">
                    <div className="profile-name">Сергей Андрианов</div>
                    <div className="profile-online">Был в сети час назад</div>
                </div>
            </div>
        </>
    );
}

export default HeaderProfile;