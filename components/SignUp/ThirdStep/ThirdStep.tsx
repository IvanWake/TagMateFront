'use client';
import { useState, ChangeEvent, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { compressImage } from "@/utils/compressImage"; // ← убедись, что путь правильный
import signupStyles from "./ThirdStep.module.css";
import {updateAvatar} from "@/services/settings";

const ThirdStep = ({ stepId, nextStep, prevStep }: Step) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    useEffect(() => {
        const values = getValues();
        if (values.avatar?.[0]) {
            const imageUrl = URL.createObjectURL(values.avatar[0]);
            setPreviewImage(imageUrl);
            setIsButtonDisabled(false);
        } else {
            setPreviewImage(null);
            setIsButtonDisabled(true);
        }
    }, [watch("avatar")]);

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const compressedFile = await compressImage(file);
            setValue("avatar", [compressedFile], { shouldValidate: true, shouldDirty: true });

            setPreviewImage(URL.createObjectURL(compressedFile));
            setIsButtonDisabled(false);
            console.log("Сжал фотку")
        }
    };

    return (
        <>
            <div className={signupStyles.main}>
                <div className={signupStyles.hero}>
                    <div className={signupStyles.back} onClick={() => prevStep()}>Назад</div>
                    <h1>Фотография профиля</h1>
                </div>

                <div className={previewImage ? `${signupStyles["upload-wrapper"]} ${signupStyles["uploaded"]}` : signupStyles["upload-wrapper"]}>
                    <label className={signupStyles["upload-container"]}>
                        {/* ОСТАВЛЯЕМ register, но переопределяем onChange */}
                        <input
                            className={signupStyles.file}
                            id="file-input"
                            type="file"
                            accept="image/jpeg,image/png,image/heic,image/heif,image/jpg"
                            onChange={handleFileChange}
                        />
                        <img className={signupStyles["upload-icon"]} src="/icons/auth/plus.svg" alt="avatar" />
                        {previewImage && (
                            <img src={previewImage} className={signupStyles["uploaded-image"]} alt="Uploaded image" />
                        )}
                    </label>
                    <label htmlFor="file-input" className={signupStyles.button}>Изменить фотографию</label>
                </div>
            </div>
            <div className={signupStyles.footer}>
                <button
                    type="button"
                    className={`${signupStyles.button} ${signupStyles.next}`}
                    onClick={() => nextStep()}
                    disabled={isButtonDisabled}
                >
                    Далее
                </button>
            </div>
        </>
    );
};

export default ThirdStep;