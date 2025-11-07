import AuthRoute from "@/components/Auth/AuthRoute";
import SettingsMain from "@/components/Settings/SettingsMain/SettingsMain";

const SettingsPage = () => {
  return (
    <AuthRoute>
      <SettingsMain />
    </AuthRoute>
  );
};

export default SettingsPage;
