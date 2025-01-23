'use client';
import { useState, ChangeEvent } from "react";
import { Step } from "@/types/signup/steps";
import signupStyles from "./ThirdStep.module.css";


const ThirdStep = ({ stepId, nextStep }: Step) => {

    const [previewImage, setPreviewImage] = useState();
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file && file.type.startsWith('image/')) {
            const imageUrl = URL.createObjectURL(file)
            setPreviewImage(imageUrl)
        }
    }

    return (
        <>
            <div className={signupStyles.main}>
                <div className={signupStyles.hero}>
                    <div className={signupStyles.back}>Назад</div>
                    <h1>Фотография профиля</h1>
                </div>

                <div className={previewImage ? `${signupStyles["upload-wrapper"]} ${signupStyles["uploaded"]}` : signupStyles["upload-wrapper"]}>
                    <label className={signupStyles["upload-container"]}>
                        <input onChange={handleFileChange} className={signupStyles.file} id="file-input" type="file"  accept=".jpg,.png,.heif" />
                            <img className={signupStyles["upload-icon"]} src="/icons/auth/plus.svg" alt="avatar" />
                            <img src={previewImage} className={signupStyles["uploaded-image"]} alt="Uploaded image" />
                    </label>
                    <label htmlFor="file-input" className={signupStyles.button}>Изменить фотографию</label>
                </div>
            </div>
            <div className={signupStyles.footer}>
                <button className={`${signupStyles.button} ${signupStyles.next}`} disabled={true}>Далее</button>
            </div>
        </>
    );
};

export default ThirdStep;

