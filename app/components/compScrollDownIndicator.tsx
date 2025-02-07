import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const CompScrollIndicator = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY <= 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToNextSection = () => {
        const viewportHeight = window.innerHeight;
        window.scrollTo({
            top: viewportHeight,
            behavior: 'smooth'
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToNextSection}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce transition-opacity duration-300"
        >
            <ChevronDown className="w-7 h-7 text-slate-300" strokeWidth={2.5} />
            <ChevronDown className="w-7 h-7 text-slate-400 -mt-4" strokeWidth={2.5} />
        </button>
    );
};

export default CompScrollIndicator;
