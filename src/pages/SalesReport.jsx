import React from 'react';
import { FiTrendingUp, FiDollarSign, FiPackage, FiArrowUpRight, FiPieChart, FiDownload } from "react-icons/fi";

const SalesReport = () => {
    const stats = [
        { label: "Total Revenue", value: "$45,231.89", icon: <FiDollarSign />, trend: "+12.5%", color: "tw-text-emerald-500" },
        { label: "Avg. Order Value", value: "$142.00", icon: <FiPieChart />, trend: "+2.4%", color: "tw-text-indigo-500" },
        { label: "Items Sold", value: "1,240", icon: <FiPackage />, trend: "+8.2%", color: "tw-text-blue-500" },
    ];

    const products = [
        { name: "React Admin Template", sales: 420, revenue: "$12,400", status: "Hot" },
        { name: "Tailwind UI Kit", sales: 310, revenue: "$8,900", status: "Stable" },
        { name: "NodeJS Backend Pro", sales: 150, revenue: "$4,500", status: "Low" },
    ];

    return (
        <div className="tw-p-6 md:tw-p-10 tw-bg-white tw-min-h-screen tw-animate-in tw-fade-in tw-duration-500">
            <header className="tw-mb-10 tw-flex tw-justify-between tw-items-end">
                <div>
                    <h1 className="tw-text-3xl tw-font-black tw-text-slate-900">Financial Insights</h1>
                    <p className="tw-text-slate-500 tw-font-medium">Detailed revenue and sales breakdown.</p>
                </div>
                <button className="tw-flex tw-items-center tw-gap-2 tw-bg-slate-100 tw-px-4 tw-py-2 tw-rounded-xl tw-text-sm tw-font-bold hover:tw-bg-slate-200 tw-transition-colors">
                    <FiDownload /> Export CSV
                </button>
            </header>

            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6 tw-mb-10">
                {stats.map((stat, i) => (
                    <div key={i} className="tw-bg-slate-50 tw-p-8 tw-rounded-[2.5rem] tw-border tw-border-slate-100">
                        <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
                            <div className={`tw-p-3 tw-rounded-2xl tw-bg-white tw-shadow-sm ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <span className="tw-text-xs tw-font-black tw-text-emerald-500 tw-flex tw-items-center tw-gap-1">
                                <FiArrowUpRight /> {stat.trend}
                            </span>
                        </div>
                        <p className="tw-text-xs tw-font-bold tw-text-slate-400 tw-uppercase tw-tracking-widest">{stat.label}</p>
                        <h3 className="tw-text-3xl tw-font-black tw-text-slate-900 tw-mt-1">{stat.value}</h3>
                    </div>
                ))}
            </div>

            <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-10">
                {/* Product Performance Table */}
                <div className="tw-bg-white tw-border tw-border-slate-100 tw-rounded-[2.5rem] tw-p-8 tw-shadow-sm">
                    <h2 className="tw-text-xl tw-font-black tw-text-slate-900 tw-mb-6">Top Selling Products</h2>
                    <div className="tw-overflow-x-auto">
                        <table className="tw-w-full tw-text-left">
                            <thead>
                                <tr className="tw-border-b tw-border-slate-50">
                                    <th className="tw-pb-4 tw-text-xs tw-font-black tw-text-slate-400 tw-uppercase">Product</th>
                                    <th className="tw-pb-4 tw-text-xs tw-font-black tw-text-slate-400 tw-uppercase">Sales</th>
                                    <th className="tw-pb-4 tw-text-xs tw-font-black tw-text-slate-400 tw-uppercase">Revenue</th>
                                </tr>
                            </thead>
                            <tbody className="tw-divide-y tw-divide-slate-50">
                                {products.map((p, i) => (
                                    <tr key={i} className="group hover:tw-bg-slate-50/50 tw-transition-colors">
                                        <td className="tw-py-4 tw-text-sm tw-font-bold tw-text-slate-700">{p.name}</td>
                                        <td className="tw-py-4 tw-text-sm tw-text-slate-500">{p.sales}</td>
                                        <td className="tw-py-4 tw-text-sm tw-font-black tw-text-slate-900">{p.revenue}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Secondary Forecast Visual */}
                <div className="tw-bg-red-500 tw-p-8 tw-rounded-[2.5rem] tw-text-white tw-flex tw-flex-col tw-justify-center">
                    <h2 className="tw-text-2xl tw-font-black tw-mb-2">Next Month Forecast</h2>
                    <p className="tw-text-red-100 tw-mb-8">Based on current trajectory, we expect a 14% increase in sales.</p>
                    <div className="tw-h-32 tw-bg-white/10 tw-rounded-2xl tw-border tw-border-white/20 tw-flex tw-items-center tw-justify-center">
                        <span className="tw-text-xs tw-font-bold">REVENUE CHART PLACEHOLDER</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesReport;