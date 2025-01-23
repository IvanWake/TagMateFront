'use client';

import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { userRegister } from "@/services/auth";
import { fetchInterests } from "@/utils/fetchInterests";
import FirstStep from "@/components/SignUp/FirstStep/FirstStep";
import SecondStep from "@/components/SignUp/SecondStep/SecondStep";
import ThirdStep from "@/components/SignUp/ThirdStep/ThirdStep";
import FourthStep from "@/components/SignUp/FourthStep/FourthStep";
import FifthStep from "@/components/SignUp/FifthStep/FifthStep";
import NonAuthRoute from "@/components/Auth/NonAuthRoute";


const SignUp = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [categories, setCategories] = useState();
    const methods = useForm({ mode: "onChange" });
    const router = useRouter();

    useEffect(() => {
        const fetchFormData = async () => {
            const categoriesRes = await fetchInterests();

            const categories = await categoriesRes;
            setCategories(categories);
        }

        fetchFormData();
    }, []);

    const nextStepHandler = () => setCurrentStep(prev => prev + 1);
    const prevStep = () => setCurrentStep(prev => prev - 1);

    const steps = {
        1: <FirstStep nextStep={nextStepHandler} stepId={currentStep}/>,
        2: <SecondStep nextStep={nextStepHandler} categories={categories} stepId={currentStep}/>,
        3: <ThirdStep stepId={currentStep} nextStep={nextStepHandler}/>,
        4: <FourthStep stepId={currentStep}/>,
        4: <FifthStep stepId={currentStep}/>,
    }


    const submitHandler = async (data) => {
        const formData = new FormData();

        formData.append("name", "Ivashka");
        formData.append("lastName", "Ubivashka");
        formData.append("gender", "male");
        formData.append("birthDay", "2005-10-12");
        formData.append("city", "1900");
        formData.append("purpose", data.purpose);
        formData.append("avatar", data.avatar[0]);
        formData.append("interests", JSON.stringify(["🎨 Рисование"]));
        formData.append("email", "IvanKentVaska228@gmail.com");
        formData.append("password", "12345678");
        formData.append("repeatPassword", "12345678");
        userRegister(formData);
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