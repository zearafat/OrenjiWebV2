import React from 'react';

interface TooltipProps {
    text: string;
    onClick?: () => void;
}

const CompTooltip: React.FC<TooltipProps> = ({ text, onClick }) => {
    return (
        <div
            className="bg-white/90 backdrop-blur-sm text-gray-900 text-sm px-4 py-2 rounded-lg shadow-lg
                 transform -translate-y-2 transition-all duration-200 hover:bg-white
                 cursor-pointer select-none"
            style={{
                pointerEvents: "auto",
                minWidth: "100px",
                textAlign: "center"
            }}
            onClick={onClick}
        >
            {text}
        </div>
    );
};

export default CompTooltip;