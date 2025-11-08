'use client';

import { useState } from "react";
import { Interest } from "@/types/signup/steps";
import signupStyles from "@/components/SignUp/SecondStep/SecondStep.module.css";

type Props = {
    _id?: string,
    category_id: string,
    id: number,
    name: string,
    comparesId?: Interest[],
    checked?: boolean,
    handler?: () => void
}

const InterestItem = ({ id, name, checked, handler }: Props) => {
    const [isChecked, setIsChecked] = useState(checked);

    const onChangeInterestsHandler = () => {
        setIsChecked(prevState => !prevState);
        handler(id);
    }

    return (
        <label className={signupStyles.interest} key={'intId: ' + id}>
            <input type="checkbox" value={id} checked={isChecked} onClick={onChangeInterestsHandler} />
            <div className={signupStyles["interest-name"]}>{name}</div>
        </label>
    );
}

export default InterestItem;
