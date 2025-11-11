"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Prayer } from "../page";

interface PrayerContextType {
  prayers: Prayer[];
  addPrayer: (prayer: Omit<Prayer, "id" | "status">) => void;
  updatePrayer: (updated: Prayer) => void;
  deletePrayer: (id: number) => void;
}

const PrayerContext = createContext<PrayerContextType | undefined>(undefined);

export const PrayerProvider = ({ children }: { children: ReactNode }) => {
  const [prayers, setPrayers] = useState<Prayer[]>([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("prayers");
    if (stored) setPrayers(JSON.parse(stored));
  }, []);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("prayers", JSON.stringify(prayers));
  }, [prayers]);

  const addPrayer = (prayer: Omit<Prayer, "id" | "status">) => {
    const newPrayer: Prayer = {
      ...prayer,
      id: prayers.length ? Math.max(...prayers.map((p) => p.id)) + 1 : 1,
      status: "ongoing",
    };
    setPrayers([newPrayer, ...prayers]);
  };

  const updatePrayer = (updated: Prayer) => {
    setPrayers((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  };

  const deletePrayer = (id: number) => {
    setPrayers((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <PrayerContext.Provider value={{ prayers, addPrayer, updatePrayer, deletePrayer }}>
      {children}
    </PrayerContext.Provider>
  );
};

export const usePrayers = () => {
  const context = useContext(PrayerContext);
  if (!context) throw new Error("usePrayers must be used within a PrayerProvider");
  return context;
};
