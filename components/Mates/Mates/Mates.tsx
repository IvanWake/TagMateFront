import mainStyles from "./Mates.module.css";
import MatesList from "./MatesList";

const Mates = () => {
    return (
        <>
            <section className={mainStyles.mates}>
                <div className={mainStyles.sectionTitle}>Мейты</div>
                {/* Если есть мейты */}
                {/* <MatesList /> */}

                {/* Если НЕТ мейтов */}
                <div className={mainStyles.matesText}>Возможно, ваш будущий мейт уже где-то рядом — попробуй поискать!</div>
            </section>

            {/* Если НЕТ мейтов */}
            <div className={mainStyles.bgWrapper}>
                <img src="purposesImg/search_bg-tag.png" alt="bg" className={mainStyles.bgTag} />
            </div>
        </>
    );
};

export default Mates;