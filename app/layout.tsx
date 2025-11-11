import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import { PrayerProvider } from "./context/PrayerContext"; // make sure this path is correct

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink-sans",
  weight: "400",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={rethinkSans.variable}>
        <PrayerProvider>
          {children}
        </PrayerProvider>
      </body>
    </html>
  );
}
