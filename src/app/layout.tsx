import type { Metadata } from "next";
import "./globals.css";
import { Sora } from "next/font/google";


const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Engineering | Developing",
  description: "Engineering and developing solutions for the future",
  openGraph: {
    title: "Engineering | Developing",
    description: "Engineering and developing solutions for the future",
    url: "https://ed-services.vercel.app",
    images: [
      {
        url: "/me.png",  // Image path from the public folder
        width: 1200,  // Recommended width for Open Graph images
        height: 630,  // Recommended height for Open Graph images
        alt: "Engineering and Developing Solutions",
      }
    ],
    type: "website"
  },
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
