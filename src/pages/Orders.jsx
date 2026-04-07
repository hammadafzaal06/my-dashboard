import { useState } from "react";
import { FiMoreVertical, FiEye, FiDownload } from "react-icons/fi";

const Orders = () => {
  const [orders] = useState([
    { id: "ORD-7291", name: "Hammad", email: "hammad@example.com", amount: "$120.00", status: "Completed", date: "Oct 24, 2023" },
    { id: "ORD-8402", name: "Ali", email: "ali@example.com", amount: "$80.50", status: "Pending", date: "Oct 25, 2023" },
    { id: "ORD-9103", name: "Ahmed", email: "ahmed@example.com", amount: "$200.00", status: "Completed", date: "Oct 25, 2023" },
  ]);

  return (
    <div className="tw-p-4 md:tw-p-8">
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-8">
        <div>
          <h1 className="tw-text-2xl tw-font-bold tw-text-slate-900">Recent Orders</h1>
          <p className="tw-text-slate-500 tw-text-sm">Manage and track your latest customer transactions.</p>
        </div>
        <button className="tw-bg-slate-900 tw-text-white tw-px-4 tw-py-2 tw-rounded-lg tw-text-sm tw-font-medium hover:tw-bg-slate-800 tw-transition-colors">
          Export CSV
        </button>
      </div>

      <div className="tw-bg-white tw-border tw-border-slate-100 tw-shadow-sm tw-rounded-2xl tw-overflow-hidden">
        <div className="tw-overflow-x-auto">
          <table className="tw-w-full tw-border-collapse">
            <thead>
              <tr className="tw-bg-slate-50/50 tw-border-b tw-border-slate-100">
                <th className="tw-p-4 tw-text-left tw-text-xs tw-font-semibold tw-text-slate-500 tw-uppercase tw-tracking-wider">Order ID</th>
                <th className="tw-p-4 tw-text-left tw-text-xs tw-font-semibold tw-text-slate-500 tw-uppercase tw-tracking-wider">Customer</th>
                <th className="tw-p-4 tw-text-left tw-text-xs tw-font-semibold tw-text-slate-500 tw-uppercase tw-tracking-wider">Status</th>
                <th className="tw-p-4 tw-text-left tw-text-xs tw-font-semibold tw-text-slate-500 tw-uppercase tw-tracking-wider">Amount</th>
                <th className="tw-p-4 tw-text-right tw-text-xs tw-font-semibold tw-text-slate-500 tw-uppercase tw-tracking-wider">Actions</th>
              </tr>
            </thead>

            <tbody className="tw-divide-y tw-divide-slate-50">
              {orders.map((order) => (
                <tr key={order.id} className="hover:tw-bg-slate-50/80 tw-transition-colors group">
                  <td className="tw-p-4">
                    <span className="tw-font-mono tw-text-sm tw-text-slate-600">{order.id}</span>
                  </td>
                  
                  <td className="tw-p-4">
                    <div className="tw-flex tw-items-center tw-gap-3">
                      <div className="tw-w-8 tw-h-8 tw-rounded-full tw-bg-red-50 tw-text-red-600 tw-flex tw-items-center tw-justify-center tw-text-xs tw-font-bold">
                        {order.name.charAt(0)}
                      </div>
                      <div>
                        <p className="tw-text-sm tw-font-semibold tw-text-slate-900">{order.name}</p>
                        <p className="tw-text-xs tw-text-slate-400">{order.email}</p>
                      </div>
                    </div>
                  </td>

                  <td className="tw-p-4">
                    <span
                      className={`tw-inline-flex tw-items-center tw-px-2.5 tw-py-0.5 tw-rounded-full tw-text-xs tw-font-medium ${
                        order.status === "Completed"
                          ? "tw-bg-emerald-50 tw-text-emerald-700"
                          : "tw-bg-amber-50 tw-text-amber-700"
                      }`}
                    >
                      <span className={`tw-w-1.5 tw-h-1.5 tw-rounded-full tw-mr-1.5 ${
                        order.status === "Completed" ? "tw-bg-emerald-500" : "tw-bg-amber-500"
                      }`} />
                      {order.status}
                    </span>
                  </td>

                  <td className="tw-p-4">
                    <span className="tw-text-sm tw-font-bold tw-text-slate-900">{order.amount}</span>
                  </td>

                  <td className="tw-p-4 tw-text-right">
                    <div className="tw-flex tw-justify-end tw-gap-2 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity">
                      <button className="tw-p-2 tw-text-slate-400 hover:tw-text-red-500 tw-transition-colors" title="View details">
                        <FiEye size={18} />
                      </button>
                      <button className="tw-p-2 tw-text-slate-400 hover:tw-text-slate-600 tw-transition-colors" title="Download Invoice">
                        <FiDownload size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;