import React from 'react';
import { FiGlobe, FiClock, FiSmartphone, FiMousePointer, FiArrowUpRight, FiMonitor, FiTablet } from "react-icons/fi";

const Traffic = () => {
  const channels = [
    { name: "Direct", value: "45%", color: "tw-bg-indigo-500", visits: "12.4k" },
    { name: "Social Media", value: "30%", color: "tw-bg-sky-400", visits: "8.2k" },
    { name: "Referral", value: "15%", color: "tw-bg-rose-500", visits: "4.1k" },
    { name: "Organic Search", value: "10%", color: "tw-bg-emerald-400", visits: "2.7k" },
  ];

  const countries = [
    { code: "US", name: "United States", percent: "38%", flag: "🇺🇸" },
    { code: "PK", name: "Pakistan", percent: "22%", flag: "🇵🇰" },
    { code: "DE", name: "Germany", percent: "14%", flag: "🇩🇪" },
  ];

  return (
    <div className="tw-min-h-screen tw-bg-slate-50 tw-p-6 md:tw-p-10 tw-animate-in tw-fade-in tw-duration-700">
      {/* Dynamic Header */}
      <header className="tw-mb-10">
        <div className="tw-flex tw-items-center tw-gap-3 tw-mb-2">
          <div className="tw-p-2 tw-bg-indigo-600 tw-rounded-lg tw-text-white">
            <FiGlobe size={20} />
          </div>
          <h1 className="tw-text-3xl tw-font-black tw-text-slate-900 tw-tracking-tight">Traffic Analytics</h1>
        </div>
        <p className="tw-text-slate-500 tw-font-medium">Deep dive into your audience acquisition and behavior.</p>
      </header>

      <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-8">
        
        {/* Left Column: Main Charts & Tables */}
        <div className="lg:tw-col-span-2 tw-space-y-8">
          
          {/* Top Channels Card */}
          <div className="tw-bg-white tw-p-8 tw-rounded-[2.5rem] tw-border tw-border-slate-100 tw-shadow-sm">
            <div className="tw-flex tw-justify-between tw-items-center tw-mb-8">
              <h3 className="tw-text-xl tw-font-black tw-text-slate-800">Acquisition Channels</h3>
              <span className="tw-text-xs tw-font-bold tw-text-indigo-600 tw-bg-indigo-50 tw-px-3 tw-py-1 tw-rounded-full">Live Updates</span>
            </div>
            
            <div className="tw-space-y-7">
              {channels.map((item) => (
                <div key={item.name} className="tw-group">
                  <div className="tw-flex tw-justify-between tw-items-end tw-mb-2">
                    <div>
                      <span className="tw-block tw-text-sm tw-font-black tw-text-slate-800">{item.name}</span>
                      <span className="tw-text-[11px] tw-font-bold tw-text-slate-400 tw-uppercase">{item.visits} visits</span>
                    </div>
                    <span className="tw-text-sm tw-font-black tw-text-slate-900">{item.value}</span>
                  </div>
                  <div className="tw-w-full tw-h-3 tw-bg-slate-50 tw-rounded-full tw-overflow-hidden">
                    <div 
                      className={`tw-h-full tw-rounded-full ${item.color} tw-transition-all tw-duration-1000 group-hover:tw-opacity-80`} 
                      style={{ width: item.value }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Stats Grid */}
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
            <div className="tw-bg-white tw-p-6 tw-rounded-[2rem] tw-border tw-border-slate-100 tw-flex tw-items-center tw-gap-4">
              <div className="tw-p-4 tw-bg-orange-50 tw-text-orange-500 tw-rounded-2xl">
                <FiClock size={24} />
              </div>
              <div>
                <p className="tw-text-xs tw-font-bold tw-text-slate-400 tw-uppercase">Avg. Session</p>
                <h4 className="tw-text-xl tw-font-black tw-text-slate-900">4m 32s</h4>
              </div>
            </div>
            <div className="tw-bg-white tw-p-6 tw-rounded-[2rem] tw-border tw-border-slate-100 tw-flex tw-items-center tw-gap-4">
              <div className="tw-p-4 tw-bg-emerald-50 tw-text-emerald-500 tw-rounded-2xl">
                <FiMousePointer size={24} />
              </div>
              <div>
                <p className="tw-text-xs tw-font-bold tw-text-slate-400 tw-uppercase">Bounce Rate</p>
                <h4 className="tw-text-xl tw-font-black tw-text-slate-900">24.8%</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Real-time & Geography */}
        <div className="tw-space-y-8">
          
          {/* Enhanced Real-time Card */}
          <div className="tw-bg-slate-900 tw-p-8 tw-rounded-[2.5rem] tw-text-white tw-relative tw-overflow-hidden tw-shadow-2xl tw-shadow-indigo-200">
            {/* Background Glow */}
            <div className="tw-absolute -tw-top-24 -tw-right-24 tw-w-48 tw-h-48 tw-bg-indigo-500/20 tw-blur-[80px]"></div>
            
            <div className="tw-relative tw-z-10">
              <div className="tw-flex tw-items-center tw-gap-2 tw-text-emerald-400 tw-mb-6">
                <span className="tw-relative tw-flex tw-h-2.5 tw-w-2.5">
                  <span className="tw-animate-ping tw-absolute tw-inline-flex tw-h-full tw-w-full tw-rounded-full tw-bg-emerald-400 tw-opacity-75"></span>
                  <span className="tw-relative tw-inline-flex tw-rounded-full tw-bg-emerald-500 tw-h-2.5 tw-w-2.5"></span>
                </span>
                <span className="tw-text-[10px] tw-font-black tw-uppercase tw-tracking-[0.2em]">Live Audience</span>
              </div>
              
              <h2 className="tw-text-6xl tw-font-black tw-mb-2">142</h2>
              <p className="tw-text-slate-400 tw-text-sm tw-font-medium">Active sessions right now</p>
              
              <div className="tw-mt-10 tw-pt-8 tw-border-t tw-border-slate-800">
                <div className="tw-flex tw-justify-between tw-mb-4">
                  <div className="tw-flex tw-items-center tw-gap-3">
                    <FiMonitor className="tw-text-slate-500" />
                    <span className="tw-text-xs tw-font-bold">Desktop</span>
                  </div>
                  <span className="tw-text-xs tw-font-black">64%</span>
                </div>
                <div className="tw-flex tw-justify-between">
                  <div className="tw-flex tw-items-center tw-gap-3">
                    <FiSmartphone className="tw-text-slate-500" />
                    <span className="tw-text-xs tw-font-bold">Mobile</span>
                  </div>
                  <span className="tw-text-xs tw-font-black">36%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Countries Card */}
          <div className="tw-bg-white tw-p-8 tw-rounded-[2.5rem] tw-border tw-border-slate-100">
            <h3 className="tw-text-lg tw-font-black tw-text-slate-800 tw-mb-6">Top Locations</h3>
            <div className="tw-space-y-5">
              {countries.map((c) => (
                <div key={c.code} className="tw-flex tw-items-center tw-justify-between">
                  <div className="tw-flex tw-items-center tw-gap-3">
                    <span className="tw-text-xl">{c.flag}</span>
                    <span className="tw-text-sm tw-font-bold tw-text-slate-600">{c.name}</span>
                  </div>
                  <span className="tw-text-sm tw-font-black tw-text-slate-900">{c.percent}</span>
                </div>
              ))}
            </div>
            <button className="tw-w-full tw-mt-8 tw-py-3 tw-bg-slate-50 tw-text-slate-500 tw-text-xs tw-font-black tw-rounded-xl hover:tw-bg-slate-100 tw-transition-colors">
              VIEW ALL COUNTRIES
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Traffic;