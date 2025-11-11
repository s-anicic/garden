"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PrayerCard from "../components/PrayerCard";
import { usePrayers } from "../context/PrayerContext";

export default function PrayerGardenPage() {
  const { prayers, updatePrayer, deletePrayer } = usePrayers();
  const answeredPrayers = prayers.filter((p) => p.status === "answered");

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-green-50 flex flex-col items-center py-10 px-4">
      <Header />

      <h1 className="text-3xl font-bold mb-2 text-center">Prayer Garden</h1>

      <p className="text-gray-700 mb-6 text-center max-w-md">
        Here are a collection of flowers in your garden — your answered prayers. 
        You can toggle each flower to mark it back as ongoing if needed.
      </p>

      {answeredPrayers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
          {answeredPrayers.map((p) => (
            <PrayerCard
              key={p.id}
              prayer={p}
              onDelete={deletePrayer}
              onUpdate={updatePrayer}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-4">No answered prayers yet. 🌱</p>
      )}

      <Footer prayers={prayers} />
    </main>
  );
}
