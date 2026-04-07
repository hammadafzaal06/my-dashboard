import { useState, useEffect } from "react";
import { login as authLogin } from "../utils/auth";
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight, FiShield, FiHexagon } from "react-icons/fi";

const Login = ({ setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const existingUser = localStorage.getItem("user");
    if (!existingUser) {
      localStorage.setItem("user", JSON.stringify({
        name: "Hammad",
        email: "admin@gmail.com",
        password: "1234",
        role: "Junior ReactJS Developer"
      }));
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsError(false);
    setIsLoading(true);

    setTimeout(() => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (email === storedUser.email && password === storedUser.password) {
        authLogin();
        setIsAuth(true);
      } else {
        setIsError(true);
        setIsLoading(false);
      }
    }, 1200);
  };

  return (
    <div className="tw-min-h-screen tw-flex tw-bg-[#FCFCFD]">
      {/* 1. LEFT SIDE: The Brand Experience */}
      <div className="tw-hidden lg:tw-flex tw-w-[55%] tw-bg-[#0B0F19] tw-relative tw-overflow-hidden tw-items-center tw-justify-center">
        {/* Dynamic Background Effects */}
        <div className="tw-absolute tw-top-[-20%] tw-left-[-10%] tw-w-[600px] tw-h-[600px] tw-bg-red-600/20 tw-rounded-full tw-blur-[140px] tw-animate-pulse" />
        <div className="tw-absolute tw-bottom-[-10%] tw-right-[-5%] tw-w-[500px] tw-h-[500px] tw-bg-blue-500/10 tw-rounded-full tw-blur-[120px]" />
        
        <div className="tw-z-10 tw-max-w-lg tw-px-12 tw-text-center">
          {/* THE BEAUTIFUL LOGO */}
          <div className="tw-relative tw-inline-flex tw-items-center tw-justify-center tw-mb-12">
            {/* Outer Glow Ring */}
            <div className="tw-absolute tw-inset-0 tw-bg-red-500/30 tw-rounded-[2rem] tw-blur-2xl tw-animate-pulse" />
            
            {/* The Main Shape */}
            <div className="tw-relative tw-w-28 tw-h-28 tw-bg-gradient-to-br tw-from-white/10 tw-to-white/5 tw-backdrop-blur-2xl tw-border tw-border-white/20 tw-rounded-[2.5rem] tw-shadow-2xl tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-tr tw-from-red-500/20 tw-via-transparent tw-to-blue-500/20" />
              <span className="tw-relative tw-text-white tw-text-6xl tw-font-black tw-tracking-tighter">A</span>
              
              {/* Floating Accents */}
              <div className="tw-absolute tw-top-2 tw-right-2 tw-w-2 tw-h-2 tw-bg-red-400 tw-rounded-full tw-animate-ping" />
            </div>
          </div>

          <h2 className="tw-text-5xl tw-font-black tw-text-white tw-mb-6 tw-leading-[1.1] tw-tracking-tight">
            Design the future <br /> 
            <span className="tw-bg-clip-text tw-text-transparent tw-bg-gradient-to-r tw-from-red-500 tw-to-red-300">of management.</span>
          </h2>
          <p className="tw-text-slate-400 tw-text-xl tw-font-medium tw-leading-relaxed">
            A high-performance dashboard crafted for developers and visionaries.
          </p>
        </div>

        {/* Texture Overlay */}
        <div className="tw-absolute tw-inset-0 tw-bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] tw-opacity-[0.03] tw-pointer-events-none" />
      </div>

      {/* 2. RIGHT SIDE: The Form */}
      <div className="tw-w-full lg:tw-w-[45%] tw-flex tw-items-center tw-justify-center tw-p-8 md:tw-p-20">
        <div className="tw-w-full tw-max-w-md tw-space-y-12">
          <div className="tw-space-y-3">
            <h1 className="tw-text-5xl tw-font-black tw-text-slate-900 tw-tracking-tight">Login</h1>
            <p className="tw-text-slate-500 tw-text-lg tw-font-medium">Enter your credentials to continue</p>
          </div>

          <form onSubmit={handleLogin} className={`tw-space-y-7 ${isError ? 'tw-animate-shake' : ''}`}>
            <div className="tw-space-y-2.5">
              <label className="tw-text-sm tw-font-bold tw-text-slate-800 tw-ml-1">Email Address</label>
              <div className="tw-relative tw-group">
                <FiMail className="tw-absolute tw-left-5 tw-top-1/2 -tw-translate-y-1/2 tw-text-slate-300 group-focus-within:tw-text-red-500 tw-transition-colors" size={20} />
                <input
                  type="email"
                  required
                  placeholder="admin@gmail.com"
                  className="tw-w-full tw-bg-white tw-border-2 tw-border-slate-100 tw-pl-14 tw-pr-6 tw-py-5 tw-rounded-[1.5rem] focus:tw-border-red-500 tw-shadow-sm focus:tw-shadow-red-500/10 tw-outline-none tw-transition-all tw-text-slate-900 tw-font-semibold"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="tw-space-y-2.5">
              <div className="tw-flex tw-justify-between tw-items-center">
                <label className="tw-text-sm tw-font-bold tw-text-slate-800 tw-ml-1">Password</label>
                <button type="button" className="tw-text-sm tw-font-bold tw-text-red-500 hover:tw-text-red-600">Forgot?</button>
              </div>
              <div className="tw-relative tw-group">
                <FiLock className="tw-absolute tw-left-5 tw-top-1/2 -tw-translate-y-1/2 tw-text-slate-300 group-focus-within:tw-text-red-500 tw-transition-colors" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="tw-w-full tw-bg-white tw-border-2 tw-border-slate-100 tw-pl-14 tw-pr-14 tw-py-5 tw-rounded-[1.5rem] focus:tw-border-red-500 tw-shadow-sm focus:tw-shadow-red-500/10 tw-outline-none tw-transition-all tw-text-slate-900 tw-font-semibold"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="tw-absolute tw-right-5 tw-top-1/2 -tw-translate-y-1/2 tw-text-slate-300 hover:tw-text-slate-600"
                >
                  {showPassword ? <FiEyeOff size={22} /> : <FiEye size={22} />}
                </button>
              </div>
            </div>

            {isError && (
              <div className="tw-flex tw-items-center tw-gap-2 tw-text-red-500 tw-bg-red-50 tw-p-4 tw-rounded-2xl tw-text-sm tw-font-bold">
                <FiShield size={18} /> Authentication failed. Please check your details.
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="tw-w-full tw-bg-[#0B0F19] tw-text-white tw-py-5 tw-rounded-[1.5rem] tw-font-bold tw-text-xl tw-shadow-2xl tw-shadow-slate-200 hover:tw-bg-red-500 hover:tw-shadow-red-500/40 active:tw-scale-[0.97] tw-transition-all tw-duration-500 tw-flex tw-items-center tw-justify-center tw-gap-4 disabled:tw-opacity-50"
            >
              {isLoading ? (
                <div className="tw-w-7 tw-h-7 tw-border-4 tw-border-white/20 tw-border-t-white tw-rounded-full tw-animate-spin" />
              ) : (
                <>Sign In <FiArrowRight size={24} /></>
              )}
            </button>
          </form>

          <div className="tw-pt-10 tw-flex tw-items-center tw-justify-between">
            <div className="tw-flex tw-items-center tw-gap-2">
               <div className="tw-w-2 tw-h-2 tw-bg-green-500 tw-rounded-full tw-animate-pulse" />
               <span className="tw-text-slate-400 tw-text-xs tw-font-bold tw-uppercase tw-tracking-widest">System Online</span>
            </div>
            <button className="tw-text-sm tw-font-bold tw-text-slate-900 hover:tw-text-red-500 tw-transition-colors">IT Support</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;