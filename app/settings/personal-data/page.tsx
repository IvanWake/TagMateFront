import AuthRoute from "@/components/Auth/AuthRoute";
import PersonalData from "@/components/Settings/PersonalData/PersonalData";

const SettingsPage = () => {
  return (
    <AuthRoute>
      <PersonalData />
    </AuthRoute>
  );
};

export default SettingsPage;
