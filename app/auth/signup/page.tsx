'use client';

import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { userRegister } from "@/services/auth";
import { fetchInterests } from "@/utils/fetchInterests";
import { fetchCity } from "@/utils/fetchCities";
import FirstStep from "@/components/SignUp/FirstStep";
import SecondStep from "@/components/SignUp/SecondStep";
import ThirdStep from "@/components/SignUp/ThirdStep";
import NonAuthRoute from "@/components/Auth/NonAuthRoute";

const SignUp = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [interests, setInterests] = useState();
    const [cities, setCities] = useState();
    const methods = useForm({ mode: "onChange" });
    const router = useRouter();

    const nextStepHandler = () => setCurrentStep(prev => prev + 1);
    const steps = {
        1: <FirstStep nextStep={nextStepHandler} cities={cities}/>,
        2: <SecondStep nextStep={nextStepHandler} interests={interests}/>,
        3: <ThirdStep />
    }


    const submitHandler = (formData) => {
        userRegister(formData);
    }

    useEffect(() => {
        const fetchFormData = async () => {
            const citiesRes = await fetchCity();
            const interestsRes = await fetchInterests();

            const interests = await interestsRes;
            const cities = await citiesRes;

            setInterests(interests);
            setCities(cities)
        }

        fetchFormData();
    }, []);


    return (
        <NonAuthRoute>
            <FormProvider {...methods}>
                <form className="form" onSubmit={methods.handleSubmit(submitHandler)}>
                    { steps[currentStep] }
                </form>
            </FormProvider>
        </NonAuthRoute>
    );
}

export default SignUp;