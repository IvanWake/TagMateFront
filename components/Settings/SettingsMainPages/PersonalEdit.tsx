'use client';
import AuthRoute from "@/components/Auth/AuthRoute";
import PersonalData from "@/components/Settings/PersonalData/PersonalData";
import TabBar from "@/components/TabBar/TabBar";
import "@/app/settings/index.css";


const PersonalEdit = () => {
    return (
        <AuthRoute>
            <PersonalData/>
            <TabBar/>
        </AuthRoute>
    );
};

export default PersonalEdit;
