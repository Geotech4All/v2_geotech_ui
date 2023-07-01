import "./globals.css";
import { Inter } from "next/font/google";
import MuiThemeProvider from "./MuiThemeProvider";
import URQLProvider from "./URQLProvider";
import { Analytics } from "@vercel/analytics/react";
import ReducProvider from "./ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Geotech",
  description: "Redefining geology with technology",
  icons: {
    icon: {
      rel: "icon",
      type: "image/svg",
      url: "/icon.svg",
    },
  },
  openGraph: {
    type: "website",
    url: "https://geotech4all.com",
    title: "Geotech",
    description: "Redefining Geology with technology",
    images: [
      {
        url: "/full_logo.svg",
        alt: "Geotech4all",
      },
    ],
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
            <body className={inter.className}>
              {children}
              <Analytics />
            </body>
          </URQLProvider>
        </ReducProvider>
      </MuiThemeProvider>
    </html>
  );
}
