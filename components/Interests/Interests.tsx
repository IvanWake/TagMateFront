'use client';

import Interest from "@/components/Interests/Interest";
import styles from "./Interests.module.css";

type Interest = {
    id: number,
    value: string
}

type Props = {
    interests: string[],
    interestsList: Interest[]
}

const Interests = ({ interests, interestsList }: Props) => {
    return (
        <>
            <p className="title">Интересы</p>
            <div className={styles["interests-list"]}>
                {
                    interestsList
                        .filter(interest => interests.includes(interest.id.toString()))
                        .map(interest => (
                            <Interest key={interest.id} interest={interest.value} />
                        ))
                }
            </div>
        </>
    );
}

export default Interests;
