import { UserItemSearch } from "@/types/mates/userItem";
import mainStyles from "./Mates.module.css";
import User from "@/components/Mates/Mates/User";

const UsersList = ({ userItems }: UserItemSearch<{ city: string, id: number, region: string }>) => {
    return (
        <div className={mainStyles.matesList}>
            {
                userItems?.map((userItem) => (
                    <User
                        name={userItem.name}
                        lastName={userItem.lastName}
                        city={userItem.city.city}
                        avatar={userItem.avatar}
                        serviceId={userItem.serviceId}
                        birthDay={userItem.birthDay}
                    />
                ))
            }
        </div>
    );
};

export default UsersList;