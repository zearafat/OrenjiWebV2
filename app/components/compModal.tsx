import React from 'react';
import Image from "next/image";
import CompButtonGame from "@/app/components/compButtonGame";

import godot from '@/public/assets/illustrations/godot.svg';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const CompModal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    // Stop event propagation to prevent interactions with the 3D scene
    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div
            onClick={handleContentClick}
            style={{
                minWidth: '600px', // Ensure minimum width
                maxWidth: '800px', // Limit maximum width
                transform: 'translateY(-25%)'
            }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden relative mx-auto my-8 max-h-[90vh]"
        >
            {/* Header */}
            <div className="relative pt-6 pb-4 px-6">
                <h2 className="bg-gradient-to-r from-red-500 via-orange-500 font-extrabold to-pink-500 inline-block
            text-transparent bg-clip-text text-4xl">
                    {title}
                </h2>
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full
            bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                    <span className="text-gray-600">&times;</span>
                </button>
            </div>

            {/* Content */}
            <div className="px-6 pt-4 pb-12 bg-white flex-grow overflow-y-auto max-h-[calc(90vh-100px)]">
                <p className="text-lg">{children}</p>
            </div>

            {/* Footer */}
            <div className="p-0 flex flex-row justify-between items-end space-x-6">
                <Image
                    src={godot}
                    alt="Orenji Studio"
                    sizes="100vw"
                    style={{width: '50%', height: 'auto'}}
                    quality={100}
                    className="rounded-lg"
                />

                <div className="p-6">
                    <CompButtonGame text="Understand" onClick={onClose}/>
                </div>
            </div>
        </div>
    );
};

export default CompModal;