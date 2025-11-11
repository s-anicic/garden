// app/components/PrayerGarden.tsx
import React, { useState } from "react";
import { Prayer } from "../page";

interface PrayerGardenProps {
  prayers: Prayer[];
}

export default function PrayerGarden({ prayers }: PrayerGardenProps) {
  const categories = Array.from(new Set(prayers.map((p) => p.category)));
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto mt-10">
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {categories.map((cat) => (
          <div
            key={cat}
            className={`px-4 py-2 rounded-full cursor-pointer ${
              activeCategory === cat ? "bg-pink-200" : "bg-pink-100 hover:bg-pink-300"
            }`}
            onMouseEnter={() => setHoveredCategory(cat)}
            onMouseLeave={() => setHoveredCategory(null)}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* Hover preview */}
      {hoveredCategory && (
        <div className="mb-6 p-4 bg-white shadow rounded">
          <h3 className="font-semibold">{hoveredCategory} Prayers:</h3>
          <ul className="mt-2 space-y-1 text-sm">
            {prayers
              .filter((p) => p.category === hoveredCategory)
              .map((p) => (
                <li key={p.id}>
                  {p.title} — {p.status === "answered" ? "🌸 Answered" : "⏳ Ongoing"}
                </li>
              ))}
          </ul>
        </div>
      )}

      {/* Active category view */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {prayers
          .filter((p) => !activeCategory || p.category === activeCategory)
          .map((p) => (
            <div
              key={p.id}
              className="p-4 bg-white rounded shadow flex flex-col justify-between"
            >
              <h4 className="font-semibold">{p.title}</h4>
              <span className="text-xs text-gray-400">{p.status}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
