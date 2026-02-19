import interestStyles from "./Interests.module.css";

interface InterestItemProps {
  name: string;
  isActive?: boolean;
}

const InterestItem = ({ name, isActive = false }: InterestItemProps) => {
  return (
    <div
      className={interestStyles["interest-item"]}
      data-active={isActive}
    >
      <div className={interestStyles["interest-name"]}>{name}</div>
    </div>
  );
};

export default InterestItem;
