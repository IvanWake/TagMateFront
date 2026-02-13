'use client';
import AuthRoute from "@/components/Auth/AuthRoute";
import TabBar from "@/components/TabBar/TabBar";
import FeedMain from "../FeedMain/FeedMain";


const Feed = () => {

    return (
        <AuthRoute>
            <FeedMain />
            <TabBar />
        </AuthRoute>
    );
}

export default Feed;