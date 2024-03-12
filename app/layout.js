import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Days_One } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const daysOne = Days_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--fontDaysOne",
});

export const metadata = {
  title: "Sadiq | 404 Pages",
  description: "Error pages curated by Sadiq",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${daysOne.variable}`}>
        {children}
      </body>
    </html>
  );
}
