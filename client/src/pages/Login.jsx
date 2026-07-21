import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  console.log("Login button clicked");

  try {
    console.log("Sending request...");

    const res = await API.post("/auth/login", {
      email,
      password,
    });

    console.log("Response:", res.data);

    localStorage.setItem("token", res.data.token);

    navigate("/dashboard");

  } catch (err) {
    console.log("FULL ERROR:", err);

    alert(
      err.response?.data?.message ||
      err.message ||
      "Unknown error"
    );
  }
};

 return (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">

    <form
      onSubmit={handleLogin}
      className="w-[420px] p-10 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl"
    >
      <h1 className="text-4xl font-bold text-white mb-2">
        Welcome Back
      </h1>

      <p className="text-slate-400 mb-8">
        Sign in to KnowledgeHub AI
      </p>

      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-4 mb-4 rounded-xl bg-slate-800 text-white placeholder:text-slate-400 border border-slate-700 outline-none focus:border-cyan-500 transition"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter your password"
        className="w-full p-4 mb-6 rounded-xl bg-slate-800 text-white placeholder:text-slate-400 border border-slate-700 outline-none focus:border-cyan-500 transition"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition-all duration-300"
      >
        Login
      </button>
    </form>

  </div>
);
}

export default Login;