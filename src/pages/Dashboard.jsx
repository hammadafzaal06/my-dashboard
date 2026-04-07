import { FiUsers, FiTrendingUp, FiShoppingBag, FiDollarSign, FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import Chart from "../components/Chart";

const Dashboard = () => {
    const stats = [
        { title: "Total Users", value: "1,200", change: 12, icon: <FiUsers />, color: "tw-text-blue-600" },
        { title: "Revenue", value: "$8,500", change: 8, icon: <FiDollarSign />, color: "tw-text-emerald-600" },
        { title: "Orders", value: "320", change: -5, icon: <FiShoppingBag />, color: "tw-text-orange-600" },
        { title: "Growth", value: "15%", change: 3, icon: <FiTrendingUp />, color: "tw-text-indigo-600" },
    ];

    return (
        <div className="tw-min-h-screen tw-bg-slate-50 tw-p-6 md:tw-p-10">
            {/* Header Section */}
            <header className="tw-mb-8 tw-flex tw-flex-col md:tw-flex-row md:tw-items-center tw-justify-between tw-gap-4">
                <div>
                    <h1 className="tw-text-3xl tw-font-extrabold tw-text-slate-900 tw-tracking-tight">
                        Dashboard <span className="tw-text-slate-400 tw-font-medium tw-text-lg">/ Overview</span>
                    </h1>
                    <p className="tw-text-slate-500 tw-mt-1">Welcome back, here's what's happening today.</p>
                </div>

                <div className="tw-flex tw-items-center tw-gap-3">
                    <button className="tw-px-4 tw-py-2 tw-bg-white tw-border tw-border-slate-200 tw-rounded-xl tw-text-sm tw-font-semibold tw-text-slate-600 hover:tw-bg-slate-50 tw-transition-all">
                        Download Report
                    </button>
                    <button className="tw-px-4 tw-py-2 tw-bg-slate-900 tw-text-white tw-rounded-xl tw-text-sm tw-font-semibold hover:tw-bg-slate-800 tw-transition-all tw-shadow-lg tw-shadow-slate-200">
                        + New Task
                    </button>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-6 tw-mb-10">
                {stats.map((item, index) => (
                    <div key={index} className="tw-bg-white tw-p-6 tw-rounded-2xl tw-border tw-border-slate-100 tw-shadow-sm hover:tw-shadow-md tw-transition-shadow">
                        <div className="tw-flex tw-justify-between tw-items-start tw-mb-4">
                            <div className={`tw-p-2.5 tw-rounded-xl tw-bg-slate-50 ${item.color}`}>
                                {item.icon}
                            </div>
                            <div className={`tw-flex tw-items-center tw-gap-1 tw-text-xs tw-font-bold ${item.change >= 0 ? 'tw-text-emerald-500' : 'tw-text-red-500'}`}>
                                {item.change >= 0 ? <FiArrowUpRight /> : <FiArrowDownRight />}
                                {Math.abs(item.change)}%
                            </div>
                        </div>
                        <div>
                            <p className="tw-text-sm tw-font-medium tw-text-slate-500">{item.title}</p>
                            <h3 className="tw-text-2xl tw-font-bold tw-text-slate-900 tw-mt-1">{item.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-8">
                {/* Large Chart Section */}
                <div className="lg:tw-col-span-2 tw-bg-white tw-p-6 tw-rounded-3xl tw-border tw-border-slate-100 tw-shadow-sm">
                    <div className="tw-flex tw-items-center tw-justify-between tw-mb-6">
                        <h2 className="tw-text-lg tw-font-bold tw-text-slate-900">Revenue Analytics</h2>
                        <select className="tw-bg-slate-50 tw-border-none tw-text-xs tw-font-bold tw-text-slate-500 tw-rounded-lg tw-p-2 focus:tw-ring-0">
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                        </select>
                    </div>
                    <div className="tw-h-[350px] tw-w-full">
                        <Chart />
                    </div>
                </div>

                {/* Sidebar/Activity Section */}
                <div className="tw-bg-slate-900 tw-p-6 tw-rounded-3xl tw-text-white tw-shadow-xl">
                    <h2 className="tw-text-lg tw-font-bold tw-mb-6">System Health</h2>
                    <div className="tw-space-y-6">
                        <div className="tw-flex tw-justify-between tw-items-center">
                            <span className="tw-text-slate-400 tw-text-sm">Server Uptime</span>
                            <span className="tw-text-emerald-400 tw-text-sm tw-font-mono">99.9%</span>
                        </div>
                        <div className="tw-w-full tw-bg-slate-800 tw-h-1.5 tw-rounded-full">
                            <div className="tw-bg-emerald-400 tw-h-full tw-w-[99%] tw-rounded-full" />
                        </div>
                        <p className="tw-text-xs tw-text-slate-400 tw-leading-relaxed">
                            All systems are currently running optimally. No critical incidents reported in the last 24 hours.
                        </p>
                        <button className="tw-w-full tw-py-3 tw-mt-4 tw-bg-white/10 tw-rounded-xl tw-text-sm tw-font-bold hover:tw-bg-white/20 tw-transition-all">
                            View Logs
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;