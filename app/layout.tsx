import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/700.css';
import "@styles/index.scss";
import { Metadata } from "next";
import { Viewport } from 'next'
import Header from "@components/header/header";
import Footer from "@components/footer/footer";
import { EXTENSION_NAME, EXTENSION_URL } from '@lib/constants';
import Banner from '@components/banner/banner';

export const metadata: Metadata = {
  title: `${EXTENSION_NAME} - Browser Extension for YNAB`,
  description: "Speed up your YNAB budgeting. Sprout for YNAB allows you to add a transaction without leaving your current tab.",
  metadataBase: new URL(EXTENSION_URL),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    url: EXTENSION_URL,
    locale: 'en_US',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor:"#006EC7",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Banner />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}