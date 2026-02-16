'use client';
import AuthRoute from "@/components/Auth/AuthRoute";
import TabBar from "@/components/TabBar/TabBar";
import FeedMain from "../FeedMain/FeedMain";
import FeedMatch from "@/components/Feed/FeedMain/FeedContent/FeedMatch";
import FeedCard from "../FeedMain/FeedContent/FeedCard";


const Feed = () => {

    return (
        <AuthRoute>
            <FeedMain />
            {/* <FeedMatch /> */}
            <TabBar />
        </AuthRoute>
    );
}

export default Feed;