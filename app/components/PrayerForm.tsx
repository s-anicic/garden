// app/components/PrayerForm.tsx
import React from "react";
import { X } from "lucide-react";

interface PrayerFormProps {
  newPrayer: { title: string; category: string; content: string };
  setNewPrayer: React.Dispatch<
    React.SetStateAction<{ title: string; category: string; content: string }>
  >;
  handleAddPrayer: () => void;
  handleCancel: () => void;
}

export default function PrayerForm({ newPrayer, setNewPrayer, handleAddPrayer, handleCancel }: PrayerFormProps) {
  const categories = [
    "Health",
    "Family",
    "Friends",
    "Love",
    "Support",
    "Career",
    "Financial",
    "Wellbeing",
  ];

  const canSave = newPrayer.title && newPrayer.category && newPrayer.content;

  return (
    <div className="mt-6 w-full max-w-2xl p-8 pt-10 bg-white shadow rounded-2xl flex flex-col gap-4 relative">
      {/* Top-right cancel icon */}
      <X
        className="absolute top-3 right-3 w-5 h-5 cursor-pointer text-black hover:text-gray-600"
        onClick={handleCancel}
      />

      <input
        type="text"
        placeholder="Prayer Title"
        className="p-3 border rounded"
        value={newPrayer.title}
        onChange={(e) => setNewPrayer({ ...newPrayer, title: e.target.value })}
      />

      {/* Category Dropdown */}
      <select
        className="p-3 border rounded"
        value={newPrayer.category}
        onChange={(e) => setNewPrayer({ ...newPrayer, category: e.target.value })}
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <textarea
        placeholder="Write your prayer here..."
        className="p-3 border rounded"
        value={newPrayer.content}
        onChange={(e) => setNewPrayer({ ...newPrayer, content: e.target.value })}
      />

      {/* Bottom-center save text */}
      {canSave && (
        <div className="mt-4 w-full flex justify-center">
          <span
            onClick={handleAddPrayer}
            className="cursor-pointer font-bold text-black hover:underline px-4 py-1"
          >
            [save]
          </span>
        </div>
      )}
    </div>
  );
}
