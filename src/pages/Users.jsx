import { useEffect, useState } from "react";
import axios from "axios";
import { FiSearch, FiMail, FiBriefcase, FiUser } from "react-icons/fi";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="tw-p-6 tw-max-w-6xl tw-mx-auto">
      {/* Header Section */}
      <div className="tw-flex tw-flex-col md:tw-flex-row md:tw-items-center tw-justify-between tw-gap-4 tw-mb-8">
        <div>
          <h1 className="tw-text-3xl tw-font-bold tw-text-slate-900">User Directory</h1>
          <p className="tw-text-slate-500 tw-mt-1">Manage and view all registered team members.</p>
        </div>

        <div className="tw-relative tw-w-full md:tw-w-72">
          <FiSearch className="tw-absolute tw-left-3 tw-top-1/2 -tw-translate-y-1/2 tw-text-slate-400" />
          <input
            type="text"
            placeholder="Search by name or email..."
            className="tw-w-full tw-pl-10 tw-pr-4 tw-py-2.5 tw-bg-white tw-border tw-border-slate-200 tw-rounded-xl tw-shadow-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500/20 focus:tw-border-indigo-500 tw-transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="tw-bg-white tw-border tw-border-slate-100 tw-shadow-xl tw-shadow-slate-200/50 tw-rounded-2xl tw-overflow-hidden">
        <div className="tw-overflow-x-auto">
          <table className="tw-w-full tw-text-left">
            <thead>
              <tr className="tw-bg-slate-50/50 tw-border-b tw-border-slate-100">
                <th className="tw-p-4 tw-text-xs tw-font-bold tw-text-slate-500 tw-uppercase tw-tracking-wider">Member</th>
                <th className="tw-p-4 tw-text-xs tw-font-bold tw-text-slate-500 tw-uppercase tw-tracking-wider">Email</th>
                <th className="tw-p-4 tw-text-xs tw-font-bold tw-text-slate-500 tw-uppercase tw-tracking-wider">Company</th>
                <th className="tw-p-4 tw-text-xs tw-font-bold tw-text-slate-500 tw-uppercase tw-tracking-wider tw-text-right">Action</th>
              </tr>
            </thead>

            <tbody className="tw-divide-y tw-divide-slate-50">
              {loading ? (
                // Skeleton Loader Rows
                [...Array(5)].map((_, i) => (
                  <tr key={i} className="tw-animate-pulse">
                    <td className="tw-p-4"><div className="tw-h-10 tw-w-40 tw-bg-slate-100 tw-rounded-lg" /></td>
                    <td className="tw-p-4"><div className="tw-h-4 tw-w-48 tw-bg-slate-50 tw-rounded" /></td>
                    <td className="tw-p-4"><div className="tw-h-4 tw-w-32 tw-bg-slate-50 tw-rounded" /></td>
                    <td className="tw-p-4"><div className="tw-h-8 tw-w-16 tw-bg-slate-100 tw-rounded-md tw-ml-auto" /></td>
                  </tr>
                ))
              ) : filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:tw-bg-indigo-50/30 tw-transition-colors tw-group">
                    <td className="tw-p-4">
                      <div className="tw-flex tw-items-center tw-gap-3">
                        <div className="tw-w-10 tw-h-10 tw-rounded-full tw-bg-gradient-to-br tw-from-indigo-500 tw-to-purple-500 tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold tw-shadow-sm">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="tw-text-sm tw-font-semibold tw-text-slate-900">{user.name}</p>
                          <p className="tw-text-xs tw-text-slate-500">ID: {user.id + 1000}</p>
                        </div>
                      </div>
                    </td>
                    <td className="tw-p-4">
                      <div className="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-text-slate-600">
                        <FiMail className="tw-text-slate-400" />
                        {user.email}
                      </div>
                    </td>
                    <td className="tw-p-4">
                      <div className="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-text-slate-600">
                        <FiBriefcase className="tw-text-slate-400" />
                        {user.company.name}
                      </div>
                    </td>
                    <td className="tw-p-4 tw-text-right">
                      <button className="tw-text-xs tw-font-bold tw-text-indigo-600 hover:tw-text-indigo-800 tw-bg-indigo-50 tw-px-3 tw-py-1.5 tw-rounded-lg tw-transition-colors">
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="tw-p-10 tw-text-center tw-text-slate-400">
                    No users found matching "{search}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;