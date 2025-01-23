'use client';

import { useFormContext } from "react-hook-form";
import { Category } from "@/types/signup/steps";
import CategoryItem from "@/components/SignUp/SecondStep/CategoryItem";
import signupStyles from "./SecondStep.module.css";
import {cacheUserFormDataBySteps} from "@/utils/cacheUserFormDataBySteps";
import {useEffect, useState} from "react";


type Props = {
    nextStep: () => {},
    prevStep: () => {},
    stepId: number,
    categories: Category[]
}

const SecondStep = ({ nextStep, stepId, categories, prevStep }: Props) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    const { register, formState: { errors}, getValues, watch } = useFormContext();
    const watchAllFields = watch();


    useEffect(() => {
        const values = getValues();

        if (values.purpose && values.interests[0]) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [watchAllFields])

    const logUserDataHandler = () => {
        const values = getValues();
        cacheUserFormDataBySteps(stepId, {
            purpose: values.purpose,
            interests: values.interests
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
                <button
                    className={`${signupStyles.button} ${signupStyles.next}`}
                    type="button"
                    onClick={logUserDataHandler}
                    disabled={isButtonDisabled}
                >Далее
                </button>
            </div>
        </>
    );
}

export default SecondStep;