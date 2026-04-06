import { useEffect, useState } from "react";

const Settings = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    newPassword: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setForm({
        ...form,
        name: user.name,
        email: user.email,
      });
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

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    // 🔐 password check
    if (form.password && form.password !== user.password) {
      alert("Current password is incorrect");
      return;
    }

    const updatedUser = {
      name: form.name,
      email: form.email,
      password: form.newPassword || user.password,
      image: form.image || user.image,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    alert("Profile Updated!");
    window.location.reload(); // simple refresh for now
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
          <label>Name</label>
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
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="tw-w-full tw-border tw-p-2 tw-rounded-lg"
          />
        </div>

        {/* Current Password */}
        <div className="tw-mb-4">
          <label>Current Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="tw-w-full tw-border tw-p-2 tw-rounded-lg"
          />
        </div>

        {/* New Password */}
        <div className="tw-mb-4">
          <label>New Password</label>
          <input
            type="password"
            name="newPassword"
            onChange={handleChange}
            className="tw-w-full tw-border tw-p-2 tw-rounded-lg"
          />
        </div>
        {/* Profile Image */}
        <div className="tw-mb-4">
          <label>Profile Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e)}
            className="tw-w-full"
          />
        </div>
        <button className="tw-bg-red-500 tw-text-white tw-px-4 tw-py-2 tw-rounded-lg">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;