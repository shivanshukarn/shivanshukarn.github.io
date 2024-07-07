import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import AdminSidebar from "@/components/AdminSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shivanshu Karn's Portfolio",
  description: "I'm Shivanshu Karn, a Full-Stack Developer, and Programmer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " prevent-select"}>
        <Sidebar />
        <AdminSidebar />
        <main className="p-4 sm:ml-64 h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
