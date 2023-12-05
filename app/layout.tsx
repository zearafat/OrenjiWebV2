import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './css/globals.css';
import React from "react";

export const metadata: Metadata = {
  title: 'Orenji Studio - Unlimited design, with flat monthly fee',
  description: 'We are a very small design team, no more than 10 people. But we have a big ambitions. ' +
      'We keep our studio intentionally small so we can move faster, and more focused, without the big-agency bloat. ' +
      'Think of us as of your dedicated creative team. We’ll work alongside you or your team to give you the best design results possible.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}} className={`${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
