import React from 'react';

type PropsButton = {
    text: string;
    onClick?: () => void;
}

const CompButtonGame = ({text, onClick} : PropsButton) => {
    return (
        <div>
            <button
                className="bg-amber-300 hover:bg-amber-200 text-amber-900 font-bold px-8 py-3 rounded-xl
                shadow-[0px_5px_0px_0px_#e39f00] transform-gpu hover:shadow-[0px_2px_0px_0px_#e39f00] hover:translate-y-0
                transition-shadow duration-300 cursor-pointer uppercase tracking-wide" onClick={onClick}>
                {text}
            </button>
        </div>
    );
};

export default CompButtonGame;