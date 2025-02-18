'use client';

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/auth";
import NonAuthRoute from "@/components/Auth/NonAuthRoute";
import LoginForm from "@/components/Auth/LoginForm";
import LoginFooter from "@/components/Auth/LoginFooter";
import mainStyles from "@/components/Auth/Login.module.css";


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
        window.location.replace("/");

    }

    return (
        <NonAuthRoute>
            <FormProvider {...methods}>
                <form className={mainStyles.form} onSubmit={methods.handleSubmit(submitHandler)}>
                    <LoginForm formError={formError} />
                    <LoginFooter />
                </form>
            </FormProvider>
        </NonAuthRoute>
    );
}

export default Page;