'use client';

type Props = {
    name: string,
    lastName: string,
    wasOnline?: Date
}

const HeaderProfileInfo = ({ name, lastName, wasOnline }: Props) => {
    return (
        <div className="profile-info">
            <div className="profile-name">{name + " " + lastName}</div>
            <div className="profile-online">{"Был в сети" + wasOnline}</div>
        </div>
    );
}

export default HeaderProfileInfo;