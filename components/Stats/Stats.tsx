'use client';

type Props = {
    mates: number,
    friendlinessFactor: number
}

const Stats = ({ mates, friendlinessFactor }: Props) => {
    return (
        <div className="stats-wrapper">
            <div className="stats-element">
                <div className="stats-element-info">{friendlinessFactor}%</div>
                <div className="stats-element-name">Дружелюбие</div>
            </div>
            <div className="stats-element">
                <div className="stats-element-info">{mates}</div>
                <div className="stats-element-name">Мейты</div>
            </div>
        </div>
    );
}

export default Stats;