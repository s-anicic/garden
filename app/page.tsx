"use client";

import React, { useState } from "react";
import Header from "./components/Header";
import PrayerForm from "./components/PrayerForm";
import PrayerCard from "./components/PrayerCard";
import Footer from "./components/Footer";
import { PlusCircle } from "lucide-react";
import { usePrayers } from "./context/PrayerContext";

// ✅ Export Prayer type at top-level
export interface Prayer {
  id: number;
  title: string;
  category: string;
  content: string;
  status: "ongoing" | "answered";
}

export default function HomePage() {
  const { prayers, addPrayer, updatePrayer, deletePrayer } = usePrayers();
  const [showForm, setShowForm] = useState(false);
  const [newPrayer, setNewPrayer] = useState({ title: "", category: "", content: "" });

  const ongoingPrayers = prayers.filter((p) => p.status === "ongoing");

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-green-50 text-gray-800 flex flex-col items-center py-10 px-4">
      <Header />

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
        {/* Mini header and instruction inside the card */}
        <div className="text-center">
<h1 className="text-3xl font-bold mb-2">
  Welcome to Garden,<br />
  an interactive prayer app.<br />
 {/* Placeholder for cross here */}
</h1>
          <p className="text-gray-700 mb-6 max-w-md mx-auto">
            Write down a prayer to plant it in your garden. You can track it as ongoing until it’s answered.
          </p>
        </div>

        {/* Bible verse */}
        <section className="text-center">
          <p className="text-lg text-gray-600">
            “Cast all your anxiety on Him because He cares for you.”
          </p>
          <p className="text-sm text-gray-500 mt-1">— 1 Peter 5:7</p>
        </section>

        {/* Add prayer button */}
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition self-center"
          >
            <PlusCircle className="w-5 h-5" />
            Add New Prayer
          </button>
        )}

        {/* Prayer form */}
        {showForm && (
          <PrayerForm
            newPrayer={newPrayer}
            setNewPrayer={setNewPrayer}
            handleAddPrayer={() => {
              addPrayer(newPrayer);
              setNewPrayer({ title: "", category: "", content: "" });
              setShowForm(false);
            }}
            handleCancel={() => {
              setShowForm(false);
              setNewPrayer({ title: "", category: "", content: "" });
            }}
          />
        )}

        {/* Ongoing prayers */}
        {!showForm && ongoingPrayers.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-black text-lg text-left mb-3">Ongoing Prayers</h2>

            {ongoingPrayers.map((p) => (
              <PrayerCard
                key={p.id}
                prayer={p}
                onDelete={deletePrayer}
                onUpdate={updatePrayer}
              />
            ))}
          </section>
        )}
      </div>

      <Footer prayers={prayers} />
    </main>
  );
}
