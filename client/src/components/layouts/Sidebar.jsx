import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FolderOpen,
  FileText,
  Sparkles,
  BarChart3,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Workspaces",
    icon: FolderOpen,
    path: "/workspaces",
  },
  {
    title: "Documents",
    icon: FileText,
    path: "/documents",
  },
  {
    title: "AI Assistant",
    icon: Sparkles,
    path: "/ai",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

function Sidebar() {
  return (
    <aside className="w-80 bg-slate-900 border-r border-slate-800 flex flex-col">

      {/* Logo Section */}
      <div className="p-6 border-b border-slate-800">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-2xl shadow-lg">
            🧠
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              KnowledgeHub AI
            </h1>

            <p className="text-slate-400 text-sm">
              Enterprise Workspace
            </p>
          </div>

        </div>

      </div>

      {/* Navigation */}
      <nav className="flex-1 px-5 py-6">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-2xl mb-2 font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </NavLink>
          );
        })}

      </nav>

      {/* Storage Card */}
      <div className="mx-5 mb-5 rounded-2xl bg-slate-800 p-5">

        <div className="flex items-center justify-between">

          <span className="text-white font-semibold">
            Storage
          </span>

          <span className="text-cyan-400 font-semibold">
            72%
          </span>

        </div>

        <div className="w-full h-2 bg-slate-700 rounded-full mt-4 overflow-hidden">

          <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>

        </div>

        <p className="text-slate-400 text-sm mt-3">
          18 GB of 25 GB used
        </p>

      </div>

      {/* User Profile */}
      <div className="border-t border-slate-800 p-5">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-lg font-bold shadow-lg">
            N
          </div>

          <div className="flex-1">

            <p className="text-white font-semibold">
              Nakul Gupta
            </p>

            <p className="text-slate-400 text-sm">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;