'use client';


import { Interest } from "@/types/signup/steps";
import InterestItem from "@/components/SignUp/SecondStep/InterestItem";
import signupStyles from "@/components/SignUp/SecondStep/SecondStep.module.css";

type Interests = { interests: Interest[] }

const Interests = ({ interests }: Interests) => {
    return (
        <div className={signupStyles.interests}>
            {
                interests?.map((interest) => (
                    <InterestItem
                        id={interest.id}
                        name={interest.name}
                        category_id={interest.category_id}
                    />
                ))
            }
        </div>
    );
}

export default Interests;
