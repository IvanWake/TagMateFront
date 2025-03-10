import mainStyles from "./Mates.module.css";
import MatesList from "./MatesList";

const Mates = () => {
    return (
        <section className={mainStyles.mates}>
            <div className={mainStyles.sectionTitle}>Мейты</div>
            <MatesList />
        </section>
    );
};

export default Mates;