'use client';
import AuthRoute from "@/components/Auth/AuthRoute";
import InterestsEdit from "@/components/Settings/ProfileEdit/InterestsEdit/InterestsEdit";
import "@/app/settings/index.css";

const Interests = () => {
    return (
        <AuthRoute>
            <InterestsEdit />
        </AuthRoute>
    );
};

export default Interests;
