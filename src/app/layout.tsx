import type { Metadata } from "next";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Nunito, Quicksand, Lato } from 'next/font/google';

// Configurar las fuentes
const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: "ArchiSoft",
  description: "Best solution to software",
  icons: {
    icon: '/isotipo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${quicksand.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
