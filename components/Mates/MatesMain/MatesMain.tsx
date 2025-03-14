import matesMainStyles from "./MatesMain.module.css";
import Mates from "../Mates/Mates";
import Search from "../Search/Search";
import SearchUsers from "../Mates/SearchUsers";

const MatesMain = () => {
    return (
        <main className={matesMainStyles.main}>
            <div className={matesMainStyles.mainСontent}>
                <Search />
                <Mates />
                {/* Результаты поиска */}
                {/*<SearchUsers />*/}
            </div>
        </main>
    );
}

export default MatesMain;