'use client';

import MatesRequest from "@/components/Mates/MatesRequests/MatesRequest";

const MatesOutgoingRequests = ({ requests, tab }: any) => {
    return (
        <>
            {
                requests?.map((user) => (
                    <MatesRequest
                        key={user.serviceId}
                        serviceId={user.serviceId}
                        tab={tab}
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

export default MatesOutgoingRequests;