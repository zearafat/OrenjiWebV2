import React from 'react';

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
        // Container with a solid white background
        <div
            onClick={handleContentClick}
            style={{
                minWidth: '400px',  // Ensure minimum width
                maxWidth: '600px',  // Limit maximum width
                transform: 'translateY(-50%)',  // Center vertically
            }}
            className="bg-white rounded-lg shadow-2xl overflow-hidden"
        >
            {/* Header */}
            <div className="relative p-6 bg-gray-50 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                    <span className="text-gray-600">&times;</span>
                </button>
            </div>

            {/* Content */}
            <div className="p-6 bg-white">
                {children}
            </div>

            {/* Footer */}
            <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-end space-x-3">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    onClick={() => alert("Action clicked!")}
                    type="button"
                >
                    Action
                </button>
                <button
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                    onClick={onClose}
                    type="button"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default CompModal;