import matesMainStyles from "./MatesMain.module.css";
import Mates from "../Mates/Mates";
import Search from "../Search/Search";

const MatesMain = () => {
    return (
        <main className={matesMainStyles.main}>
            <div className={matesMainStyles.mainСontent}>
                <Search />
                <Mates />
            </div>
        </main>
    );
}

export default MatesMain;