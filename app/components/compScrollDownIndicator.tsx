import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const CompScrollIndicator = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Hide indicator if user has scrolled more than 100px
            if (window.scrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce transition-opacity duration-300">
            <ChevronDown
                className="w-7 h-7 text-slate-300"
                strokeWidth={2.5}
            />
            <ChevronDown
                className="w-7 h-7 text-slate-400 -mt-4"
                strokeWidth={2.5}
            />
        </div>
    );
};

export default CompScrollIndicator;