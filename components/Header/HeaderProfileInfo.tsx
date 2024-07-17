'use client';

type Props = {
    userName: string,
    wasOnline?: Date
}

const HeaderProfileInfo = ({ userName, wasOnline }: Props) => {
    return (
        <div className="profile-info">
            <div className="profile-name">{userName}</div>
            <div className="profile-online">{"Был в сети" + wasOnline}</div>
        </div>
    );
}

export default HeaderProfileInfo;