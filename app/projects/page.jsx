import React from "react";
import { Code, Sparkles, Terminal } from "lucide-react";

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 matrix-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 rounded-full glass-panel border border-cyan-500/30">
              <span className="text-cyan-400 text-sm font-semibold">OUR WORK</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Projects & <span className="text-gradient">Achievements</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From hackathon victories to groundbreaking research—see what FAAST has accomplished
            </p>
          </div>
        </div>
      </section>

      {/* Empty State with Hologram Effect */}
      <section className="py-20 min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel rounded-2xl p-12 relative overflow-hidden">
              {/* Animated hologram grid */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent animate-pulse" />
                <div className="matrix-bg" />
              </div>

              {/* Floating hologram effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10">
                <div className="absolute inset-0 border-2 border-cyan-500 rounded-full animate-ping" />
                <div className="absolute inset-4 border-2 border-cyan-500 rounded-full animate-ping delay-75" />
                <div className="absolute inset-8 border-2 border-cyan-500 rounded-full animate-ping delay-150" />
              </div>

              <div className="relative z-10 text-center">
                {/* Terminal-style icon */}
                <div className="w-32 h-32 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-2 border-cyan-500/30 flex items-center justify-center backdrop-blur-sm">
                  <Terminal className="text-cyan-400 animate-pulse" size={64} />
                </div>

                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-yellow-500/30">
                    <Sparkles className="text-yellow-400 animate-pulse" size={20} />
                    <span className="text-yellow-400 font-semibold">Initializing...</span>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient">Development Phase</span>
                </h2>

                {/* Terminal output style */}
                <div className="max-w-2xl mx-auto space-y-3 text-left mb-8">
                  <div className="font-mono text-gray-300">
                    <span className="text-green-400">$</span> status: INITIALIZING...
                  </div>
                  <div className="font-mono text-gray-300">
                    <span className="text-cyan-400">&gt;</span> No active projects at the moment.
                  </div>
                  <div className="font-mono text-gray-300">
                    <span className="text-cyan-400">&gt;</span> Our next research and trading initiatives will be announced soon.
                  </div>
                  <div className="font-mono text-gray-400 flex items-center gap-2">
                    <span className="text-cyan-400">&gt;</span> Loading projects
                    <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse" />
                  </div>
                </div>

                {/* Animated dots */}
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce" />
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce delay-75" />
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce delay-150" />
                </div>

                {/* Info cards */}
                <div className="grid md:grid-cols-3 gap-4 mt-12">
                  <div className="glass-panel rounded-lg p-4 hover:glow-cyan transition-all">
                    <Code className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                    <p className="text-sm text-gray-400">FinTech Development</p>
                  </div>
                  <div className="glass-panel rounded-lg p-4 hover:glow-cyan transition-all">
                    <Terminal className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                    <p className="text-sm text-gray-400">Trading Research</p>
                  </div>
                  <div className="glass-panel rounded-lg p-4 hover:glow-cyan transition-all">
                    <Sparkles className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                    <p className="text-sm text-gray-400">Innovation Labs</p>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
                  <p className="text-cyan-400 text-sm font-semibold">Stay Connected</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Follow us on social media for updates on upcoming projects and research initiatives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}