'use client';

import { useFormContext } from "react-hook-form";
import { Category } from "@/types/signup/steps";
import CategoryItem from "@/components/SignUp/SecondStep/CategoryItem";
import signupStyles from "./SecondStep.module.css";
import {cacheUserFormDataBySteps} from "@/utils/cacheUserFormDataBySteps";


type Props = {
    nextStep: () => {},
    prevStep: () => {},
    stepId: number,
    categories: Category[]
}

const SecondStep = ({ nextStep, stepId, categories, prevStep }: Props) => {
    const { register, formState: { errors}, getValues, watch } = useFormContext();

    const logUserDataHandler = () => {
        const values = getValues();
        cacheUserFormDataBySteps(stepId, {
            firstName: values.firstName, lastName: values.lastName,
            sex: values.sex, birthday: values.birthday, city: values.city
        });
        nextStep();
    }

    return (
        <>
            <div className={signupStyles.main}>
                <div className={signupStyles.hero}>
                    <div className={signupStyles.back} onClick={() => prevStep()}>Назад</div>
                    <h1>Почта и пароль</h1>
                </div>
                <div className={signupStyles.form}>
                    <div className={signupStyles.input}>
                        <label>Что ты ищешь?</label>
                        <select {...register('purpose')}>
                            <option value="communication">Общение</option>
                            <option value="relationship">Отношения</option>
                            <option value="confederate">Единомышленников</option>
                            <option value="all">Все перечисленное</option>
                            <option value="none">Ничего</option>
                        </select>
                    </div>

                    <div className={signupStyles["interests-container"]}>
                        <div className={signupStyles.title}>Выбери свои интересы</div>
                        <div className={signupStyles.categories}>
                            {
                                categories?.map((category) => (
                                    <CategoryItem category={category} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={signupStyles.footer}>
                <button type="button" onClick={logUserDataHandler} className={`${signupStyles.button} ${signupStyles.next}`}>Далее</button>
            </div>
        </>
    );
}

export default SecondStep;