import React, { useState, useEffect } from 'react';
import { FiDollarSign, FiPackage, FiArrowUpRight, FiPieChart, FiDownload } from "react-icons/fi";
import { fetchSalesFromAPI } from "../utils/orderService";
import { exportSalesPDF } from "../utils/generateSalesReport";

const SalesReport = () => {
    const [salesData, setSalesData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSales = async () => {
            setLoading(true);
            const data = await fetchSalesFromAPI();
            setSalesData(data);
            setLoading(false);
        };
        getSales();
    }, []);

    if (loading) {
        return (
            <div className="tw-flex tw-items-center tw-justify-center tw-h-screen">
                <div className="tw-animate-spin tw-rounded-full tw-h-10 tw-w-10 tw-border-b-2 tw-border-indigo-600"></div>
            </div>
        );
    }

    const stats = [
        { label: "Total Revenue", value: `$${salesData?.totalRevenue}`, icon: <FiDollarSign />, trend: salesData?.revenueTrend, color: "tw-text-emerald-500" },
        { label: "Avg. Order Value", value: `$${salesData?.avgOrderValue}`, icon: <FiPieChart />, trend: "+2.4%", color: "tw-text-indigo-500" },
        { label: "Items Sold", value: salesData?.itemsSold, icon: <FiPackage />, trend: "+8.2%", color: "tw-text-blue-500" },
    ];

    return (
        <div className="tw-p-6 md:tw-p-10 tw-bg-white tw-min-h-screen">
            <header className="tw-mb-10 tw-flex tw-justify-between tw-items-end">
                <div>
                    <h1 className="tw-text-3xl tw-font-black tw-text-slate-900">Financial Insights</h1>
                    <p className="tw-text-slate-500 tw-font-medium">Real-time revenue breakdown.</p>
                </div>
                <button
                    onClick={() => exportSalesPDF(salesData)}
                    className="tw-flex tw-items-center tw-gap-2 tw-bg-slate-100 tw-px-4 tw-py-2 tw-rounded-xl tw-text-sm tw-font-bold hover:tw-bg-slate-900 hover:tw-text-white tw-transition-all"
                >
                    <FiDownload /> Export PDF
                </button>
            </header>

            {/* Dynamic Stats Cards */}
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6 tw-mb-10">
                {stats.map((stat, i) => (
                    <div key={i} className="tw-bg-slate-50 tw-p-8 tw-rounded-[2.5rem] tw-border tw-border-slate-100">
                        <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
                            <div className={`tw-p-3 tw-rounded-2xl tw-bg-white shadow-sm ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <span className="tw-text-xs tw-font-black tw-text-emerald-500 tw-flex tw-items-center tw-gap-1">
                                <FiArrowUpRight /> {stat.trend}
                            </span>
                        </div>
                        <p className="tw-text-xs tw-font-bold tw-text-slate-400 tw-uppercase">{stat.label}</p>
                        <h3 className="tw-text-3xl tw-font-black tw-text-slate-900 tw-mt-1">{stat.value}</h3>
                    </div>
                ))}
            </div>

            <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-10">
                {/* Dynamic Product Table */}
                <div className="tw-bg-white tw-border tw-border-slate-100 tw-rounded-[2.5rem] tw-p-8 shadow-sm">
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
                                {salesData?.products?.map((p, i) => (
                                    <tr key={i} className="hover:tw-bg-slate-50/50">
                                        <td className="tw-py-4 tw-text-sm tw-font-bold tw-text-slate-700">{p.name}</td>
                                        <td className="tw-py-4 tw-text-sm tw-text-slate-500">{p.sales}</td>
                                        <td className="tw-py-4 tw-text-sm tw-font-black tw-text-slate-900">{p.revenue}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Forecast Card */}
                <div className="tw-bg-indigo-600 tw-p-8 tw-rounded-[2.5rem] tw-text-white tw-flex tw-flex-col tw-justify-center">
                    <h2 className="tw-text-2xl tw-font-black mb-2">Next Month Forecast</h2>
                    <p className="tw-text-indigo-100 mb-8">Growth expected based on {salesData?.itemsSold} units sold.</p>
                    <div className="tw-h-32 tw-bg-white/10 tw-rounded-2xl tw-border tw-border-white/20 tw-flex tw-items-center tw-justify-center">
                        <span className="tw-text-xs tw-font-bold">CHART DATA SYNCED</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesReport;