import { useState } from "react";

const Settings = () => {
  const [form, setForm] = useState({
    name: "Hammad",
    email: "hammad@gmail.com",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings Saved!");
  };

  return (
    <div className="tw-max-w-xl">
      <h1 className="tw-text-2xl tw-font-bold tw-mb-5">Settings</h1>

      <form
        onSubmit={handleSubmit}
        className="tw-bg-white tw-p-6 tw-rounded-2xl tw-shadow"
      >
        {/* Name */}
        <div className="tw-mb-4">
          <label className="tw-block tw-text-sm tw-mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="tw-w-full tw-border tw-p-2 tw-rounded-lg"
          />
        </div>

        {/* Email */}
        <div className="tw-mb-4">
          <label className="tw-block tw-text-sm tw-mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="tw-w-full tw-border tw-p-2 tw-rounded-lg"
          />
        </div>

        {/* Password */}
        <div className="tw-mb-4">
          <label className="tw-block tw-text-sm tw-mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="tw-w-full tw-border tw-p-2 tw-rounded-lg"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="tw-bg-red-500 tw-text-white tw-px-4 tw-py-2 tw-rounded-lg hover:tw-bg-red-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;