import { useState, useMemo, useEffect } from "react";
import { FiEye, FiDownload, FiSearch, FiPackage, FiCheckCircle, FiClock, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Orders = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const [orders] = useState([
    { id: "ORD-7291", name: "Hammad", email: "hammad@example.com", items: 3, amount: "$120.00", status: "Completed", date: "Oct 24, 2023", method: "Express" },
    { id: "ORD-8402", name: "Ali", email: "ali@example.com", items: 1, amount: "$80.50", status: "Pending", date: "Oct 25, 2023", method: "Standard" },
    { id: "ORD-9103", name: "Ahmed", email: "ahmed@example.com", items: 5, amount: "$200.00", status: "Completed", date: "Oct 25, 2023", method: "Express" },
    { id: "ORD-2241", name: "Sara", email: "sara@example.com", items: 2, amount: "$45.00", status: "Cancelled", date: "Oct 26, 2023", method: "Standard" },
    { id: "ORD-1102", name: "Zain", email: "zain@example.com", items: 1, amount: "$12.99", status: "Pending", date: "Oct 27, 2023", method: "Local Pickup" },
    { id: "ORD-3301", name: "Fatima", email: "fatima@example.com", items: 4, amount: "$310.00", status: "Completed", date: "Oct 28, 2023", method: "Express" },
  ]);

  // 1. Filter the data first
  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesTab = activeTab === "All" || order.status === activeTab;
      const matchesSearch = 
        order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [orders, activeTab, searchQuery]);

  // 2. Calculate pagination slices based on filtered results
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

  // 3. Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, searchQuery]);

  return (
    <div className="tw-p-4 md:tw-p-8 tw-max-w-7xl tw-mx-auto">
      {/* Header & Stats Section (Omitted for brevity, keep your original) */}
      <div className="tw-flex tw-flex-col lg:tw-flex-row lg:tw-items-center tw-justify-between tw-gap-4 tw-mb-8">
        <div>
          <h1 className="tw-text-3xl tw-font-extrabold tw-text-slate-900 tw-tracking-tight">Order Management</h1>
          <p className="tw-text-slate-500 tw-mt-1">Manage {filteredOrders.length} filtered transactions.</p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="tw-bg-white tw-border tw-border-slate-200 tw-rounded-2xl tw-p-2 tw-mb-6 tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between tw-gap-4">
        <div className="tw-flex tw-p-1 tw-bg-slate-50 tw-rounded-xl">
          {["All", "Pending", "Completed", "Cancelled"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tw-px-4 tw-py-2 tw-text-xs tw-font-bold tw-rounded-lg tw-transition-all ${
                activeTab === tab ? "tw-bg-white tw-text-indigo-600 tw-shadow-sm" : "tw-text-slate-500 hover:tw-text-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="tw-relative tw-w-full md:tw-w-72">
          <FiSearch className="tw-absolute tw-left-3 tw-top-1/2 -tw-translate-y-1/2 tw-text-slate-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="tw-w-full tw-pl-10 tw-pr-4 tw-py-2 tw-bg-white tw-border tw-border-slate-200 tw-rounded-xl tw-text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="tw-bg-white tw-border tw-border-slate-200 tw-shadow-sm tw-rounded-2xl tw-overflow-hidden">
        <div className="tw-overflow-x-auto">
          <table className="tw-w-full tw-border-collapse">
            <thead>
               <tr className="tw-bg-slate-50/50 tw-border-b tw-border-slate-200">
                <th className="tw-p-4 tw-text-left tw-text-xs tw-font-black tw-text-slate-400 tw-uppercase">Order Info</th>
                <th className="tw-p-4 tw-text-left tw-text-xs tw-font-black tw-text-slate-400 tw-uppercase">Customer</th>
                <th className="tw-p-4 tw-text-left tw-text-xs tw-font-black tw-text-slate-400 tw-uppercase">Status</th>
                <th className="tw-p-4 tw-text-right tw-text-xs tw-font-black tw-text-slate-400 tw-uppercase">Total</th>
                <th className="tw-p-4 tw-text-right tw-text-xs tw-font-black tw-text-slate-400 tw-uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="tw-divide-y tw-divide-slate-100">
              {paginatedOrders.map((order) => (
                <tr key={order.id} className="hover:tw-bg-slate-50/50">
                  <td className="tw-p-4">
                    <p className="tw-font-bold tw-text-sm tw-text-indigo-600">{order.id}</p>
                    <p className="tw-text-[10px] tw-text-slate-400 tw-uppercase tw-font-bold">{order.date}</p>
                  </td>
                  <td className="tw-p-4">
                    <p className="tw-text-sm tw-font-bold tw-text-slate-900">{order.name}</p>
                    <p className="tw-text-xs tw-text-slate-500">{order.email}</p>
                  </td>
                  <td className="tw-p-4"><StatusBadge status={order.status} /></td>
                  <td className="tw-p-4 tw-text-right tw-font-black tw-text-slate-900">{order.amount}</td>
                  <td className="tw-p-4 tw-text-right">
                    <div className="tw-flex tw-justify-end tw-gap-1">
                      <button className="tw-p-2 tw-text-slate-400 hover:tw-text-indigo-600"><FiEye size={16} /></button>
                      <button className="tw-p-2 tw-text-slate-400 hover:tw-text-slate-900"><FiDownload size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- Pagination Footer --- */}
        <div className="tw-px-6 tw-py-4 tw-bg-slate-50/50 tw-border-t tw-border-slate-100 tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-justify-between tw-gap-4">
          <p className="tw-text-xs tw-font-bold tw-text-slate-500 tw-uppercase tw-tracking-widest">
            Showing <span className="tw-text-slate-900">{startIndex + 1}</span> to <span className="tw-text-slate-900">{Math.min(startIndex + itemsPerPage, filteredOrders.length)}</span> of {filteredOrders.length}
          </p>

          <div className="tw-flex tw-items-center tw-gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
              className="tw-p-2 tw-rounded-lg tw-border tw-border-slate-200 tw-bg-white hover:tw-bg-slate-50 disabled:tw-opacity-40 tw-transition-all"
            >
              <FiChevronLeft className="tw-text-slate-600" />
            </button>

            <div className="tw-flex tw-gap-1">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`tw-w-8 tw-h-8 tw-rounded-lg tw-text-xs tw-font-black tw-transition-all ${
                    currentPage === i + 1 
                      ? "tw-bg-slate-900 tw-text-white tw-shadow-lg" 
                      : "tw-bg-white tw-text-slate-600 tw-border tw-border-slate-200 hover:tw-border-slate-400"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              disabled={currentPage === totalPages || totalPages === 0}
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="tw-p-2 tw-rounded-lg tw-border tw-border-slate-200 tw-bg-white hover:tw-bg-slate-50 disabled:tw-opacity-40 tw-transition-all"
            >
              <FiChevronRight className="tw-text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Sub-Components (Keep your existing StatCard and StatusBadge)
const StatusBadge = ({ status }) => {
  const styles = {
    Completed: "tw-bg-emerald-50 tw-text-emerald-700 tw-border-emerald-100",
    Pending: "tw-bg-amber-50 tw-text-amber-700 tw-border-amber-100",
    Cancelled: "tw-bg-rose-50 tw-text-rose-700 tw-border-rose-100",
  };
  return (
    <span className={`tw-inline-flex tw-items-center tw-px-2.5 tw-py-1 tw-rounded-lg tw-text-[10px] tw-font-black tw-uppercase tw-tracking-wider tw-border ${styles[status]}`}>
      {status}
    </span>
  );
};

export default Orders;