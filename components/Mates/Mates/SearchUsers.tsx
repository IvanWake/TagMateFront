import mainStyles from "./Mates.module.css";
import UsersList from "./UsersList";

const Mates = () => {
    return (
        <>
            <section className={mainStyles.mates}>
                <div className={mainStyles.sectionTitle}>Результаты поиска</div>
                {/* Если найдены: */}
                {/* <UsersList /> */}

                {/* Если НЕ найдены: */}
                <div className={mainStyles.matesText}>По вашему запросу ничего не найдено.</div>
            </section>
            <div className={mainStyles.bgWrapper}>
                <img src="purposesImg/search_bg-tag.png" alt="bg" className={mainStyles.bgTag}/>
            </div>
        </>
    );
};

export default Mates;