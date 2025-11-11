# 🌸 Garden — An Interactive Prayer Application

**Garden** is a serene and interactive web application where users can add, track, and manage their prayers. Inspired by gardens and the serenity of faith, prayers are represented as flowers, with answered prayers “blooming” in your digital garden. Users can toggle prayers between ongoing and answered, reflecting spiritual progress in a visually relaxing interface.

---

## 📸 Preview

<img src="https://github.com/user-attachments/assets/a8a02055-bbc6-460e-bad7-d7302be801d8" alt="Home Page"/>
<p align="center"><em>The home page</em></p>

<img src="https://github.com/user-attachments/assets/4700b251-a388-435b-abfe-7d41d014531a" alt="The Prayer Garden"/>
<p align="center"><em>The prayer garden</em></p>

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
├── components/       # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── PrayerForm.tsx
│   ├── PrayerCard.tsx
│   └── PrayerGarden.tsx
├── context/          # Global state management
│   └── PrayerContext.tsx
├── faq/              # FAQ page
│   └── page.tsx
├── prayer-garden/    # Page displaying answered prayers as a garden
│   └── page.tsx
└── page.tsx          # Main homepage with prayer form and ongoing prayers
```

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

© 2025 Sara Anicic. All rights reserved. <br>
You are free to download and run this game for personal use. <br>
Do not copy, modify, or redistribute the code without permission.
