"use client";

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import PrayerForm from "./components/PrayerForm";
import PrayerCard from "./components/PrayerCard";
import Footer from "./components/Footer";
import { PlusCircle } from "lucide-react";

export interface Prayer {
  id: number;
  title: string;
  category: string;
  content: string;
  status: "ongoing" | "answered";
}

export default function HomePage() {
  const [prayers, setPrayers] = useState<Prayer[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newPrayer, setNewPrayer] = useState({ title: "", category: "", content: "" });

  // Load prayers from localStorage on initial render
  useEffect(() => {
    const storedPrayers = localStorage.getItem("prayers");
    if (storedPrayers) {
      setPrayers(JSON.parse(storedPrayers));
    }
  }, []);

  // Save prayers to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("prayers", JSON.stringify(prayers));
  }, [prayers]);

  // Add a new prayer
  const handleAddPrayer = () => {
    if (!newPrayer.title || !newPrayer.category || !newPrayer.content) return;

    const prayerToAdd: Prayer = { id: prayers.length + 1, ...newPrayer, status: "ongoing" };
    setPrayers([prayerToAdd, ...prayers]);
    setNewPrayer({ title: "", category: "", content: "" });
    setShowForm(false);
  };

  // Delete a prayer by id
  const handleDeletePrayer = (id: number) => {
    setPrayers(prayers.filter((prayer) => prayer.id !== id));
  };

  // Update a prayer (for editing or marking as answered)
  const handleUpdatePrayer = (updatedPrayer: Prayer) => {
    setPrayers(prayers.map((prayer) => (prayer.id === updatedPrayer.id ? updatedPrayer : prayer)));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-green-50 text-gray-800 flex flex-col items-center py-10 px-4">
      <Header />

      {/* Daily Verse */}
      <section className="text-center mb-10">
        <p className="text-lg text-gray-600">
          “Cast all your anxiety on Him because He cares for you.”
        </p>
        <p className="text-sm text-gray-500 mt-1">— 1 Peter 5:7</p>
      </section>

      {/* Add Prayer Button */}
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition"
        >
          <PlusCircle className="w-5 h-5" />
          Add New Prayer
        </button>
      )}

      {/* Prayer Form */}
      {showForm && (
        <PrayerForm
          newPrayer={newPrayer}
          setNewPrayer={setNewPrayer}
          handleAddPrayer={handleAddPrayer}
          handleCancel={() => {
            setShowForm(false);
            setNewPrayer({ title: "", category: "", content: "" });
          }}
        />
      )}

      {/* Prayer List */}
      <section className="mt-10 w-full max-w-2xl space-y-4">
        {prayers.map((p) => (
          <PrayerCard
            key={p.id}
            prayer={p}
            onDelete={handleDeletePrayer}
            onUpdate={handleUpdatePrayer}
          />
        ))}
      </section>

      {/* Footer */}
      <Footer prayers={prayers} />
    </main>
  );
}
