'use client';

import { Category } from "@/types/signup/steps";
import Interests from "@/components/Settings/Interests/Interests";
import signupStyles from "@/components/SignUp/SecondStep/SecondStep.module.css";

const CategoryItem = ({ category, comparesId, handleDataFromChild }: Category) => {
    return (
        <div className={signupStyles.category}>
            <div className={signupStyles["category-name-settings"]}>{category.name}</div>
            <Interests interests={category.interests} comparesId={comparesId} handleDataFromChild={handleDataFromChild}/>
        </div>
    );
}

export default CategoryItem;
