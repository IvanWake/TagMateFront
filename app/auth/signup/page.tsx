'use client';

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import FirstStep from "@/components/SignUp/FirstStep";
import SecondStep from "@/components/SignUp/SecondStep";
import ThirdStep from "@/components/SignUp/ThirdStep";
import NonAuthRoute from "@/components/Auth/NonAuthRoute";

const SignUp = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const methods = useForm({
        mode: "onBlur",
        defaultValues: {
            lastName: '',
            firstName: '',
            patronymic: '',
            sex: '',
            birthday: '',
            city: '',
            status: '',
            interests: [],
            profileImage: null,
            password: '',
            passwordRepeat: '',
            email: ''
        }
    });

    const nextStepHandler = () => setCurrentStep(prev => prev + 1);

    const onSubmit = (data) => {
        console.log(data);
    };

    const steps = {
        1: <FirstStep nextStep={nextStepHandler} />,
        2: <SecondStep nextStep={nextStepHandler} />,
        3: <ThirdStep />
    }

    return (
        <NonAuthRoute>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    {steps[currentStep]}
                </form>
            </FormProvider>
        </NonAuthRoute>
    );
}

export default SignUp;

