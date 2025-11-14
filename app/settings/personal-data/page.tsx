'use client';

import { useForm } from "react-hook-form";
import AuthRoute from "@/components/Auth/AuthRoute";
import PersonalData from "@/components/Settings/PersonalData/PersonalData";
import TabBar from "@/components/TabBar/TabBar";
import "../index.css";

const SettingsPage = () => {
    return (
        <AuthRoute>
            <PersonalData/>
            <TabBar/>
        </AuthRoute>
    );
};

export default SettingsPage;
