import mainStyles from "@/components/Mates/Mates/Mates.module.css";

const NoMates = () => {
    return (
        <div className={mainStyles.matesText}>Возможно, ваш будущий мейт уже где-то рядом — попробуй поискать!</div>
    );
}

export default NoMates;