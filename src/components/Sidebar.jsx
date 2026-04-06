import { Link, useLocation } from "react-router-dom";
import { FiHome, FiUsers, FiShoppingCart, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/", icon: <FiHome /> },
    { name: "Users", path: "/users", icon: <FiUsers /> },
    { name: "Orders", path: "/orders", icon: <FiShoppingCart /> },
    { name: "Settings", path: "/settings", icon: <FiSettings /> },
  ];

  return (
    <div
      className="
        tw-bg-gray-900 tw-text-white tw-p-3 tw-z-50 md:tw-gap-3
        tw-flex tw-flex-row tw-justify-around
        md:tw-flex-col md:tw-justify-start md:tw-p-5
        tw-fixed tw-bottom-0 tw-left-0 tw-right-0
        md:tw-sticky md:tw-w-64 md:tw-h-screen md:tw-top-0
      "
    >
      {/* Logo (only desktop) */}
      <h1 className="tw-text-2xl tw-font-bold tw-mb-10 tw-hidden md:tw-block">
        Admin
      </h1>

      {menu.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`tw-flex tw-items-center tw-gap-2 tw-p-2 tw-rounded-lg tw-transition ${location.pathname === item.path
            ? "tw-bg-red-500"
            : "hover:tw-bg-gray-700"
            }`}
        >
          <span className="tw-text-xl">{item.icon}</span>

          {/* Hide text on mobile, show on desktop */}
          <span className="tw-hidden md:tw-inline">
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;