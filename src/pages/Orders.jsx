import { useState } from "react";

const Orders = () => {
  const [orders] = useState([
    { id: 1, name: "Hammad", amount: "$120", status: "Completed" },
    { id: 2, name: "Ali", amount: "$80", status: "Pending" },
    { id: 3, name: "Ahmed", amount: "$200", status: "Completed" },
  ]);

  return (
    <div>
      <h1 className="tw-text-2xl tw-font-bold tw-mb-5">Orders</h1>

      <div className="tw-bg-white tw-shadow tw-rounded-xl tw-overflow-hidden">
        <table className="tw-w-full">
          <thead className="tw-bg-gray-100">
            <tr>
              <th className="tw-p-3 tw-text-left">Order ID</th>
              <th className="tw-p-3 tw-text-left">Customer</th>
              <th className="tw-p-3 tw-text-left">Amount</th>
              <th className="tw-p-3 tw-text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:tw-bg-gray-50">
                <td className="tw-p-3">{order.id}</td>
                <td className="tw-p-3">{order.name}</td>
                <td className="tw-p-3">{order.amount}</td>

                <td className="tw-p-3">
                  <span
                    className={`tw-px-2 tw-py-1 tw-rounded-full tw-text-white tw-text-sm ${
                      order.status === "Completed"
                        ? "tw-bg-green-500"
                        : "tw-bg-yellow-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;