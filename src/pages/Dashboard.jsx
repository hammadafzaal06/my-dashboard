import { FiUsers, FiTrendingUp, FiShoppingBag, FiDollarSign, FiArrowUpRight, FiArrowDownRight, FiActivity } from "react-icons/fi";
import Chart from "../components/Chart";

const Dashboard = () => {
    const stats = [
        { title: "Total Users", value: "1,200", change: 12, icon: <FiUsers />, color: "tw-text-blue-600", bg: "tw-bg-blue-50" },
        { title: "Revenue", value: "$8,500", change: 8, icon: <FiDollarSign />, color: "tw-text-emerald-600", bg: "tw-bg-emerald-50" },
        { title: "Orders", value: "320", change: -5, icon: <FiShoppingBag />, color: "tw-text-orange-600", bg: "tw-bg-orange-50" },
        { title: "Growth", value: "15%", change: 3, icon: <FiTrendingUp />, color: "tw-text-indigo-600", bg: "tw-bg-indigo-50" },
    ];

    const activities = [
        { id: 1, user: "Afza Battol", action: "Purchased Premium Plan", time: "2 mins ago" },
        { id: 2, user: "Huzaifa Ali", action: "Updated profile picture", time: "1 hour ago" },
        { id: 3, user: "Admin", action: "System Backup Completed", time: "5 hours ago" },
    ];

    return (
        <div className="tw-min-h-screen tw-bg-slate-50 tw-p-6 md:tw-p-10">
            <header className="tw-mb-10 tw-flex tw-flex-col md:tw-flex-row md:tw-items-center tw-justify-between tw-gap-4">
                <div>
                    <h1 className="tw-text-3xl tw-font-black tw-text-slate-900 tw-tracking-tight">
                        Dashboard <span className="tw-text-slate-400 tw-font-medium tw-text-lg">/ Overview</span>
                    </h1>
                    <p className="tw-text-slate-500 tw-mt-1 tw-font-medium">Real-time system snapshot.</p>
                </div>
            </header>

            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-6 tw-mb-10">
                {stats.map((item, index) => (
                    <div key={index} className="tw-bg-white tw-p-6 tw-rounded-[2rem] tw-border tw-border-slate-100 tw-shadow-sm hover:tw-shadow-md tw-transition-all">
                        <div className="tw-flex tw-justify-between tw-items-start tw-mb-4">
                            <div className={`tw-p-3 tw-rounded-2xl ${item.bg} ${item.color}`}>
                                {item.icon}
                            </div>
                            <div className={`tw-flex tw-items-center tw-gap-1 tw-text-xs tw-font-black ${item.change >= 0 ? 'tw-text-emerald-500' : 'tw-text-rose-500'}`}>
                                {item.change >= 0 ? <FiArrowUpRight /> : <FiArrowDownRight />}
                                {Math.abs(item.change)}%
                            </div>
                        </div>
                        <div>
                            <p className="tw-text-xs tw-font-bold tw-text-slate-400 tw-uppercase tw-tracking-wider">{item.title}</p>
                            <h3 className="tw-text-3xl tw-font-black tw-text-slate-900 tw-mt-1">{item.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-8">
                <div className="lg:tw-col-span-2 tw-bg-white tw-p-8 tw-rounded-[2.5rem] tw-border tw-border-slate-100 tw-shadow-sm">
                    <h2 className="tw-text-xl tw-font-black tw-text-slate-900 tw-mb-6">Global Performance</h2>
                    <div className="tw-h-[350px] tw-w-full">
                        <Chart />
                    </div>
                </div>

                <div className="tw-flex tw-flex-col tw-gap-6">
                    {/* Activity Feed */}
                    <div className="tw-bg-white tw-p-8 tw-rounded-[2.5rem] tw-border tw-border-slate-100">
                        <h2 className="tw-text-lg tw-font-black tw-text-slate-900 tw-mb-6 tw-flex tw-items-center tw-gap-2">
                            <FiActivity className="tw-text-red-500" /> Recent Activity
                        </h2>
                        <div className="tw-space-y-6">
                            {activities.map((act) => (
                                <div key={act.id} className="tw-flex tw-gap-3">
                                    <div className="tw-w-2 tw-h-2 tw-mt-1.5 tw-rounded-full tw-bg-red-500" />
                                    <div>
                                        <p className="tw-text-sm tw-font-bold tw-text-slate-800">{act.user}</p>
                                        <p className="tw-text-xs tw-text-slate-500">{act.action}</p>
                                        <p className="tw-text-[10px] tw-text-slate-400 tw-mt-1">{act.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Compact Health Card */}
                    <div className="tw-bg-slate-900 tw-p-6 tw-rounded-[2.5rem] tw-text-white">
                        <div className="tw-flex tw-items-center tw-gap-3 tw-mb-4">
                            <div className="tw-w-2 tw-h-2 tw-bg-emerald-400 tw-rounded-full tw-animate-pulse" />
                            <span className="tw-text-xs tw-font-bold">SYSTEM OPERATIONAL</span>
                        </div>
                        <p className="tw-text-[10px] tw-text-slate-400">All services are currently healthy. Last check: 1 min ago.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;