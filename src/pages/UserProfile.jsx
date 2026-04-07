import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FiArrowLeft, FiMail, FiPhone, FiGlobe, FiMapPin, FiBriefcase } from "react-icons/fi";

const UserProfile = () => {
    const { id } = useParams(); // Grabs the 'id' from the URL
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch only the specific user by ID
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                setUser(res.data);
                setLoading(false);
            })
            .catch(() => {
                // If user doesn't exist, send them back to the list
                navigate("/users");
            });
    }, [id, navigate]);

    if (loading) {
        return (
            <div className="tw-flex tw-items-center tw-justify-center tw-h-96">
                <div className="tw-animate-spin tw-rounded-full tw-h-12 tw-w-12 tw-border-t-2 tw-border-b-2 tw-border-indigo-500"></div>
            </div>
        );
    }

    return (
        <div className="tw-max-w-5xl tw-mx-auto">
            {/* Back Header */}
            <div className="tw-mb-6">
                <button
                    onClick={() => navigate("/users")}
                    className="tw-flex tw-items-center tw-gap-2 tw-text-slate-500 hover:tw-text-indigo-600 tw-font-semibold tw-transition-colors"
                >
                    <FiArrowLeft /> Back to Directory
                </button>
            </div>

            {/* Profile Card */}
            <div className="tw-bg-white tw-rounded-3xl tw-shadow-sm tw-border tw-border-slate-200 tw-overflow-hidden">
                {/* Banner */}
                <div className="tw-h-40 tw-bg-gradient-to-r tw-from-indigo-600 tw-to-violet-600" />

                <div className="tw-px-8 tw-pb-10">
                    {/* Avatar & Title Row */}
                    <div className="tw-relative tw-flex tw-flex-col md:tw-flex-row tw-items-end tw-gap-6 -tw-mt-16">
                        <div className="tw-w-32 tw-h-32 tw-rounded-3xl tw-bg-white tw-p-1.5 tw-shadow-xl">
                            <div className="tw-w-full tw-h-full tw-rounded-2xl tw-bg-slate-100 tw-flex tw-items-center tw-justify-center tw-text-4xl tw-font-bold tw-text-indigo-600">
                                {user.name.charAt(0)}
                            </div>
                        </div>
                        <div className="tw-flex-1 tw-pb-2">
                            <h1 className="tw-text-3xl tw-font-bold tw-text-slate-900">{user.name}</h1>
                            <p className="tw-text-slate-500 tw-font-medium">@{user.username} • Verified Member</p>
                        </div>
                        <div className="tw-flex tw-gap-3 tw-mb-2">
                            <button className="tw-px-5 tw-py-2 tw-bg-indigo-600 tw-text-white tw-rounded-xl tw-font-bold hover:tw-bg-indigo-700 tw-shadow-lg tw-shadow-indigo-200 tw-transition-all">
                                Send Message
                            </button>
                        </div>
                    </div>

                    <hr className="tw-my-10 tw-border-slate-100" />

                    {/* Details Grid */}
                    <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-10">
                        {/* Contact Section */}
                        <div>
                            <h3 className="tw-text-xs tw-font-black tw-text-slate-400 tw-uppercase tw-tracking-widest tw-mb-6">Contact Details</h3>
                            <div className="tw-space-y-5">
                                <DetailRow icon={<FiMail />} label="Email" value={user.email} />
                                <DetailRow icon={<FiPhone />} label="Phone" value={user.phone} />
                                <DetailRow icon={<FiGlobe />} label="Website" value={user.website} />
                            </div>
                        </div>

                        {/* Business Section */}
                        <div>
                            <h3 className="tw-text-xs tw-font-black tw-text-slate-400 tw-uppercase tw-tracking-widest tw-mb-6">Professional</h3>
                            <div className="tw-p-5 tw-bg-slate-50 tw-rounded-2xl tw-border tw-border-slate-100">
                                <div className="tw-flex tw-items-center tw-gap-3 tw-mb-3">
                                    <div className="tw-p-2 tw-bg-white tw-rounded-lg tw-shadow-sm tw-text-indigo-600">
                                        <FiBriefcase />
                                    </div>
                                    <span className="tw-font-bold tw-text-slate-900">{user.company.name}</span>
                                </div>
                                <p className="tw-text-sm tw-text-slate-500 tw-leading-relaxed">
                                    "{user.company.catchPhrase}"
                                </p>
                            </div>
                        </div>

                        {/* Address Section */}
                        <div>
                            <h3 className="tw-text-xs tw-font-black tw-text-slate-400 tw-uppercase tw-tracking-widest tw-mb-6">Location</h3>
                            <div className="tw-flex tw-items-start tw-gap-3">
                                <div className="tw-p-2 tw-bg-rose-50 tw-rounded-lg tw-text-rose-600">
                                    <FiMapPin />
                                </div>
                                <div>
                                    <p className="tw-text-sm tw-font-bold tw-text-slate-900">
                                        {user.address.street}, {user.address.suite}
                                    </p>
                                    <p className="tw-text-sm tw-text-slate-500">
                                        {user.address.city}, {user.address.zipcode}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Reusable Detail Row Component
const DetailRow = ({ icon, label, value }) => (
    <div className="tw-flex tw-items-center tw-gap-4">
        <div className="tw-text-slate-400 tw-text-lg">{icon}</div>
        <div>
            <p className="tw-text-[10px] tw-font-bold tw-text-slate-400 tw-uppercase tw-mb-0.5">{label}</p>
            <p className="tw-text-sm tw-text-slate-700 tw-font-semibold">{value}</p>
        </div>
    </div>
);

export default UserProfile;