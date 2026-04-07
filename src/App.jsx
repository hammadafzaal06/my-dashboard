import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";
import UserProfile from "./pages/UserProfile"; // 👈 Import the new page
import SalesReport from "./pages/SalesReport";
import Traffic from "./pages/Traffic";

import { isAuthenticated } from "./utils/auth";

function App() {
  const [isAuth, setIsAuth] = useState(isAuthenticated());

  if (!isAuth) {
    return <Login setIsAuth={setIsAuth} />;
  }

  return (
    <BrowserRouter>
      <div className="tw-flex tw-flex-col md:tw-flex-row tw-min-h-screen tw-bg-slate-50">
        <Sidebar />

        <div className="tw-flex-1">
          <Navbar setIsAuth={setIsAuth} />

          <div className="tw-p-5">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              {/* 🛡️ Dynamic route for the profile */}
              <Route path="/users/:id" element={<UserProfile />} />
              <Route path="/sales" element={<SalesReport />} />
              <Route path="/traffic" element={<Traffic />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/settings" element={<Settings />} />

              {/* Fallback for 404s */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;