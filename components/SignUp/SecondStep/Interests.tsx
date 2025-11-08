'use client';

import { useState } from "react";
import { Interest } from "@/types/signup/steps";
import InterestItem from "@/components/SignUp/SecondStep/InterestItem";
import signupStyles from "@/components/SignUp/SecondStep/SecondStep.module.css";

type Interests = { interests: Interest[], comparesId: Interest[], handleDataFromChild?: () => void }

const Interests = ({ interests, comparesId, handleDataFromChild }: Interests) => {
    const [comparesIds, setComparesIds] = useState(comparesId.map(item => item.id));
    const handleInterestToggle = (interestId: string) => {
        setComparesIds(prevIds => {
            const exists = prevIds.includes(interestId);

            if (exists) {
                handleDataFromChild(prevIds.filter(id => id !== interestId));
                return handleDataFromChild(prevIds.filter(id => id !== interestId));
            } else {
                handleDataFromChild([...prevIds, interestId]);
                return handleDataFromChild([...prevIds, interestId]);
            }
        });
    };

    return (
        <div className={signupStyles.interests}>
            {
                interests?.map((interest) => (
                    <InterestItem
                        id={interest.id}
                        name={interest.name}
                        category_id={interest.category_id}
                        checked={comparesId.some((item) => item.id === interest.id)}
                        handler={handleInterestToggle}
                    />
                ))
            }
        </div>
    );
}

export default Interests;
