import React from "react";
import { BookOpen, Sparkles, FileText } from "lucide-react";

export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 matrix-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 rounded-full glass-panel border border-cyan-500/30">
              <span className="text-cyan-400 text-sm font-semibold">INSIGHTS & ARTICLES</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              FAAST <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Deep dives into finance, algorithms, analytics, and trading from our community
            </p>
          </div>
        </div>
      </section>

      {/* Empty State with Terminal Effect */}
      <section className="py-20 min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel rounded-2xl p-12 relative overflow-hidden">
              {/* Terminal background */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-transparent" />
                <div className="matrix-bg" />
              </div>

              <div className="relative z-10">
                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-8 pb-4 border-b border-cyan-500/20">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-gray-400 text-sm font-mono ml-4">faast-blog@amu:~$</span>
                </div>

                {/* Icon */}
                <div className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-2 border-cyan-500/30 flex items-center justify-center">
                  <BookOpen className="text-cyan-400" size={48} />
                </div>

                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-cyan-500/30">
                    <Sparkles className="text-cyan-400 animate-pulse" size={20} />
                    <span className="text-cyan-400 font-semibold">Coming Soon</span>
                  </div>
                </div>

                {/* Terminal output */}
                <div className="max-w-2xl mx-auto space-y-3 text-left mb-8 font-mono">
                  <div className="text-green-400">
                    $ blog-status --check
                  </div>
                  <div className="text-gray-300 ml-4">
                    <span className="text-cyan-400">&gt;</span> Scanning for articles...
                  </div>
                  <div className="text-gray-300 ml-4">
                    <span className="text-yellow-400">!</span> No blogs or research papers uploaded yet.
                  </div>
                  <div className="text-gray-400 ml-4 mt-4">
                    <span className="text-cyan-400">i</span> This section will soon showcase our members research papers,
                  </div>
                  <div className="text-gray-400 ml-4">
                    <span className="text-cyan-400">i</span> trading insights, and FinTech analyses.
                  </div>
                  <div className="text-gray-300 ml-4 mt-4 flex items-center gap-2">
                    <span className="text-green-400">&gt;</span> Loading content
                    <span className="inline-block w-2 h-4 bg-green-400 animate-blink" />
                  </div>
                </div>

                <style>{`
                  @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                  }
                  .animate-blink {
                    animation: blink 1s infinite;
                  }
                `}</style>

                {/* Feature cards */}
                <div className="grid md:grid-cols-3 gap-4 mt-12">
                  <div className="glass-panel rounded-lg p-6 hover:glow-cyan transition-all text-center">
                    <FileText className="w-10 h-10 mx-auto mb-3 text-cyan-400" />
                    <p className="text-sm font-semibold text-cyan-400 mb-1">Research Papers</p>
                    <p className="text-xs text-gray-400">Academic studies on FinTech trends</p>
                  </div>
                  <div className="glass-panel rounded-lg p-6 hover:glow-cyan transition-all text-center">
                    <BookOpen className="w-10 h-10 mx-auto mb-3 text-purple-400" />
                    <p className="text-sm font-semibold text-purple-400 mb-1">Trading Insights</p>
                    <p className="text-xs text-gray-400">Market analysis and strategies</p>
                  </div>
                  <div className="glass-panel rounded-lg p-6 hover:glow-cyan transition-all text-center">
                    <Sparkles className="w-10 h-10 mx-auto mb-3 text-yellow-400" />
                    <p className="text-sm font-semibold text-yellow-400 mb-1">FinTech Analysis</p>
                    <p className="text-xs text-gray-400">Technology deep-dives</p>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
                  <p className="text-cyan-400 text-sm font-semibold mb-2">📝 Want to Contribute?</p>
                  <p className="text-gray-400 text-sm">
                    Members can submit their research and articles for publication on our blog.
                    Reach out to the PR team for guidelines.
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