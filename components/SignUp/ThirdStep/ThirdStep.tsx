'use client';
import {useState, ChangeEvent, useEffect} from "react";
import { useFormContext } from "react-hook-form";
import { cacheUserFormDataBySteps } from "@/utils/cacheUserFormDataBySteps";
import { Step } from "@/types/signup/steps";
import signupStyles from "./ThirdStep.module.css";


const ThirdStep = ({ stepId, nextStep, prevStep }: Step) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    const [previewImage, setPreviewImage] = useState();
    const { register, formState: { errors}, getValues, watch } = useFormContext();
    const watchAllFields = watch();

    useEffect(() => {
        const values = getValues();

        if (values.avatar[0]) {
            const imageUrl = URL.createObjectURL(values.avatar[0])
            setPreviewImage(imageUrl)
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [watchAllFields])

    const logUserDataHandler = () => {
        cacheUserFormDataBySteps(stepId, {
            avatar: previewImage
        });
        nextStep();
    }

    return (
        <>
            <div className={signupStyles.main}>
                <div className={signupStyles.hero}>
                    <div className={signupStyles.back} onClick={() => prevStep()}>Назад</div>
                    <h1>Фотография профиля</h1>
                </div>

                <div className={previewImage ? `${signupStyles["upload-wrapper"]} ${signupStyles["uploaded"]}` : signupStyles["upload-wrapper"]}>
                    <label className={signupStyles["upload-container"]}>
                        <input {...register("avatar")} className={signupStyles.file} id="file-input" type="file" accept=".jpg,.png,.heif" />
                            <img className={signupStyles["upload-icon"]} src="/icons/auth/plus.svg" alt="avatar" />
                            <img src={previewImage} className={signupStyles["uploaded-image"]} alt="Uploaded image" />
                    </label>
                    <label htmlFor="file-input" className={signupStyles.button}>Изменить фотографию</label>
                </div>
            </div>
            <div className={signupStyles.footer}>
                <button
                    type="button"
                    className={`${signupStyles.button} ${signupStyles.next}`}
                    onClick={logUserDataHandler}
                    disabled={isButtonDisabled}>Далее</button>
            </div>
        </>
    );
};

export default ThirdStep;

