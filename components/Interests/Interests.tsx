'use client';

import Interest from "@/components/Interests/Interest";

const Interests = () => {
    return (
        <>
            <p className="title">Интересы</p>
            <div className="interests-list">
               <Interest />
            </div>
        </>
    );
}

export default Interests;