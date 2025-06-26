
# 🏠 Roommate Finder Website

🔗 **Live Site:** [https://roommate-finder-e3166.web.app](https://roommate-finder-e3166.web.app)

---

## 📑 Project Overview

**Roommate Finder** is a modern, user-friendly web application built with **React.js**, designed to help users effortlessly find compatible roommates based on their preferences and needs. This platform enables users to create profiles, post listings, browse available rooms, and connect with potential roommates securely and conveniently.

---

## ✨ Features

- 🔐 **User Authentication:**  
  Secure login with **Email/Password** and **Google Sign-In** using **Firebase Authentication**.

- 🏠 **Add Roommate Listings:**  
  Users can post detailed roommate listings with rent, location, room type, and other preferences.

- 🔍 **Browse Listings:**  
  Explore all roommate listings posted by users with filtering options.

- 📋 **My Listings Management:**  
  Users can **view**, **edit**, and **delete** their own roommate posts.

- ❤️ **Like & Contact Reveal:**  
  Like a listing to increment the like count and unlock the contact details of the owner.

- 🔒 **Protected Routes:**  
  Certain pages like **Add Listing** and **My Listings** are accessible only after login.

- 📱 **Responsive Design:**  
  Seamlessly works on **mobile**, **tablet**, and **desktop** devices.

- 🌗 **Dark/Light Mode Toggle:**  
  Instantly switch between dark and light themes for better user experience.

- 🎨 **Animated & Interactive UI:**  
  Smooth animations using **React Awesome Reveal**, **React Simple Typewriter**, and **React Tooltip** for an engaging experience.

---

## 🛠️ Technologies Used

- **Frontend:** React.js, React Router DOM, Firebase Authentication
- **State Management:** React Context API, React Hooks
- **Styling:** Tailwind CSS, CSS, Styled Components (optional)
- **Authentication:** Firebase Auth
- **Notifications:** React Toastify, SweetAlert2
- **Animations:** React Awesome Reveal, React Simple Typewriter, React Tooltip
- **Deployment:** Netlify (Client-side)

---

## 📁 Folder Structure

```
/src  
├── /components        // Reusable UI components  
├── /pages             // Application pages  
├── /contexts          // Context API for authentication & state  
├── /utils             // Utility functions (if any)  
├── App.js             // Main App component  
└── index.js           // Entry point  
```

---

## 🔐 Environment Variables (.env)

```
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key  
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain  
REACT_APP_FIREBASE_PROJECT_ID=your_project_id  
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket  
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id  
REACT_APP_FIREBASE_APP_ID=your_app_id  
REACT_APP_API_BASE_URL=your_backend_api_url  
```

> ⚠️ **Note:** Never push `.env` files to GitHub.

---

## ⚙️ Installation & Running Locally

```bash
git clone https://github.com/yourusername/roommate-finder-client.git  
cd roommate-finder-client  
npm install  
npm start  
```

---

## 🚀 Available Scripts

- `npm start` — Runs the app in development mode.
- `npm run build` — Builds the app for production.

---

## 🤝 Contribution Guidelines

- Minimum **15 meaningful GitHub commits** on the client-side project.
- Follow clean code practices and comment where necessary.
- Ensure proper commit messages that reflect the changes made.

---

## 📬 Contact

**Email:** [mehedi.devx@gmail.com](mailto:mehedi.devx@gmail.com)

---

## ✅ Conclusion

Roommate Finder is a modern and reliable solution for students, job holders, and anyone looking for shared accommodation. Our goal is to make finding the perfect roommate easy, safe, and convenient.

---
