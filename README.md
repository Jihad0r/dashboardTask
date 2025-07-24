# 📊 Dashboard App

A simple, responsive dashboard built with **React**, **Redux**, and **Tailwind CSS**. It displays user earnings (or similar data) after login and ensures protected access through a `Protected` wrapper component.

---

## 🚀 Features

- 🔒 **Protected Routes**: Only authenticated users can access the dashboard.
- 💰 **Earnings Preview**: Displays the most recent 3 earning records from localStorage.
- 🧠 **Global State Management**: Powered by Redux for scalable state logic.
- 🎨 **Responsive UI**: Styled with Tailwind CSS for clean and modern design.

---

## 🛠️ Tech Stack

- **React** with functional components and hooks  
- **Redux** (`@reduxjs/toolkit`)  
- **Tailwind CSS** for styling  
- **localStorage** for temporary user session data  
- **Next.js** (App Router assumed if you're using `use client`)  

---
🔐 Authentication
Authentication is handled via Redux and localStorage. Users must be logged in for the dashboard to be visible.

💡 Protected.jsx handles the redirection if the user is not authenticated.

📦 Deployment
You can deploy this app using:

Netlify

GitHub 

🙌 Contributing
Pull requests and stars are welcome. For major changes, please open an issue first to discuss what you’d like to change.


You can login with this

email: john.doe@gmail.com
password: Password123!

👨‍💻 Author
Jihad Orabi
GitHub: @Jihad0r
