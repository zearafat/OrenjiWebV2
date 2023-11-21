import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans';
import './css/globals.css'
import React from "react";

export const metadata: Metadata = {
  title: 'Orenji Studio - Unlimited design, with flat monthly fee',
  description: 'Unlimited design, with flat monthly fee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
