'use client';
import { Step } from "@/types/signup/steps";


const ThirdStep = ({ stepId, nextStep }: Step) => {

    return (
        <>
            <div className="main">
                <div className="hero">
                    <div className="back">Назад</div>
                    <h1>Фотография профиля</h1>
                </div>

                <div className="upload-wrapper">
                    <label className="upload-container">
                        <input id="file-input" type="file" accept=".jpg,.png,.heif">
                            <img className="upload-icon" src="plus.svg">
                                <img src="placeholder.png" alt="Uploaded image" className="uploaded-image">
                    </label>
                    <label htmlFor="file-input" className="button">Изменить фотографию</label>
                </div>
            </div>
            <div className="footer">
                <button className="button next" disabled>Далее</button>
            </div></>
    );
};

export default ThirdStep;

