import { useEffect, useState } from "react";
import { FiCamera, FiLock, FiUser, FiMail } from "react-icons/fi";

const Settings = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    newPassword: "",
    image: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setForm((prev) => ({
        ...prev,
        name: user.name || "",
        email: user.email || "",
        image: user.image || null,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result });
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    if (form.password && form.password !== user.password) {
      alert("Current password is incorrect");
      return;
    }

    const updatedUser = {
      ...user,
      name: form.name,
      email: form.email,
      password: form.newPassword || user.password,
      image: form.image || user.image,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Profile Updated!");
    window.location.reload();
  };

  return (
    <div className="tw-max-w-2xl tw-mx-auto tw-py-8 tw-px-4">
      <header className="tw-mb-8">
        <h1 className="tw-text-3xl tw-font-bold tw-text-slate-900">Account Settings</h1>
        <p className="tw-text-slate-500 tw-mt-1">Manage your profile information and security preferences.</p>
      </header>

      <form onSubmit={handleSubmit} className="tw-space-y-6">
        {/* Profile Section */}
        <section className="tw-bg-white tw-p-6 tw-rounded-2xl tw-shadow-sm tw-border tw-border-slate-100">
          <h2 className="tw-text-lg tw-font-semibold tw-mb-6 tw-flex tw-items-center tw-gap-2">
            <FiUser className="tw-text-red-500" /> Public Profile
          </h2>

          <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-gap-8 tw-mb-8">
            <div className="tw-relative tw-group">
              <div className="tw-w-24 tw-h-24 tw-rounded-full tw-overflow-hidden tw-bg-slate-100 tw-border-2 tw-border-white tw-shadow-md">
                {form.image ? (
                  <img src={form.image} alt="Preview" className="tw-w-full tw-h-full tw-object-cover" />
                ) : (
                  <div className="tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-text-slate-400">
                    <FiUser size={40} />
                  </div>
                )}
              </div>
              <label className="tw-absolute tw-bottom-0 tw-right-0 tw-bg-red-500 tw-p-2 tw-rounded-full tw-text-white tw-cursor-pointer tw-shadow-lg hover:tw-bg-red-600 tw-transition-colors">
                <FiCamera size={16} />
                <input type="file" className="tw-hidden" accept="image/*" onChange={handleImageUpload} />
              </label>
            </div>
            
            <div className="tw-flex-1 tw-w-full tw-space-y-4">
              <div>
                <label className="tw-block tw-text-sm tw-font-medium tw-text-slate-700 tw-mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="tw-w-full tw-border tw-border-slate-200 tw-px-4 tw-py-2.5 tw-rounded-xl focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-red-500/20 focus:tw-border-red-500 tw-transition-all"
                />
              </div>
              <div>
                <label className="tw-block tw-text-sm tw-font-medium tw-text-slate-700 tw-mb-1">Email Address</label>
                <div className="tw-relative">
                  <FiMail className="tw-absolute tw-left-4 tw-top-1/2 -tw-translate-y-1/2 tw-text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="tw-w-full tw-border tw-border-slate-200 tw-pl-11 tw-pr-4 tw-py-2.5 tw-rounded-xl focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-red-500/20 focus:tw-border-red-500 tw-transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="tw-bg-white tw-p-6 tw-rounded-2xl tw-shadow-sm tw-border tw-border-slate-100">
          <h2 className="tw-text-lg tw-font-semibold tw-mb-6 tw-flex tw-items-center tw-gap-2">
            <FiLock className="tw-text-red-500" /> Security
          </h2>
          
          <div className="tw-grid md:tw-grid-cols-2 tw-gap-4">
            <div>
              <label className="tw-block tw-text-sm tw-font-medium tw-text-slate-700 tw-mb-1">Current Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="••••••••"
                className="tw-w-full tw-border tw-border-slate-200 tw-px-4 tw-py-2.5 tw-rounded-xl focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-red-500/20 focus:tw-border-red-500 tw-transition-all"
              />
            </div>
            <div>
              <label className="tw-block tw-text-sm tw-font-medium tw-text-slate-700 tw-mb-1">New Password</label>
              <input
                type="password"
                name="newPassword"
                onChange={handleChange}
                placeholder="Leave blank to keep current"
                className="tw-w-full tw-border tw-border-slate-200 tw-px-4 tw-py-2.5 tw-rounded-xl focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-red-500/20 focus:tw-border-red-500 tw-transition-all"
              />
            </div>
          </div>
        </section>

        {/* Action Bar */}
        <div className="tw-flex tw-items-center tw-justify-end tw-gap-4 tw-pt-4">
          <button 
            type="button" 
            onClick={() => window.location.reload()}
            className="tw-px-6 tw-py-2.5 tw-rounded-xl tw-text-slate-600 tw-font-medium hover:tw-bg-slate-100 tw-transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit"
            className="tw-bg-red-500 tw-text-white tw-px-8 tw-py-2.5 tw-rounded-xl tw-font-bold tw-shadow-lg tw-shadow-red-500/30 hover:tw-bg-red-600 active:tw-scale-95 tw-transition-all"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;