import UserTag from "@/components/User/UserTag";
import profileContentStyles from "./Profile.module.css";
import UserPurpose from "@/components/User/UserPurpose";

const ProfileContent = ({ tag, purpose }) => {
    return (
        <main className={profileContentStyles["profile-content"]}>
            <section className={profileContentStyles["profile-details"]}>
                <UserTag tag={tag} />
                { purpose !== "none"  && <UserPurpose purpose={"relationship"}/> }
            </section>
        </main>
    );
}

export default ProfileContent;
