'use client';

import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { fetchInterests } from "@/utils/fetchInterests";
import FirstStep from "@/components/SignUp/FirstStep";
import SecondStep from "@/components/SignUp/SecondStep";
import ThirdStep from "@/components/SignUp/ThirdStep";
import NonAuthRoute from "@/components/Auth/NonAuthRoute";

const SignUp = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [interests, setInterests] = useState();
    const methods = useForm({
        mode: "onChange"
    });

    const nextStepHandler = () => setCurrentStep(prev => prev + 1);

    const steps = {
        1: <FirstStep nextStep={nextStepHandler}/>,
        2: <SecondStep nextStep={nextStepHandler} interests={interests}/>,
        // 3: <ThirdStep/>
    }


    const submitHandler = (data) => {
        console.log(data);
    }

    useEffect(() => {
        const fetchInterestsHandler = async () => {
            const res = await fetchInterests();

            const interests = await res;
            setInterests(interests);
        }

        fetchInterestsHandler();
    }, []);


    return (
        <NonAuthRoute>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(submitHandler)}>
                    { steps[currentStep] }
                </form>
            </FormProvider>
        </NonAuthRoute>
    );
}

export default SignUp;