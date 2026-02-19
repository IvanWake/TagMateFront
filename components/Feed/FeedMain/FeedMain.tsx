'use client';

import FeedContent from "./FeedContent/FeedContent";

const FeedMain = () => {
    return (
        <>
            <div style={{width: '100%', padding: '14px 30px'}}>
            <img
                src="/icons/tagmate-min.svg"
                alt="Логотип"
                style={{width: 32}}
            />
            </div>
            <FeedContent /> 
        </>
           
    );
}

export default FeedMain;