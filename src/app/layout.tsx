import classNames from "classnames";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "neotype",
  description: "A next generation typing app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={classNames(
          inter.className,
          "bg-gray max-w-4xl p-10 mx-auto"
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
