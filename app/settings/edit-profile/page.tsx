import AuthRoute from "@/components/Auth/AuthRoute";
import ProfileEdit from "@/components/Settings/ProfileEdit/ProfileEdit";

const SettingsPage = () => {
  return (
    <AuthRoute>
      <ProfileEdit />
    </AuthRoute>
  );
};

export default SettingsPage;
