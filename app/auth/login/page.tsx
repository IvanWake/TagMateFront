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

        if (res.status !== 200) {
            setFormError(res.message);
            return;
        }
        router.push("/");

    }

    return (
        <NonAuthRoute>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(submitHandler)}>
                    <LoginForm formError={formError} />
                    <LoginFooter />
                </form>
            </FormProvider>
        </NonAuthRoute>
    );
}

export default Page;