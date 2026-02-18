import interestStyles from "./Interests.module.css";

interface InterestItemProps {
  name: string;
  id: number;
  isActive?: boolean;
}

const InterestItem = ({ name, id, isActive = true }: InterestItemProps) => {
  return (
    <div
      key={id}
      className={interestStyles["interest-item"]}
      data-active={isActive}
    >
      <div className={interestStyles["interest-name"]}>{name}</div>
    </div>
  );
};

export default InterestItem;
