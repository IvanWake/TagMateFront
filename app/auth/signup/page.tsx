'use client';

import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { userRegister } from "@/services/auth";
import { fetchInterests } from "@/utils/fetchInterests";
import { getCurrentStep } from "@/utils/cacheUserFormDataBySteps";
import FirstStep from "@/components/SignUp/FirstStep/FirstStep";
import SecondStep from "@/components/SignUp/SecondStep/SecondStep";
import ThirdStep from "@/components/SignUp/ThirdStep/ThirdStep";
import FourthStep from "@/components/SignUp/FourthStep/FourthStep";
import NonAuthRoute from "@/components/Auth/NonAuthRoute";


const SignUp = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [categories, setCategories] = useState();
    const defaultFormData = getCurrentStep().formData?.reduce((acc, obj) => {
        return { ...acc, ...obj };
    }, {});
    const methods = useForm({ mode: "onTouched", defaultValues: defaultFormData });
    const router = useRouter();

    useEffect(() => {
        const fetchFormData = async () => {
            const categoriesRes = await fetchInterests();
            const categories = await categoriesRes;
            setCategories(categories);
        }
        setCurrentStep(getCurrentStep().formData.length  + 1);
        fetchFormData();
    }, []);

    const nextStepHandler = () => setCurrentStep(prev => prev + 1);
    const prevStep = () => setCurrentStep(prev => prev - 1);

    const steps = {
        1: <FirstStep nextStep={nextStepHandler} stepId={currentStep} />,
        2: <SecondStep nextStep={nextStepHandler} categories={categories} stepId={currentStep} prevStep={prevStep} />,
        3: <ThirdStep stepId={currentStep} nextStep={nextStepHandler} prevStep={prevStep} />,
        4: <FourthStep prevStep={prevStep}/>,
    }


    const submitHandler = async (signupData) => {
        const formData = new FormData();
        formData.append("email", signupData.email);
        formData.append("name", signupData.name);
        formData.append("lastName", signupData.lastName);
        formData.append("birthDay", signupData.birthDay);
        formData.append("gender", signupData.gender);
        formData.append("city", signupData.city);
        formData.append("purpose", signupData.purpose);
        formData.append("interests", JSON.stringify(signupData.interests));
        formData.append("avatar", signupData.avatar[0]);
        formData.append("password",signupData.password);
        formData.append("repeatPassword",signupData.repeatPassword);
        userRegister(formData);
        localStorage.setItem("confirmProcess", "true");
        localStorage.setItem("userMail", signupData.email);
        router.push("/auth/confirm");
    }


    return (
        <NonAuthRoute>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(submitHandler)}>
                    {
                        steps[currentStep]
                    }
                </form>
            </FormProvider>
        </NonAuthRoute>
    );
}

export default SignUp;