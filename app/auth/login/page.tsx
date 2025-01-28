'use client';
import { useForm, FormProvider } from "react-hook-form";
import NonAuthRoute from "@/components/Auth/NonAuthRoute";
import LoginForm from "@/components/Auth/LoginForm";
import LoginFooter from "@/components/Auth/LoginFooter";


const Page = () => {
    const methods = useForm({ mode: "onChange" });

    const submitHandler = (loginData) => {
        console.log(loginData);
    }

    return (
        <NonAuthRoute>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(submitHandler)}>
                    <LoginForm/>
                    <LoginFooter />
                </form>
            </FormProvider>
        </NonAuthRoute>
    );
}

export default Page;