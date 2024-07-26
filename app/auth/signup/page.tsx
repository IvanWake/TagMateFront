'use client';

import { useState } from "react";
import FirstStep from "@/components/SignUp/FirstStep";
import SecondStep from "@/components/SignUp/SecondStep";
import ThirdStep from "@/components/SignUp/ThirdStep";
import NonAuthRoute from "@/components/Auth/NonAuthRoute";

const SignUp = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const nextStepHandler = () => setCurrentStep(prev => prev + 1);

    const steps = {
        1: <FirstStep nextStep={nextStepHandler} />,
        2: <SecondStep nextStep={nextStepHandler} />,
        3: <ThirdStep />
    }

    return (

        <NonAuthRoute>
            { steps[currentStep] }
        </NonAuthRoute>
    );
}

export default SignUp;