// app/components/Footer.tsx
import React from "react";

interface FooterProps {
  prayers: { status: "ongoing" | "answered" }[];
}

export default function Footer({ prayers }: FooterProps) {
  const answered = prayers.filter((p) => p.status === "answered").length;
  const ongoing = prayers.filter((p) => p.status === "ongoing").length;

  return (
    <>
      {/* Garden summary */}
      <footer className="mt-12 mb-12 text-sm text-gray-500 text-center">
        🌿 You have {answered} answered prayers and {ongoing} ongoing — your garden is growing beautifully.
      </footer>

      {/* Fixed copyright at bottom center */}
      <div className="fixed bottom-0 left-0 w-full text-center text-xs text-gray-400 py-2 pointer-events-none">
        &copy; {new Date().getFullYear()} Sara Anicic. All rights reserved.
      </div>
    </>
  );
}
