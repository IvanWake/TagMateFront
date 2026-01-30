import { UserItemSearch } from "@/types/mates/userItem";
import mainStyles from "./MatesList.module.css";
import User from "./User";

type CityInfo = { city: string; id: number; region: string };
type UserListProps = { userItems: UserItemSearch<CityInfo>[] };

const UserList = ({ userItems }: UserListProps) => {
    return (
        <div className={mainStyles.matesList}>
            {
                userItems
                    ?.filter(userItem => userItem !== null)
                    .map((userItem) => (
                        <User
                            key={userItem.serviceId}
                            name={userItem.name}
                            lastName={userItem.lastName}
                            city={userItem.city.city}
                            avatar={userItem.avatar.path}
                            serviceId={userItem.serviceId}
                            birthDay={userItem.birthDay}
                        />
                    ))
            }
                </div>
    );
};

export default UserList;