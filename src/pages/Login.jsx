import { useState } from "react";
import { login } from "../utils/auth";

const Login = ({ setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // 👇 check if user already exists
    let user = JSON.parse(localStorage.getItem("user"));

    // 👇 first time default user create
    if (!user) {
      user = {
        name: "Hammad",
        email: "admin@gmail.com",
        password: "1234",
      };
      localStorage.setItem("user", JSON.stringify(user));
    }

    // ✅ now validate with updated user
    if (email === user.email && password === user.password) {
      login();
      setIsAuth(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="tw-h-screen tw-flex tw-items-center tw-justify-center tw-bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="tw-bg-white tw-p-6 tw-rounded-2xl tw-shadow tw-w-80"
      >
        <h2 className="tw-text-xl tw-font-bold tw-mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="tw-w-full tw-border tw-p-2 tw-rounded-lg tw-mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="tw-w-full tw-border tw-p-2 tw-rounded-lg tw-mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="tw-bg-red-500 tw-text-white tw-w-full tw-p-2 tw-rounded-lg">
          Login
        </button>

        <p className="tw-text-xs tw-text-gray-500 tw-mt-3">
          Demo: admin@gmail.com / 1234
        </p>
      </form>
    </div>
  );
};

export default Login;