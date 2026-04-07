import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FiSearch, FiMail, FiBriefcase, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4; // Change this to show more/less per page

  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("https://jsonplaceholder.typicode.com/users", { signal: controller.signal })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  // Filter users based on search
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Reset to page 1 whenever search changes
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="tw-p-6 tw-max-w-6xl tw-mx-auto">
      {/* Header Section */}
      <div className="tw-flex tw-flex-col md:tw-flex-row md:tw-items-center tw-justify-between tw-gap-4 tw-mb-8">
        <div>
          <h1 className="tw-text-3xl tw-font-bold tw-text-slate-900">Team Members</h1>
          <p className="tw-text-slate-500 tw-mt-1">View and manage all registered accounts within your system.</p>
        </div>

        <div className="tw-relative tw-w-full md:tw-w-80">
          <FiSearch className="tw-absolute tw-left-3 tw-top-1/2 -tw-translate-y-1/2 tw-text-slate-400 tw-z-10" />
          <input
            type="text"
            placeholder="Search by name or email..."
            className="tw-w-full tw-pl-10 tw-pr-4 tw-py-2.5 tw-bg-white tw-border tw-border-slate-200 tw-rounded-xl tw-shadow-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500/20 focus:tw-border-indigo-500 tw-transition-all"
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="tw-bg-white tw-border tw-border-slate-200 tw-shadow-sm tw-rounded-2xl tw-overflow-hidden">
        <div className="tw-overflow-x-auto">
          <table className="tw-w-full tw-text-left tw-border-collapse">
            <thead>
              <tr className="tw-bg-slate-50/80 tw-border-b tw-border-slate-200">
                <th className="tw-p-4 tw-text-xs tw-font-bold tw-text-slate-500 tw-uppercase tw-tracking-wider">Member</th>
                <th className="tw-p-4 tw-text-xs tw-font-bold tw-text-slate-500 tw-uppercase tw-tracking-wider">Contact Info</th>
                <th className="tw-p-4 tw-text-xs tw-font-bold tw-text-slate-500 tw-uppercase tw-tracking-wider">Company</th>
                <th className="tw-p-4 tw-text-xs tw-font-bold tw-text-slate-500 tw-uppercase tw-tracking-wider tw-text-right">Action</th>
              </tr>
            </thead>

            <tbody className="tw-divide-y tw-divide-slate-100">
              {loading ? (
                [...Array(usersPerPage)].map((_, i) => (
                  <tr key={i} className="tw-animate-pulse">
                    <td className="tw-p-4"><div className="tw-h-10 tw-w-40 tw-bg-slate-100 tw-rounded-lg" /></td>
                    <td className="tw-p-4"><div className="tw-h-4 tw-w-48 tw-bg-slate-50 tw-rounded" /></td>
                    <td className="tw-p-4"><div className="tw-h-4 tw-w-32 tw-bg-slate-50 tw-rounded" /></td>
                    <td className="tw-p-4"><div className="tw-h-8 tw-w-16 tw-bg-slate-100 tw-rounded-md tw-ml-auto" /></td>
                  </tr>
                ))
              ) : currentUsers.length > 0 ? (
                currentUsers.map((user) => (
                  <tr key={user.id} className="hover:tw-bg-slate-50/50 tw-transition-colors">
                    <td className="tw-p-4">
                      <div className="tw-flex tw-items-center tw-gap-3">
                        <div className="tw-w-10 tw-h-10 tw-rounded-xl tw-bg-indigo-600 tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold tw-text-sm">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="tw-text-sm tw-font-semibold tw-text-slate-900">{user.name}</p>
                          <p className="tw-text-xs tw-text-slate-500">ID: #{user.id + 1000}</p>
                        </div>
                      </div>
                    </td>
                    <td className="tw-p-4 tw-text-sm tw-text-slate-600">
                      <div className="tw-flex tw-items-center tw-gap-2">
                        <FiMail className="tw-text-slate-400" />
                        {user.email}
                      </div>
                    </td>
                    <td className="tw-p-4">
                      <div className="tw-inline-flex tw-items-center tw-gap-2 tw-px-2.5 tw-py-1 tw-bg-slate-100 tw-text-slate-700 tw-rounded-md tw-text-xs tw-font-medium">
                        <FiBriefcase className="tw-text-slate-500" />
                        {user.company.name}
                      </div>
                    </td>
                    <td className="tw-p-4 tw-text-right">
                      <button
                        onClick={() => navigate(`/users/${user.id}`)}
                        className="tw-inline-flex tw-items-center tw-gap-1.5 tw-text-xs tw-font-bold tw-text-indigo-600 hover:tw-text-white hover:tw-bg-indigo-600 tw-border tw-border-indigo-100 hover:tw-border-indigo-600 tw-px-4 tw-py-2 tw-rounded-xl tw-transition-all"
                      >
                        View Profile
                        <FiExternalLink />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="tw-p-20 tw-text-center tw-text-slate-500">
                    No results found for "{search}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        {!loading && totalPages > 1 && (
          <div className="tw-px-4 tw-py-4 tw-bg-slate-50/50 tw-border-t tw-border-slate-200 tw-flex tw-items-center tw-justify-between">
            <p className="tw-text-sm tw-text-slate-500">
              Showing <span className="tw-font-semibold tw-text-slate-700">{indexOfFirstUser + 1}</span> to <span className="tw-font-semibold tw-text-slate-700">{Math.min(indexOfLastUser, filteredUsers.length)}</span> of <span className="tw-font-semibold tw-text-slate-700">{filteredUsers.length}</span> results
            </p>

            <div className="tw-flex tw-items-center tw-gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
                className="tw-p-2 tw-rounded-lg tw-border tw-border-slate-200 tw-bg-white hover:tw-bg-slate-50 disabled:tw-opacity-50 disabled:tw-cursor-not-allowed tw-transition-colors"
              >
                <FiChevronLeft className="tw-text-slate-600" />
              </button>

              <div className="tw-flex tw-gap-1">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`tw-w-9 tw-h-9 tw-rounded-lg tw-text-sm tw-font-semibold tw-transition-all ${currentPage === i + 1
                        ? "tw-bg-indigo-600 tw-text-white tw-shadow-md tw-shadow-indigo-200"
                        : "tw-bg-white tw-text-slate-600 tw-border tw-border-slate-200 hover:tw-border-indigo-300"
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="tw-p-2 tw-rounded-lg tw-border tw-border-slate-200 tw-bg-white hover:tw-bg-slate-50 disabled:tw-opacity-50 disabled:tw-cursor-not-allowed tw-transition-colors"
              >
                <FiChevronRight className="tw-text-slate-600" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;