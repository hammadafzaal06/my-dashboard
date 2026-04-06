import { useEffect, useState } from "react";
import { logout } from "../utils/auth";

const Navbar = ({ setIsAuth }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
  }, []);

  const handleLogout = () => {
    logout();
    setIsAuth(false);
  };

  return (
    <div className="tw-sticky tw-top-0 tw-bg-white tw-shadow-md tw-px-6 tw-py-3 tw-flex tw-items-center tw-justify-between tw-z-40">

      {/* Left: Title */}
      <h1 className="tw-text-xl tw-font-bold">Dashboard</h1>

      {/* Center: Search */}
      <div className="tw-relative tw-w-1/3 tw-hidden md:tw-block">
        <input
          type="text"
          placeholder="Search..."
          className="tw-w-full tw-border tw-rounded-xl tw-py-2 tw-pl-10 tw-pr-3 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-red-400"
        />
        <span className="tw-absolute tw-left-3 tw-top-2.5">🔍</span>
      </div>

      {/* Right Section */}
      <div className="tw-flex tw-items-center tw-gap-5">

        {/* Notification */}
        <div className="tw-relative tw-cursor-pointer hover:tw-scale-110 tw-transition">
          🔔
          <span className="tw-absolute -tw-top-1 -tw-right-2 tw-bg-red-500 tw-text-white tw-text-xs tw-rounded-full tw-px-1">
            3
          </span>
        </div>

        {/* Profile */}
        <div className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer hover:tw-opacity-80">

          {user?.image ? (
            <img
              src={user.image}
              alt="profile"
              className="tw-w-8 tw-h-8 tw-rounded-full tw-object-cover"
            />
          ) : (
            <div className="tw-w-8 tw-h-8 tw-bg-gray-300 tw-rounded-full"></div>
          )}

          <span className="tw-text-sm tw-hidden md:tw-block">
            {user?.name || "User"}
          </span>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="tw-bg-red-500 tw-text-white tw-px-3 tw-py-1 tw-rounded-lg hover:tw-bg-red-600 tw-text-sm"
        >
          Logout
        </button>

      </div>
    </div>
  );
};

export default Navbar;