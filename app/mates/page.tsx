import Header from "@/components/Header/Header";
import MatesMain from "@/components/Mates/MatesMain/MatesMain";
import TabBar from "@/components/TabBar/TabBar";
import AuthRoute from "@/components/Auth/AuthRoute";

const SearchPage = () => {

    return (
        <AuthRoute>
            <Header />
            <MatesMain />
            <TabBar />
        </AuthRoute>
    );
}

export default SearchPage;