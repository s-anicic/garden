# 🌸 Garden — An Interactive Prayer Application

**Garden** is a serene and interactive web application where users can add, track, and manage their prayers. Inspired by gardens and the serenity of faith, prayers are represented as flowers, with answered prayers “blooming” in your digital garden. Users can toggle prayers between ongoing and answered, reflecting spiritual progress in a visually relaxing interface.

---

## 🛠️ Features

* **Add New Prayers** – Plant a new prayer in your garden with a title, category, and content.
* **Track Status** – Mark prayers as ongoing or answered. Answered prayers appear in your Prayer Garden.
* **Interactive Prayer Garden** – View all answered prayers as flowers. Toggle them back to ongoing if needed.
* **Responsive Design** – Works beautifully on both mobile and desktop screens.
* **Clean and Intuitive UI** – Minimalist design inspired by natural aesthetics and calming color palettes.
* **Persistent State** – Built to handle dynamic prayer lists (can be extended with backend storage).

---

## 🛠️ Tech Stack
⚡ Framework: Next.js  
💻 Frontend: React, TypeScript  
🎨 Styling: Tailwind CSS, Google Fonts  
🧩 Version Control: GitHub  

---

## 📂 Project Structure

```
app/
├─ components/
│  ├─ Header.tsx
│  ├─ Footer.tsx
│  ├─ PrayerForm.tsx
│  ├─ PrayerCard.tsx
│  ├─ PrayerGarden.tsx
├─ context/
│  └─ PrayerContext.tsx
├─ faq/
│  └─ page.tsx
├─ prayer-garden/
│  └─ page.tsx
└─ page.tsx
```

* `page.tsx` – Main homepage with a prayer form, Add Prayer functionality, and a list of ongoing prayers.  
* `prayer-garden/page.tsx` – Displays answered prayers visually as a “garden” where each prayer can be toggled back to ongoing.  
* `faq/page.tsx` – Frequently Asked Questions page for guidance and app info.  
* `components/` – Reusable UI components including Header, Footer, PrayerCard, PrayerForm, and PrayerGarden.  
* `context/PrayerContext.tsx` – Manages global state for prayers, providing functions to add, update, and delete prayers throughout the app.

---

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/s-anicic/garden
cd garden
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open the app**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📌 Future Improvements

* Implement search and filter by category.
* Add authentication to save personal gardens.
* Persist prayers to a database.
* Animate flower growth for answered prayers.


---

## 📜 License

© 2025 Sara Anicic. All rights reserved.
You are free to download and run this game for personal use.
Do not copy, modify, or redistribute the code without permission.
