import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative min-h-screen bg-slate-950 text-white flex items-center justify-center overflow-hidden px-6">

      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[400px] w-[400px] bg-cyan-500/20 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl text-center"
      >

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-900 mb-8">
          <Sparkles size={16} />
          <span className="text-sm">
            AI-Powered Enterprise Knowledge Platform
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl font-bold leading-tight">
          Find Company Knowledge
          <br />

          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Instantly With AI
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-xl text-slate-400 max-w-3xl mx-auto">
          Upload documents, organize workspaces, and ask questions in natural language.
          Turn your organization's knowledge into an intelligent assistant.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">

          <button className="flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-2xl text-lg font-semibold transition-all">
            Get Started
            <ArrowRight size={20} />
          </button>

          <button className="px-8 py-4 border border-slate-700 hover:border-slate-500 rounded-2xl text-lg transition-all">
            Watch Demo
          </button>

        </div>

      </motion.div>

    </section>
  );
}

export default HeroSection;