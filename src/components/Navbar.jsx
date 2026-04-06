const Navbar = () => {
  return (
    <div className="tw-sticky tw-top-0 tw-bg-white tw-shadow-md tw-px-6 tw-py-3 tw-flex tw-items-center tw-justify-between">

      {/* Left: Title */}
      <h1 className="tw-text-xl tw-font-bold">Dashboard</h1>

      {/* Center: Search */}
      <div className="tw-relative tw-w-1/3 tw-hidden md:tw-block ">
        <input
          type="text"
          placeholder="Search..."
          className="tw-w-full tw-border tw-rounded-xl tw-py-2 tw-pl-10 tw-pr-3 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-red-400"
        />
        <span className="tw-absolute tw-left-3 tw-top-2.5">🔍</span>
      </div>

      {/* Right: Icons */}
      <div className="tw-flex tw-items-center tw-gap-5">

        {/* Notification */}
        <div className="tw-relative tw-cursor-pointer">
          🔔
          <span className="tw-absolute -tw-top-1 -tw-right-2 tw-bg-red-500 tw-text-white tw-text-xs tw-rounded-full tw-px-1">
            3
          </span>
        </div>

        {/* Profile */}
        <div className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer">
          <div className="tw-w-8 tw-h-8 tw-bg-gray-300 tw-rounded-full"></div>
          <span className="tw-text-sm tw-hidden md:tw-block">Hammad</span>
        </div>

      </div>
    </div>
  );
};

export default Navbar;