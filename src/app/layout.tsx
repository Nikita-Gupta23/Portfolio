import type { Metadata } from "next";
import "../styles.scss"
import { Bebas_Neue, Manrope } from "next/font/google";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400"
});

const manRope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: "400"
})
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "-Created by Nikita Gupta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${manRope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
