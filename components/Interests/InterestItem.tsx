import interestStyles from "./Interests.module.css";

const InterestItem = ({ name, key }: { name: string, key: number }) => {
    return (
        <div key={key} className={interestStyles["interest-item"]}>
            <div className={interestStyles["interest-name"]}>{name}</div>
        </div>
    );
}

export default InterestItem;