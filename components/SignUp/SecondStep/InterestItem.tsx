'use client';

import { useState } from "react";
import { Interest } from "@/types/signup/steps";
import signupStyles from "@/components/SignUp/SecondStep/SecondStep.module.css";


const InterestItem = ({ id, name, checked }: Interest) => {
    const [isChecked, setIsChecked] = useState(checked);

    return (
        <label className={signupStyles.interest} key={'intId: ' + id}>
            <input type="checkbox" value={id} checked={isChecked} onClick={() => setIsChecked(prevState => !prevState)} />
            <div onClick={() => console.log(123)} className={signupStyles["interest-name"]}>{name}</div>
        </label>
    );
}

export default InterestItem;
