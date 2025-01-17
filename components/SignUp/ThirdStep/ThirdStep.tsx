'use client';
import { Step } from "@/types/signup/steps";


const ThirdStep = ({ stepId, nextStep }: Step) => {

    return (
        <>
            <input style={{ color: "red" }} type="file" accept="image/*" />
        </>
    );
};

export default ThirdStep;

