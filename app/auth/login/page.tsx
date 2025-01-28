'use client';

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import NonAuthRoute from "@/components/Auth/NonAuthRoute";
import LoginForm from "@/components/Auth/LoginForm";
import LoginFooter from "@/components/Auth/LoginFooter";
import { userLogin } from "@/services/auth";


const Page = () => {
    const [formError, setFormError] = useState('');
    const methods = useForm({ mode: "onChange", defaultValues: { userTag: "", userPassword: "" } });

    const submitHandler = async (loginData) => {
        const res = await userLogin(loginData.userTag, loginData.userPassword);
        setFormError(res.message);
    }

    return (
        <NonAuthRoute>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(submitHandler)}>
                    <LoginForm/>
                    {formError && <p>{formError}</p>}
                    <LoginFooter />
                </form>
            </FormProvider>
        </NonAuthRoute>
    );
}

export default Page;