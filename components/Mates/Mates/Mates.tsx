import mainStyles from "./Mates.module.css";
import UsersList from "./UsersList";
import NoMates from "@/components/Mates/Mates/NoMates";

const Mates = () => {
    return (
        <>
            <section className={mainStyles.mates}>
                <div className={mainStyles.sectionTitle}>Мейты</div>
                 <UsersList />
                <NoMates />
            </section>

            {/* Если НЕТ мейтов */}
            <div className={mainStyles.bgWrapper}>
                <img src="/purposesImg/search_bg-tag.png" alt="bg" className={mainStyles.bgTag} />
            </div>
        </>
    );
};

export default Mates;