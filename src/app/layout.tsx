import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import MuiThemeProvider from "./MuiThemeProvider";
import URQLProvider from "./URQLProvider";
import { Analytics } from "@vercel/analytics/react";
import ReducProvider from "./ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Geotech",
  description: "Redefining geology with technology",
  metadataBase: new URL("https://geotech4all.com"),
  icons: {
    icon: {
      rel: "icon",
      type: "image/svg",
      url: "/icon.svg",
    },
  },
  openGraph: {
    type: "website",
    title: "Geotech",
    siteName: "Geotech4all",
    url: "https://geotech4all.com",
    description: "Redefining Geology with technology",
    images: [
      {
        url: "/full_logo.svg",
        alt: "Geotech4all",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    images: "/full_logo.svg",
    creator: "@creator",
    site: "@site",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MuiThemeProvider>
        <ReducProvider>
          <URQLProvider>
            <body
              className={`max-w-[100vw] overflow-x-hidden ${inter.className}`}
            >
              {children}
              <Analytics />
            </body>
          </URQLProvider>
        </ReducProvider>
      </MuiThemeProvider>
    </html>
  );
}
