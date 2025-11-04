import React from "react";
import { Calendar, Sparkles } from "lucide-react";

export default function Events() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 matrix-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 rounded-full glass-panel border border-cyan-500/30">
              <span className="text-cyan-400 text-sm font-semibold">EVENTS & HACKATHONS</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Learn, Compete, <span className="text-gradient">Excel</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From workshops to hackathons, we host events that push boundaries and create opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Empty State */}
      <section className="py-20 min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="glass-panel rounded-2xl p-12 text-center relative overflow-hidden">
              {/* Animated background effect */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
              </div>

              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-2 border-cyan-500/30 flex items-center justify-center animate-bounce">
                  <Calendar className="text-cyan-400" size={48} />
                </div>

                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-yellow-500/30 mb-4">
                    <Sparkles className="text-yellow-400 animate-pulse" size={20} />
                    <span className="text-yellow-400 font-semibold">Coming Soon</span>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-gradient">0</span> Events
                </h2>

                <div className="space-y-4 text-gray-300 text-lg">
                  <p className="font-mono">
                    <span className="text-cyan-400">&gt;</span> Currently, there are no upcoming or past events.
                  </p>
                  <p className="font-mono">
                    <span className="text-cyan-400">&gt;</span> Stay tuned for announcements!
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping delay-75" />
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping delay-150" />
                </div>

                <div className="mt-8 p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
                  <p className="text-cyan-400 text-sm font-semibold mb-2">Follow our social channels</p>
                  <p className="text-gray-400 text-sm">
                    Be the first to know when we announce our next workshop, competition, or hackathon!
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