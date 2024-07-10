'use client';


import { useEffect } from "react";
import { displayHeaderProfileHandler } from "@/service/layout";


const HeaderProfile = () => {
    useEffect(() => {
        window.addEventListener("scroll", displayHeaderProfileHandler);
    }, [])

    return (
        <>
            <div className="profile-image">
                <img
                    src="https://avatars.mds.yandex.net/i?id=950a3ac5bab93652b5b5311e7e711cf2b6ea2ac0-12714644-images-thumbs&n=13"
                />
            </div>
            <div className="profile-header">
                <img
                    src="https://avatars.mds.yandex.net/i?id=950a3ac5bab93652b5b5311e7e711cf2b6ea2ac0-12714644-images-thumbs&n=13"
                    className="profile-header-image"/>
                <div className="profile-header-info">
                    <div className="profile-name">Виталий Кличко</div>
                    <div className="profile-online">Был в сети час назад</div>
                </div>
            </div>
        </>
    );
}

export default HeaderProfile;