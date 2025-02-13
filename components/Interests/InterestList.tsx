import { Interest } from "@/types/signup/steps";
import interestStyles from "./Interests.module.css";
import InterestItem from "@/components/Interests/InterestItem";

const InterestList = ({ interests }: Interest[]) => {
    return (
        <div className={interestStyles["user-interests"]}>
            <div className={interestStyles["section-title"]}>Интересы</div>
            <div className={interestStyles["interests-list"]}>
                {
                    interests?.map((interest) => (
                        <InterestItem name={interest.name} key={interest.id}/>
                    ))
                }
            </div>
        </div>
    );
}

export default InterestList;