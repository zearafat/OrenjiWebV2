'use client';

import React, { useState } from 'react';
import Link from "next/link";

type Props = {
    label: string;
    url: string;
}

export default function CompFloatingToaster({label, url} : Props) {
    return (
        <>
            <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 inset-x-0 z-50 flex justify-center w-full px-4 md:inset-x-auto md:right-4 md:w-auto md:px-0">
                <div className="flex sm:items-center gap-2 btn-gradient-orenji text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition max-w-[90%] md:max-w-none sm:whitespace-nowrap leading-none text-center">
                    <span className="font-medium">{label}</span>
                </div>
            </Link>
        </>
    );
};
