"use client";
import NavBar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="relative w-full flex items-center justify-center">
          <NavBar />
        </div>
        {children}
      </body>
    </html>
  );
}
