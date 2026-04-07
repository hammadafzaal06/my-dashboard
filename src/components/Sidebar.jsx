import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome, FiUsers, FiShoppingCart, FiSettings,
  FiLogOut, FiBarChart2, FiPieChart
} from "react-icons/fi";
// Import your logout utility
import { logout } from "../utils/auth"; 

const Sidebar = ({ setIsAuth }) => {
  const location = useLocation();
  
  const [userData, setUserData] = useState({
    name: "Guest",
    role: "User",
    image: null
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUserData({
        name: storedUser.name || "Hammad",
        role: storedUser.role || "Junior ReactJS Developer",
        image: storedUser.image || null
      });
    }
  }, [location]);

  // Handle Logout Logic
  const handleLogout = () => {
    logout(); // Clears localStorage/tokens via your utility
    if (setIsAuth) setIsAuth(false); // Updates global auth state
  };

  const menuGroups = [
    {
      group: "Overview",
      items: [
        { name: "Dashboard", path: "/", icon: <FiHome /> },
        { name: "Orders", path: "/orders", icon: <FiShoppingCart />, badge: 3 },
      ]
    },
    {
      group: "Analytics",
      items: [
        { name: "Sales Report", path: "/sales", icon: <FiBarChart2 /> },
        { name: "Traffic", path: "/traffic", icon: <FiPieChart /> },
      ]
    },
    {
      group: "System",
      items: [
        { name: "Team Members", path: "/users", icon: <FiUsers /> },
        { name: "Settings", path: "/settings", icon: <FiSettings /> },
      ]
    }
  ];

  return (
    <div className="
      tw-bg-[#0F172A] tw-text-slate-300 tw-z-50 
      tw-flex tw-flex-row tw-justify-around tw-p-2 tw-border-t tw-border-slate-800
      md:tw-flex-col md:tw-justify-start md:tw-p-6 md:tw-border-t-0 md:tw-border-r
      tw-fixed tw-bottom-0 tw-left-0 tw-right-0
      md:tw-sticky md:tw-w-72 md:tw-h-screen md:tw-top-0
    ">
      {/* Brand Header */}
      <div className="tw-hidden md:tw-flex tw-items-center tw-justify-between tw-mb-10 tw-px-2">
        <div className="tw-flex tw-items-center tw-gap-3">
          <div className="tw-w-8 tw-h-8 tw-bg-red-500 tw-rounded-lg tw-flex tw-items-center tw-justify-center">
            <span className="tw-text-white tw-font-black">A</span>
          </div>
          <h1 className="tw-text-xl tw-font-bold tw-text-white">Admin<span className="tw-text-red-500">Panel</span></h1>
        </div>
        <span className="tw-text-[10px] tw-bg-slate-800 tw-px-2 tw-py-0.5 tw-rounded-full tw-font-bold">v2.1</span>
      </div>

      {/* Nav Area */}
      <nav className="tw-flex-1 tw-w-full md:tw-space-y-8">
        {menuGroups.map((group) => (
          <div key={group.group} className="tw-space-y-2">
            <p className="tw-hidden md:tw-block tw-text-[10px] tw-uppercase tw-tracking-widest tw-text-slate-500 tw-font-black tw-px-4">
              {group.group}
            </p>
            <div className="tw-flex tw-flex-row md:tw-flex-col tw-gap-1">
              {group.items.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`
                      tw-relative tw-flex tw-items-center tw-gap-3 tw-px-4 tw-py-3 tw-rounded-xl tw-transition-all tw-group
                      ${isActive ? "tw-bg-red-500 tw-text-white tw-shadow-lg" : "hover:tw-bg-slate-800/50"}
                    `}
                  >
                    <span className="tw-text-xl">{item.icon}</span>
                    <span className="tw-hidden md:tw-inline tw-text-sm tw-font-semibold">{item.name}</span>
                    {item.badge && !isActive && (
                      <span className="tw-hidden md:tw-flex tw-absolute tw-right-4 tw-w-5 tw-h-5 tw-bg-red-500 tw-text-[10px] tw-rounded-full tw-items-center tw-justify-center tw-font-bold">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Real-time User Profile Footer */}
      <div className="tw-hidden md:tw-block tw-mt-auto tw-pt-6 tw-border-t tw-border-slate-800">
        <div className="tw-flex tw-items-center tw-gap-3 tw-p-2 tw-bg-slate-800/30 tw-rounded-2xl tw-border tw-border-slate-700/50">
          <img
            src={userData.image || `https://ui-avatars.com/api/?name=${userData.name}&background=ef4444&color=fff`}
            alt="User"
            className="tw-w-10 tw-h-10 tw-rounded-xl tw-object-cover tw-border tw-border-slate-700"
          />
          <div className="tw-flex-1 tw-overflow-hidden">
            <p className="tw-text-sm tw-font-bold tw-text-white tw-truncate">
              {userData.name}
            </p>
            <p className="tw-text-[10px] tw-font-medium tw-text-slate-500 tw-truncate tw-uppercase tw-tracking-tight">
              {userData.role}
            </p>
          </div>
          {/* Attached handleLogout here */}
          <button 
            onClick={handleLogout}
            className="tw-p-2 tw-text-slate-500 hover:tw-bg-red-500/10 hover:tw-text-red-500 tw-rounded-lg tw-transition-colors"
            title="Logout"
          >
            <FiLogOut size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;