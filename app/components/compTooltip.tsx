import React from 'react';

interface TooltipProps {
    text: string;
    onClick?: () => void;
}

const CompTooltip: React.FC<TooltipProps> = ({ text, onClick }) => {
    return (
        <div
            className="bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold py-2 px-4 rounded-full
                 border-2 border-white drop-shadow-2xl cursor-pointer select-none"
            style={{
                pointerEvents: "auto",
                minWidth: "120px",
                textAlign: "center"
            }}
            onClick={onClick}
        >
            {text}
        </div>
    );
};

export default CompTooltip;