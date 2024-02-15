import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './css/globals.css';
import React from "react";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Orenji Studio - Unlimited design, with flat monthly fee',
  description: 'Orenji Studio is a very small design team. ' +
      'We keep our studio intentionally small so we can move faster, and more focused, without the big-agency bloat. ' +
      'Think of us as of your dedicated creative team. We’ll work alongside you or your team to give you the best design results possible.',
  metadataBase: new URL('https://orenji.studio'),
  openGraph: {
    title: 'Orenji Studio - Unlimited design, with flat monthly fee',
    description: 'Orenji Studio is a very small design team. ' +
        'We keep our studio intentionally small so we can move faster, and more focused, without the big-agency bloat. ' +
        'Think of us as of your dedicated creative team. We’ll work alongside you or your team to give you the best design results possible.',
    url: 'https://orenji.studio',
    siteName: 'Orenji Studio',
    images: [
      {
        url: 'https://orenji.studio/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Orenji Studio - Unlimited design, with flat monthly fee',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@helloalzea',
    title: 'Orenji Studio - Unlimited design, with flat monthly fee',
    description: 'Orenji Studio is a very small design team. ' +
        'We keep our studio intentionally small so we can move faster, and more focused, without the big-agency bloat. ' +
        'Think of us as of your dedicated creative team. We’ll work alongside you or your team to give you the best design results possible.',
    images: [
      {
        url: 'https://orenji.studio/twitter-image.png',
        width: 1200,
        height: 630,
        alt: 'Orenji Studio - Unlimited design, with flat monthly fee',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" style={{scrollBehavior: 'smooth'}} className={`${GeistSans.variable}`}>
        <body>{children}</body>
        <Analytics />
      </html>
  )
}
