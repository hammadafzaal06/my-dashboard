import { useEffect, useState } from "react";
import { logout } from "../utils/auth";

const ProfileMenu = ({ setIsAuth }) => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
  }, []);

  const handleLogout = () => {
    logout();
    setIsAuth(false);
  };

  return (
    <div className="tw-relative">
      {/* Profile Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="tw-flex tw-items-center tw-gap-2 tw-p-1 tw-rounded-full tw-transition-all tw-duration-200 hover:tw-bg-gray-100 active:tw-scale-95"
      >
        {user?.image ? (
          <img
            src={user.image}
            alt="profile"
            className="tw-w-9 tw-h-9 tw-rounded-full tw-object-cover tw-border tw-border-gray-200"
          />
        ) : (
          <div className="tw-w-9 tw-h-9 tw-bg-gradient-to-tr tw-from-gray-300 tw-to-gray-100 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-gray-500 tw-font-bold">
            {user?.name?.charAt(0) || "U"}
          </div>
        )}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <>
          {/* Invisible Overlay to close on click-outside */}
          <div 
            className="tw-fixed tw-inset-0 tw-z-40" 
            onClick={() => setOpen(false)} 
          />
          
          <div className="tw-absolute tw-right-0 tw-mt-2 tw-w-64 tw-bg-white tw-border tw-border-gray-100 tw-shadow-2xl tw-rounded-2xl tw-py-2 tw-z-50 tw-animate-in tw-fade-in tw-slide-in-from-top-2">
            
            {/* Header / User Info */}
            <div className="tw-px-4 tw-py-3 tw-flex tw-items-center tw-gap-3">
              {user?.image ? (
                <img
                  src={user.image}
                  alt="profile"
                  className="tw-w-10 tw-h-10 tw-rounded-full tw-object-cover"
                />
              ) : (
                <div className="tw-w-10 tw-h-10 tw-bg-gray-100 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-gray-400">
                  <span className="tw-text-lg tw-font-medium">{user?.name?.charAt(0)}</span>
                </div>
              )}
              <div className="tw-flex tw-flex-col tw-overflow-hidden">
                <p className="tw-text-sm tw-font-bold tw-text-gray-900 tw-truncate">
                  {user?.name || "User"}
                </p>
                <p className="tw-text-xs tw-text-gray-500 tw-truncate">
                  {user?.email}
                </p>
              </div>
            </div>

            <div className="tw-h-px tw-bg-gray-100 tw-my-1" />

            {/* Menu Options */}
            <nav className="tw-px-2 tw-space-y-1">
              <button className="tw-w-full tw-px-3 tw-py-2 tw-text-left tw-text-sm tw-font-medium tw-text-gray-700 tw-rounded-lg tw-transition-colors hover:tw-bg-gray-50 hover:tw-text-gray-900">
                My Profile
              </button>
              
              <button className="tw-w-full tw-px-3 tw-py-2 tw-text-left tw-text-sm tw-font-medium tw-text-gray-700 tw-rounded-lg tw-transition-colors hover:tw-bg-gray-50 hover:tw-text-gray-900">
                Settings
              </button>

              <div className="tw-h-px tw-bg-gray-100 tw-my-1" />

              <button
                onClick={handleLogout}
                className="tw-w-full tw-px-3 tw-py-2 tw-text-left tw-text-sm tw-font-bold tw-text-red-500 tw-rounded-lg tw-transition-colors hover:tw-bg-red-50"
              >
                Logout
              </button>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileMenu;