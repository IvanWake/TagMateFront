'use client';

import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { userRegister } from "@/services/auth";
import { fetchInterests } from "@/utils/fetchInterests";
import { fetchCity } from "@/utils/fetchCities";
import FirstStep from "@/components/SignUp/FirstStep/FirstStep";
import SecondStep from "@/components/SignUp/SecondStep/SecondStep";
import FourthStep from "@/components/SignUp/FourthStep/FourthStep";
import ThirdStep from "@/components/SignUp/ThirdStep/ThirdStep";
import NonAuthRoute from "@/components/Auth/NonAuthRoute";


const SignUp = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [interests, setInterests] = useState();
    const methods = useForm({ mode: "onChange" });
    const router = useRouter();

    // const nextStepHandler = () => setCurrentStep(prev => prev + 1);
    // const steps = {
    //     1: <FirstStep nextStep={nextStepHandler} cities={cities}/>,
    //     2: <SecondStep nextStep={nextStepHandler} interests={interests}/>,
    //     3: <ThirdStep />
    // }


    useEffect(() => {
        const fetchFormData = async () => {
            const interestsRes = await fetchInterests();

            const interests = await interestsRes;

            setInterests(interests);
        }

        fetchFormData();
    }, []);

    // const submitHandler = async (data) => {
    //     const formData = new FormData();
    //
    //     formData.append("firstName", data.firstName);
    //     formData.append("lastName", data.lastName);
    //     formData.append("surName", data.surName);
    //     formData.append("sex", data.sex);
    //     formData.append("birthday", data.birthday);
    //     formData.append("city", data.city);
    //     formData.append("purpose", data.purpose);
    //     // formData.append("profileImage", data.profileImage[0]);
    //     formData.append("interests", data.interests);
    //     formData.append("email", data.email);
    //     formData.append("password", data.password);
    //     formData.append("repeatPassword", data.repeatPassword);
    //     userRegister(data); // XD улетела форма =)
    // }


    return (
        <NonAuthRoute>
            <FormProvider {...methods}>
                    <FirstStep />
            </FormProvider>
        </NonAuthRoute>
    );
}

export default SignUp;