'use client';

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/auth";
import NonAuthRoute from "@/components/Auth/NonAuthRoute";
import LoginForm from "@/components/Auth/LoginForm";
import LoginFooter from "@/components/Auth/LoginFooter";


const Page = () => {
    const [formError, setFormError] = useState('');
    const methods = useForm({ mode: "onChange", defaultValues: { userTag: "", userPassword: "" } });
    const router = useRouter();

    const submitHandler = async (loginData) => {
        const res = await userLogin(loginData.userTag, loginData.userPassword);
        res?.message && setFormError(res.message);
        router.push("/");
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