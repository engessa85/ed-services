import type { Metadata } from "next";
import "./globals.css";
import { Sora } from "next/font/google";


const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <div className="w-screen h-screen bg-color2">
          {children}
        </div>
      </body>
    </html>
  );
}
