import { Sparkles } from "lucide-react";

function WelcomeCard() {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-slate-900 p-8 shadow-xl">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Welcome back, Nakul 👋
          </h1>

          <p className="mt-3 max-w-2xl text-slate-200 text-lg">
            Manage your enterprise documents, organize workspaces,
            and let AI help you find answers instantly.
          </p>

        </div>

        <div className="hidden md:flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-md">

          <Sparkles
            className="text-white"
            size={42}
          />

        </div>

      </div>

    </div>
  );
}

export default WelcomeCard;