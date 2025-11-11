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

  return (
    <div
      className={`relative p-4 bg-white shadow rounded-2xl border-l-4 ${
        prayer.status === "answered" ? "border-green-400" : "border-pink-400"
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
        <div className="flex flex-col gap-2">
          <input
            type="text"
            className="border p-1 rounded"
            value={editPrayer.title}
            onChange={(e) => setEditPrayer({ ...editPrayer, title: e.target.value })}
          />
          <input
            type="text"
            className="border p-1 rounded"
            value={editPrayer.category}
            onChange={(e) => setEditPrayer({ ...editPrayer, category: e.target.value })}
          />
          <textarea
            className="border p-1 rounded"
            value={editPrayer.content}
            onChange={(e) => setEditPrayer({ ...editPrayer, content: e.target.value })}
          />
          <div className="flex gap-2 mt-2">
            <span
              onClick={handleSave}
              className="cursor-pointer font-bold text-green-600 hover:underline"
            >
              [save]
            </span>
            <span
              onClick={() => setIsEditing(false)}
              className="cursor-pointer font-bold text-gray-600 hover:underline"
            >
              [cancel]
            </span>
          </div>
        </div>
      ) : (
        <>
          <p className="text-sm uppercase font-semibold">{prayer.category}</p>
          <p className="mt-1 text-gray-700">{prayer.content}</p>
          <p className="text-xs text-gray-400 mt-2">
            {prayer.status === "answered" ? "🌸 Answered" : "🌱 Ongoing"}
          </p>

          <div className="flex gap-2 mt-2 text-sm">
            <span
              onClick={toggleAnswered}
              className={`cursor-pointer font-bold ${
                prayer.status === "answered"
                  ? "text-purple-500 hover:underline"
                  : "text-green-500 hover:underline"
              }`}
            >
              [{prayer.status === "answered" ? "mark ongoing" : "mark answered"}]
            </span>
          </div>
        </>
      )}
    </div>
  );
}
