import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Users", path: "/users" },
    { name: "Orders", path: "/orders" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div className="tw-sticky tw-top-0 tw-w-64 tw-h-screen tw-bg-gray-900 tw-text-white tw-p-5">
      <h1 className="tw-text-2xl tw-font-bold tw-mb-10">Admin</h1>

      {menu.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`tw-block tw-p-3 tw-rounded-lg tw-mb-2 ${
            location.pathname === item.path
              ? "tw-bg-red-500"
              : "hover:tw-bg-gray-700"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;