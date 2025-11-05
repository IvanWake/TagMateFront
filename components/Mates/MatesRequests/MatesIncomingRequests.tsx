'use client';

import MatesRequest from "@/components/Mates/MatesRequests/MatesRequest";
import {UserItemSearch} from "@/types/mates/userItem";

const MatesIncomingRequests = ({requests, tab}: any) => {
    return (
        <>
            {
                requests?.map((user) => (
                    <MatesRequest
                        key={user.serviceId}
                        tab={tab}
                        serviceId={user.serviceId}
                        name={user.name}
                        lastName={user.lastName}
                        avatar={user.avatar.path}
                        birthDay={user.birthDay}
                        city={user.city.city}
                    />
                ))
            }
        </>
    );
}

export default MatesIncomingRequests;