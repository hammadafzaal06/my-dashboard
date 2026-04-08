# AdminPanel v2.1 — Service Marketplace Dashboard

A high-performance, responsive administrative interface built with **React** and **Tailwind CSS**. This dashboard provides a real-time system snapshot for managing service providers, tracking revenue growth, and monitoring global system performance through interactive data visualizations.

> **Live Demo:** [View Project on Vercel](https://my-dashboard-hammadafzaal06s-projects.vercel.app/)

## 🚀 Core Features

* **Real-time Analytics:** Interactive "Global Performance" charts and revenue tracking using Recharts.
* **System Snapshots:** High-level statistics cards for Total Users, Revenue, Orders, and Growth with percentage indicators.
* **Activity Monitoring:** A live "Recent Activity" feed to track system-wide updates and user transactions.
* **Modern UI/UX:** A clean, glassmorphism-inspired design with a professional sidebar and persistent state management.
* **Fully Responsive:** Optimized for all screen sizes, from mobile devices to ultra-wide monitors.

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** Tailwind CSS (Custom configurations for AdminPanel branding)
* **Icons:** React Icons (Fa6, Hi2, Lucide)
* **Charts:** Recharts
* **Deployment:** Vercel (CI/CD)

---

## 💻 Getting Started

Follow these steps to set up the project locally.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/hammadafzaal06/my-dashboard.git](https://github.com/hammadafzaal06/my-dashboard.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```

---

## 📖 Project Documentation

### Architecture Overview
The project is structured to prioritize **scalability** and **separation of concerns**. By decoupling the UI components from the business logic, the dashboard remains easy to test and update.

### Core Structure
- **Context Providers:** Located in `/context`, these wrap the application to provide global access to system states.
- **Custom Hooks:** Located in `/hooks`, these encapsulate complex logic (like window resizing or data fetching) to keep components "lean."
- **Utility Functions:** Pure functions in `/utils` handle data formatting (e.g., currency formatting for the Revenue cards).

---

**Developed by Hammad Afzaal**
* [GitHub Profile](https://github.com/hammadafzaal06)