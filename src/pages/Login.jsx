import { useState } from "react";

const Login = ({ setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // simple validation
    if (email === "admin@gmail.com" && password === "1234") {
      localStorage.setItem("isAuth", "true");
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
      </form>
    </div>
  );
};

export default Login;