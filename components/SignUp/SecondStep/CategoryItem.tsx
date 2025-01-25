'use client';

import { Category } from "@/types/signup/steps";
import Interests from "@/components/SignUp/SecondStep/Interests";
import signupStyles from "@/components/SignUp/SecondStep/SecondStep.module.css";

const CategoryItem = ({ category }: Category) => {
    return (
        <div className={signupStyles.category}>
            <div className={signupStyles["category-name"]}>{category.name}</div>
            <Interests interests={category.interests} />
        </div>
    );
}

export default CategoryItem;
