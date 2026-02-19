import { Interest } from "@/types/signup/steps";
import interestStyles from "./Interests.module.css";
import InterestItem from "@/components/Interests/InterestItem";

type InterestListType = {
  interests: Interest[];
  commonInterests?: number[];
};

const InterestList = ({ interests, commonInterests = []}: InterestListType) => {
  return (
    <div className={interestStyles["user-interests"]}>
      <div className={interestStyles["section-title"]}>Интересы</div>
      <div className={interestStyles["interests-list"]}>
        {interests?.map((interest) => (
          <InterestItem
            name={interest.name}
            key={interest.id}
            isActive={commonInterests.includes(interest.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default InterestList;
