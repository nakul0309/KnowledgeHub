import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">
          KnowledgeHub AI
        </h1>

        <div className="flex gap-6 items-center">
          <a href="#features" className="text-slate-300 hover:text-white">
            Features
          </a>

          <Link
            to="/login"
            className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;