import { useEffect, useState } from "react";
import axios from "axios";

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
            });
    }, []);

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <div className="tw-flex tw-items-center tw-justify-between tw-mb-5">
                <h1 className="tw-text-2xl tw-font-bold tw-mb-5">Users</h1>

                {/* 🔍 Search */}
                <input
                    type="text"
                    placeholder="Search users..."
                    className="tw-border tw-p-2 tw-rounded-lg tw-mb-4"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>


            {/* 📊 Table */}
            <div className="tw-bg-white tw-shadow tw-rounded-xl tw-overflow-hidden">
                <table className="tw-w-full">
                    <thead className="tw-bg-gray-100">
                        <tr>
                            <th className="tw-p-3 tw-text-left">Name</th>
                            <th className="tw-p-3 tw-text-left">Email</th>
                            <th className="tw-p-3 tw-text-left">Company</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr key={user.id} className="hover:tw-bg-gray-50">
                                <td className="tw-p-3">{user.name}</td>
                                <td className="tw-p-3">{user.email}</td>
                                <td className="tw-p-3">{user.company.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;