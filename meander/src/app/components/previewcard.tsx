"use client"
import React, { useState } from 'react';
import Map from './map';

const PreviewCard: React.FC<{ initialText: string; moreText: string }> = ({
    initialText,
    moreText,
}) => {
    const [showMore, setShowMore] = useState(false);
    const handleClick = () => {
        setShowMore(!showMore);
    };
    return (
        <div className="border border-gray-300 rounded-lg p-4 bg-gray-100 text-center text-black">
            <div onClick={handleClick} className="cursor-pointer">
                {initialText}
            </div>
            {showMore && <div>{moreText}
            <Map/></div>}
        </div>
    );
};
export default PreviewCard;