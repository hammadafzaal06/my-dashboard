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
        tw-bg-[#0F172A] tw-text-slate-300 tw-z-50 
        tw-flex tw-flex-row tw-justify-around tw-p-2 tw-border-t tw-border-slate-800
        md:tw-flex-col md:tw-justify-start md:tw-p-6 md:tw-gap-2 md:tw-border-t-0 md:tw-border-r
        tw-fixed tw-bottom-0 tw-left-0 tw-right-0
        md:tw-sticky md:tw-w-72 md:tw-h-screen md:tw-top-0
      "
    >
      {/* Brand Header */}
      <div className="tw-hidden md:tw-flex tw-items-center tw-gap-3 tw-mb-10 tw-px-2">
        <div className="tw-w-8 tw-h-8 tw-bg-red-500 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-shadow-lg tw-shadow-red-500/20">
          <span className="tw-text-white tw-font-black tw-text-sm">A</span>
        </div>
        <h1 className="tw-text-xl tw-font-bold tw-text-white tw-tracking-tight">
          Admin <span className="tw-text-red-500">Panel</span>
        </h1>
      </div>

      {menu.map((item) => {
        const isActive = location.pathname === item.path;
        
        return (
          <Link
            key={item.name}
            to={item.path}
            className={`
              tw-relative tw-flex tw-items-center tw-gap-3 tw-px-4 tw-py-3 tw-rounded-xl tw-transition-all tw-duration-200 tw-group
              ${isActive 
                ? "tw-bg-red-500 tw-text-white tw-shadow-lg tw-shadow-red-500/25" 
                : "hover:tw-bg-slate-800/50 hover:tw-text-white"
              }
            `}
          >
            {/* Icon with active scaling */}
            <span className={`tw-text-xl tw-transition-transform tw-duration-200 group-hover:tw-scale-110 ${isActive ? 'tw-scale-110' : ''}`}>
              {item.icon}
            </span>

            {/* Desktop Label */}
            <span className="tw-hidden md:tw-inline tw-font-medium tw-text-sm">
              {item.name}
            </span>

            {/* Active Glow (Desktop only) */}
            {isActive && (
              <div className="tw-hidden md:tw-block tw-absolute tw-left-[-24px] tw-w-1 tw-h-6 tw-bg-red-500 tw-rounded-r-full tw-shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;