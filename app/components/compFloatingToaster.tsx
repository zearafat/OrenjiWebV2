'use client';

import React, { useState } from 'react';
import Link from "next/link";

type Props = {
    label: string;
    url: string;
}

export default function CompFloatingToaster({label, url} : Props) {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <>
            <Link href={url} target={"_blank"} rel={"noopener noreferrer"}>
                <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 btn-gradient-orenji text-white px-4 py-3 rounded-full shadow-lg transform transition-transform hover:scale-105">
                    <p className="font-medium">
                        {label}
                        <span className="ml-2 inline-block">&gt;&gt;</span>
                    </p>


                        <button
                            onClick={() => setIsVisible(false)}
                            className="ml-2 p-1 hover:bg-orange-600/20 rounded-full transition-colors"
                            aria-label="Close notification"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4"
                            >
                                <path d="M18 6L6 18" />
                                <path d="M6 6l12 12" />
                            </svg>
                        </button>

                </div>
            </Link>
        </>
    );
};
