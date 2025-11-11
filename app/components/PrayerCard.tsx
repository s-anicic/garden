// app/components/PrayerCard.tsx
import React, { useState } from "react";
import { Prayer } from "../page";
import { Edit, Trash2 } from "lucide-react";

interface PrayerCardProps {
  prayer: Prayer;
  onDelete: (id: number) => void;
  onUpdate: (updatedPrayer: Prayer) => void;
}

export default function PrayerCard({ prayer, onDelete, onUpdate }: PrayerCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editPrayer, setEditPrayer] = useState({ ...prayer });

  const handleSave = () => {
    onUpdate(editPrayer);
    setIsEditing(false);
  };

  const toggleAnswered = () => {
    onUpdate({ ...prayer, status: prayer.status === "answered" ? "ongoing" : "answered" });
  };

  const ongoingColor = "#22c55e"; // darker green
  const answeredColor = "#ec4899"; // pink

  return (
    <div
      className={`relative p-4 bg-white shadow rounded-2xl border-l-4 ${
        prayer.status === "answered" ? "border-pink-500" : "border-green-500"
      }`}
    >
      {/* Top-right icons */}
      {!isEditing && (
        <div className="absolute top-2 right-2 flex gap-2">
          <Edit
            className="w-4 h-4 cursor-pointer text-black hover:text-gray-600"
            onClick={() => setIsEditing(true)}
          />
          <Trash2
            className="w-4 h-4 cursor-pointer text-black hover:text-gray-600"
            onClick={() => onDelete(prayer.id)}
          />
        </div>
      )}

      {isEditing ? (
        <div className="flex flex-col gap-3">
          <input
            type="text"
            className="border p-2 rounded"
            value={editPrayer.title}
            onChange={(e) => setEditPrayer({ ...editPrayer, title: e.target.value })}
          />
          <input
            type="text"
            className="border p-2 rounded"
            value={editPrayer.category}
            onChange={(e) => setEditPrayer({ ...editPrayer, category: e.target.value })}
          />
          <textarea
            className="border p-2 rounded"
            value={editPrayer.content}
            onChange={(e) => setEditPrayer({ ...editPrayer, content: e.target.value })}
          />
          <div className="flex gap-4 mt-3">
            <button
              onClick={handleSave}
              className="flex-1 px-4 py-2 bg-pink-600 text-white rounded-xl font-semibold shadow hover:shadow-lg hover:bg-pink-700 transition"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="flex-1 px-4 py-2 bg-gray-300 text-gray-800 rounded-xl font-semibold shadow hover:shadow-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <p className="text-sm uppercase font-semibold">{prayer.category}</p>
          <p className="mt-1 text-gray-700">{prayer.content}</p>
          <p
            className="text-xs mt-2 font-semibold"
            style={{ color: prayer.status === "answered" ? answeredColor : ongoingColor }}
          >
            {prayer.status === "answered" ? "🌸 Answered" : "🌱 Ongoing"}
          </p>

          {/* Toggle Answered / Ongoing */}
          <div className="flex gap-2 mt-2 text-sm">
            <span
              onClick={toggleAnswered}
              style={{ color: prayer.status === "answered" ? answeredColor : ongoingColor }}
              className="cursor-pointer font-bold hover:underline"
            >
              [{prayer.status === "answered" ? "mark ongoing" : "mark answered"}]
            </span>
          </div>
        </>
      )}
    </div>
  );
}
