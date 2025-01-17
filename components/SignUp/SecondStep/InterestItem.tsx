'use client';


import { useFormContext } from "react-hook-form";
import { Interest } from "@/types/signup/steps";
import signupStyles from "@/components/SignUp/SecondStep/SecondStep.module.css";

const InterestItem = ({ id, name, category_id }: Interest) => {
    const { register } = useFormContext();

    return (
        <label className={signupStyles.interest} key={'intId: ' + id}>
            <input { ...register('interests')} type="checkbox" value={id} />
            <div className={signupStyles["interest-name"]}>{name}</div>
        </label>
    );
}

export default InterestItem;
