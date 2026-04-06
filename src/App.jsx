import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";

import { isAuthenticated } from "./utils/auth";

function App() {
  const [isAuth, setIsAuth] = useState(isAuthenticated());

  // 🔐 Not logged in → show login
  if (!isAuth) {
    return <Login setIsAuth={setIsAuth} />;
  }

  // ✅ Logged in → show dashboard
  return (
    <BrowserRouter>
      <div className="tw-flex tw-flex-col md:tw-flex-row">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Right side */}
        <div className="tw-flex-1">
          
          {/* Navbar (logout yahan handle hoga) */}
          <Navbar setIsAuth={setIsAuth} />

          <div className="tw-p-5">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;