"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PrayerCard from "../components/PrayerCard";
import { Prayer } from "../page";

export default function PrayerGardenPage() {
  const [prayers, setPrayers] = useState<Prayer[]>([]);

  // Load prayers from localStorage
  useEffect(() => {
    const storedPrayers = localStorage.getItem("prayers");
    if (storedPrayers) {
      setPrayers(JSON.parse(storedPrayers));
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-green-50 flex flex-col items-center py-10 px-4">
      <Header />

      <h1 className="text-3xl font-bold mb-6">🌸 My Prayer Garden</h1>

      {/* Prayer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        {prayers.map((p) => (
          <PrayerCard
            key={p.id}
            prayer={p}
            onDelete={(id) =>
              setPrayers(prayers.filter((prayer) => prayer.id !== id))
            }
            onUpdate={(updatedPrayer) =>
              setPrayers(
                prayers.map((prayer) =>
                  prayer.id === updatedPrayer.id ? updatedPrayer : prayer
                )
              )
            }
          />
        ))}
      </div>

      <Footer prayers={prayers} />
    </main>
  );
}
