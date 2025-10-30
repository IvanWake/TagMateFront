import matesMainStyles from "./MatesMain.module.css";
import Link from "next/link";
import MatesList from "./MatesList/MatesList";

const MatesMain = () => {
    const requests = [
        { id: 1, avatar: "https://i.pravatar.cc/100" },
        { id: 2, avatar: "https://i.pravatar.cc/100" },
        { id: 3, avatar: "https://i.pravatar.cc/100" },
        { id: 4, avatar: "https://i.pravatar.cc/100" },
    ];
    const requestsCount = requests.length;
    const previewAvatars = requests.slice(0, 3);
    return (
        <main className={matesMainStyles.main}>
            <div className={matesMainStyles.mainСontent}>
                <div className={matesMainStyles.topBar}>
                    <h1 className={matesMainStyles.topTitle}>Мейты</h1>
                    <Link href="/mates/search" className={matesMainStyles.topAction} aria-label="Поиск">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.7053 19.282L16.4678 15.0433C17.4291 13.7825 18 12.2079 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.2081 18 13.7829 17.429 15.0438 16.4674L19.2815 20.7062C19.6739 21.0987 20.3104 21.0977 20.7036 20.7044C21.0995 20.3084 21.0975 19.6743 20.7053 19.282ZM16 10.5C16 13.5376 13.5376 16 10.5 16C7.46243 16 5 13.5376 5 10.5C5 7.46243 7.46243 5 10.5 5C13.5376 5 16 7.46243 16 10.5Z" fill="black" fill-opacity="0.37" />
                        </svg>
                    </Link>
                </div>

                <Link href="/mates/requests" className={matesMainStyles.requests} aria-label="Заявки">
                    <div className={matesMainStyles.requestsLeft}>
                        <div className={matesMainStyles.requestsAvatars}>
                            {previewAvatars.map((u, idx) => (
                                <img
                                    key={u.id}
                                    src={u.avatar}
                                    alt="request user"
                                    className={matesMainStyles.requestAvatar}
                                    style={{ zIndex: previewAvatars.length - idx }}
                                />
                            ))}
                        </div>
                        <div className={matesMainStyles.requestsInfo}>
                            <div className={matesMainStyles.requestsTitle}>Заявки</div>
                            <div className={matesMainStyles.requestsCount}>{requestsCount}</div>
                        </div>
                    </div>
                    <div className={matesMainStyles.requestsArrow}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.96217 13.4662C4.78642 13.2904 4.68769 13.052 4.68769 12.8034C4.68769 12.5548 4.78642 12.3164 4.96217 12.1406L9.6028 7.49999L4.96217 2.85936C4.7914 2.68255 4.69691 2.44573 4.69904 2.19992C4.70118 1.95411 4.79977 1.71898 4.97359 1.54515C5.14741 1.37133 5.38255 1.27274 5.62836 1.2706C5.87417 1.26847 6.11098 1.36296 6.2878 1.53374L11.5912 6.83717C11.767 7.01298 11.8657 7.25139 11.8657 7.49999C11.8657 7.74858 11.767 7.98699 11.5912 8.1628L6.2878 13.4662C6.11199 13.642 5.87358 13.7407 5.62499 13.7407C5.37639 13.7407 5.13798 13.642 4.96217 13.4662Z" fill="#949494" />
                        </svg>
                    </div>
                </Link>
                <MatesList />
            </div>
        </main>
    );
}

export default MatesMain;