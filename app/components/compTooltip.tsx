import React from 'react';

interface TooltipProps {
    text: string;
    onClick?: () => void;
    className: string;
}

const CompTooltip: React.FC<TooltipProps> = ({ text, onClick, className }) => {
    return (
        <div
            className={className}
            style={{
                pointerEvents: "auto",
                paddingTop: 12,
                paddingBottom: 12,
                minWidth: "120px",
                minHeight: "50px",
                textAlign: "center"
            }}
            onClick={onClick}
        >
            {text}
        </div>
    );
};

export default CompTooltip;