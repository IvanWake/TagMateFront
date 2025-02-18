'use client';

import Link from "next/link";
import headerStyles from "./Header.module.css";

const Header = () => {

    return (
        <>
            <header className={headerStyles["app-header"]}>
                <div className={headerStyles["app-branding"]}>
                    <Link href="/">
                        <div className={headerStyles["app-logo"]}>
                            <img src="/icons/tagmate-min.svg" alt="logo"/>
                        </div>
                    </Link>
                </div>
                <div className={headerStyles["app-menu"]}>
                    <div className={headerStyles["menu-item"]}>
                        <svg width="24" height="24">
                            <use xlinkHref="#icon-search"></use>
                        </svg>
                    </div>
                    <div
                        className={`${headerStyles["menu-item"]} ${headerStyles["notification-icon"]} ${headerStyles["active"]}`}
                    >
                        <svg width="24" height="24">
                            <use xlinkHref="#icon-notification"></use>
                        </svg>
                    </div>
                </div>
            </header>
            <svg style={{ display: "none" }}>
                <symbol id="icon-search" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M20.7053 19.282L16.4678 15.0433C17.4291 13.7825 18 12.2079 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.2081 18 13.7829 17.429 15.0438 16.4674L19.2815 20.7062C19.6739 21.0987 20.3104 21.0977 20.7036 20.7044C21.0995 20.3084 21.0975 19.6743 20.7053 19.282ZM16 10.5C16 13.5376 13.5376 16 10.5 16C7.46243 16 5 13.5376 5 10.5C5 7.46243 7.46243 5 10.5 5C13.5376 5 16 7.46243 16 10.5Z"
                        fill="currentColor"
                    />
                </symbol>
                <symbol id="icon-notification" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M15 18H9C9 18.7956 9.31607 19.5587 9.87868 20.1213C10.4413 20.6839 11.2044 21 12 21C12.7956 21 13.5587 20.6839 14.1213 20.1213C14.6839 19.5587 15 18.7956 15 18Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19.38 14.38C19.5768 14.577 19.7329 14.8109 19.8392 15.0683C19.9456 15.3257 20.0002 15.6015 20 15.88C20 16.4423 19.7766 16.9815 19.3791 17.3791C18.9815 17.7766 18.4423 18 17.88 18H6.12C5.55774 18 5.01851 17.7766 4.62093 17.3791C4.22336 16.9815 4 16.4423 4 15.88C3.99976 15.6015 4.05438 15.3257 4.16077 15.0683C4.26715 14.8109 4.4232 14.577 4.62 14.38L6 13V9C6 7.4087 6.63214 5.88258 7.75736 4.75736C8.88258 3.63214 10.4087 3 12 3C13.5913 3 15.1174 3.63214 16.2426 4.75736C17.3679 5.88258 18 7.4087 18 9V13L19.38 14.38Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </symbol>
            </svg>
        </>
    );
}

export default Header;