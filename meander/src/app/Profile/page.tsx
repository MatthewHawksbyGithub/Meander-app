"use client"

import React, { useState } from 'react';
import Box from '../components/preferenceButton';
export default function Page() {
    const [selectedBoxes, setSelectedBoxes] = useState<string[]>([]);

  
    const handleBoxClick = (box: string) => {
        if (selectedBoxes.includes(box)) {
            setSelectedBoxes(selectedBoxes.filter((selectedBox) => selectedBox !== box));
        } else {
            setSelectedBoxes([...selectedBoxes, box]);
        }
    };

    return (
        <div>
            <div>
                <Box
                    label="History"
                    selected={selectedBoxes.includes("History")}
                    onClick={() => handleBoxClick("History")}
                />
                <Box
                    label="Architecture"
                    selected={selectedBoxes.includes("Architecture")}
                    onClick={() => handleBoxClick("Architecture")}
                />
                <Box
                    label="Flora"
                    selected={selectedBoxes.includes("Flora")}
                    onClick={() => handleBoxClick("Flora")}
                />
                <Box
                    label="Fauna"
                    selected={selectedBoxes.includes("Fauna")}
                    onClick={() => handleBoxClick("Fauna")}
                />
                <Box
                    label="Art"
                    selected={selectedBoxes.includes("Art")}
                    onClick={() => handleBoxClick("Art")}
                />
            </div>
        </div>
    );
}

