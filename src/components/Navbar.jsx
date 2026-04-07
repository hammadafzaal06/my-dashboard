import { FiSearch, FiBell, FiMenu } from "react-icons/fi";
import ProfileMenu from "./ProfileMenu";

const Navbar = ({ setIsAuth }) => {
  return (
    <nav className="tw-sticky tw-top-0 tw-z-40 tw-w-full tw-bg-white/80 tw-backdrop-blur-md tw-border-b tw-border-slate-100">
      <div className="tw-max-w-[1600px] tw-mx-auto tw-px-4 sm:tw-px-6 tw-h-16 tw-flex tw-items-center tw-justify-between">
        
        {/* Left: Branding & Mobile Trigger */}
        <div className="tw-flex tw-items-center tw-gap-4">
          <button className="md:tw-hidden tw-p-2 tw-rounded-lg hover:tw-bg-slate-100 tw-text-slate-600">
            <FiMenu size={20} />
          </button>
          <h1 className="tw-text-xl tw-font-black tw-text-slate-900 tw-tracking-tight">
            Dash<span className="tw-text-red-500">board</span>
          </h1>
        </div>

        {/* Center: Search (Refined) */}
        <div className="tw-hidden md:tw-block tw-relative tw-w-1/3">
          <div className="tw-absolute tw-inset-y-0 tw-left-0 tw-pl-3 tw-flex tw-items-center tw-pointer-events-none">
            <FiSearch className="tw-text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search anything..."
            className="tw-block tw-w-full tw-pl-10 tw-pr-4 tw-py-2 tw-bg-slate-50 tw-border tw-border-slate-200 tw-rounded-xl tw-text-sm tw-placeholder-slate-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-red-500/20 focus:tw-border-red-500 tw-transition-all"
          />
        </div>

        {/* Right: Actions */}
        <div className="tw-flex tw-items-center tw-gap-2 sm:tw-gap-4">
          
          {/* Notification Button */}
          <button className="tw-relative tw-p-2 tw-text-slate-500 tw-rounded-xl hover:tw-bg-slate-100 hover:tw-text-slate-900 tw-transition-all active:tw-scale-95">
            <FiBell size={22} />
            <span className="tw-absolute tw-top-2 tw-right-2 tw-flex tw-h-2.5 tw-w-2.5">
              <span className="tw-animate-ping tw-absolute tw-inline-flex tw-h-full tw-w-full tw-rounded-full tw-bg-red-400 tw-opacity-75"></span>
              <span className="tw-relative tw-inline-flex tw-rounded-full tw-h-2.5 tw-w-2.5 tw-bg-red-500 tw-border-2 tw-border-white"></span>
            </span>
          </button>

          {/* Vertical Divider */}
          <div className="tw-h-6 tw-w-px tw-bg-slate-200 tw-mx-1 tw-hidden sm:tw-block" />

          {/* Profile Menu */}
          <ProfileMenu setIsAuth={setIsAuth} />
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;