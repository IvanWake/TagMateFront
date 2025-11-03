import AuthRoute from "@/components/Auth/AuthRoute";
import MatesMain from "@/components/Mates/MatesMain/MatesMain";
import TabBar from "@/components/TabBar/TabBar";
import MatesSearch from "@/components/Mates/MatesSearch/MatesSearch";


const SearchPage = () => {

    return (
        <AuthRoute>
            <MatesMain />
            {/* <MatesSearch /> */}
            <TabBar />
        </AuthRoute>
    );
}

export default SearchPage;