'use client';
import AuthRoute from "@/components/Auth/AuthRoute";
import SettingsMain from "@/components/Settings/SettingsMain/SettingsMain";
import TabBar from "@/components/TabBar/TabBar";
import "@/app/settings/index.css";

const Settings = () => {
    return (
        <AuthRoute>
            <SettingsMain />
            <TabBar />
        </AuthRoute>
    );
};

export default Settings;
