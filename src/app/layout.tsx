import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import MuiThemeProvider from "./MuiThemeProvider";
import URQLProvider from "./URQLProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Geotech",
  description: "Redefining geology with technology",
  icons: ["/icon.svg", "icon_black.svg"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <MuiThemeProvider>
        <URQLProvider>
          <body className={inter.className}>{children}</body>
        </URQLProvider>
      </MuiThemeProvider>
    </html>
  );
}
