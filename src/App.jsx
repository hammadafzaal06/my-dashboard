import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";
function App() {
  
  const isLoggedIn = localStorage.getItem("isAuth") === "true";
  const [isAuth, setIsAuth] = useState(isLoggedIn);

  if (!isAuth) {
    return <Login setIsAuth={setIsAuth} />;
  }

  return (
    <BrowserRouter>
      <div className="tw-flex">
        <Sidebar />

        <div className="tw-flex-1">
          <Navbar />

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