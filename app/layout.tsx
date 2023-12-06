import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './css/globals.css';
import React from "react";

export const metadata: Metadata = {
  title: 'Orenji Studio - Unlimited design, with flat monthly fee',
  description: 'Orenji Studio is a very small design team. ' +
      'We keep our studio intentionally small so we can move faster, and more focused, without the big-agency bloat. ' +
      'Think of us as of your dedicated creative team. We’ll work alongside you or your team to give you the best design results possible.',
  metadataBase: new URL('https://orenji-web-v2.vercel.app'),
  openGraph: {
    title: 'Orenji Studio - Unlimited design, with flat monthly fee',
    description: 'Orenji Studio is a very small design team. ' +
        'We keep our studio intentionally small so we can move faster, and more focused, without the big-agency bloat. ' +
        'Think of us as of your dedicated creative team. We’ll work alongside you or your team to give you the best design results possible.',
    url: 'https://orenji-web-v2.vercel.app',
    siteName: 'Orenji Studio',
    images: [
      {
        url: 'https://orenji-web-v2.vercel.app/opengraph-image.png',
        width: 1200,
        height: 630,
      },
      {
        url: 'https://orenji-web-v2.vercel.app/opengraph-image-1800x1600.png',
        width: 1800,
        height: 1600,
        alt: 'Orenji Studio - Unlimited design, with flat monthly fee',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://orenji.studio',
    title: 'Orenji Studio - Unlimited design, with flat monthly fee',
    description: 'Orenji Studio is a very small design team. ' +
        'We keep our studio intentionally small so we can move faster, and more focused, without the big-agency bloat. ' +
        'Think of us as of your dedicated creative team. We’ll work alongside you or your team to give you the best design results possible.',
    images: [
      {
        url: 'https://orenji-web-v2.vercel.app/twitter-image.png',
        width: 1200,
        height: 630,
      },
      {
        url: 'https://orenji-web-v2.vercel.app/twitter-image-1800x1600.png',
        width: 1800,
        height: 1600,
        alt: 'Orenji Studio - Unlimited design, with flat monthly fee',
      },
    ]
  }
};

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
