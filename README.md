# 🛍️ Retail Voice App

A simple **speech-to-text powered product lookup app** for retail.  
Users can speak queries (e.g., *"Show me laptops under 50k"*) and the app fetches relevant product results in real time.

---

## 🚀 Features
- 🎙️ Voice-based search using **Web Speech API**  
- 🔍 Fetches product data from a **mock API**  
- 📱 Responsive UI built with **React + TailwindCSS**  
- ⚡ Fast backend powered by **Node.js + Express**  
- 📦 Easy to extend with any database or real product API  

---

## 📂 Project Structure
retail-voice-app/
│── backend/ # Node.js + Express backend
│ ├── server.js # Entry point
│ ├── routes/ # API routes
│ └── package.json
│
│── frontend/ # React frontend
│ ├── src/
│ │ ├── App.js # Main React component
│ │ ├── components/ # UI components
│ │ └── styles/ # Tailwind styles
│ └── package.json
│
│── README.md
└── .gitignore

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com/ADI14M/retail-voice-app.git
cd retail-voice-app

cd backend
npm install
npm start

cd frontend
npm install
npm start
```
🎤 Usage

Open the app in your browser.

Click the 🎙️ mic button and speak your product query.

The app will transcribe your voice and fetch matching results.


👨‍💻 Author
Aditya M
