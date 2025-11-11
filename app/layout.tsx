import { Rethink_Sans } from "next/font/google";
import "./globals.css";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink-sans", // define CSS variable
  weight: "400",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={rethinkSans.variable}>{children}</body></html>;
}
