import matesMainStyles from "./MatesMain.module.css";
import Link from "next/link";
import MatesList from "./MatesList/MatesList";
import { mockMates } from "./mockMates";
// import matesRequestAddImg from "@/public/purposesImg/mates_requests_add-img.svg";
import SearchIcon from "@/components/Mates/MatesSvgIcons/SearchIcon";
import ArrowRightIcon from "@/components/Mates/MatesSvgIcons/ArrowRightIcon";

const MatesMain = () => {
    const requests = [
        { id: 1, avatar: "https://i.pravatar.cc/100" },
        { id: 2, avatar: "https://i.pravatar.cc/100" },
        // { id: 3, avatar: "https://i.pravatar.cc/100" },
        // { id: 4, avatar: "https://i.pravatar.cc/100" },
    ];
    const requestsCount = requests.length;
    // const previewAvatars = requests.slice(0, 3);
    const matesLength = mockMates.length;
    return (
        <div className={matesMainStyles.main}>
            <div className={matesMainStyles.mainСontent}>
                <div className={matesMainStyles.topBar}>
                    <h1 className={matesMainStyles.topTitle}>Мейты</h1>
                    <Link href="/mates/search" className={matesMainStyles.topAction} aria-label="Поиск">
                        <SearchIcon
                            color={matesLength === 0 ? "#7462FF" : "black"}
                            fillOpacity={matesLength === 0 ? 1 : 0.37}
                            width={24}
                            height={24}
                        />
                    </Link>
                </div>

                <Link href="/mates/requests" className={matesMainStyles.requests} aria-label="Заявки">
                    <div className={matesMainStyles.requestsLeft}>
                        <div className={matesMainStyles.requestsInfo}>
                            <div className={matesMainStyles.requestsTitle}>Заявки</div>
                            {requestsCount > 0 ? <div className={matesMainStyles.requestsCount}>{requestsCount}</div> : <></>}
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