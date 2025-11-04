"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
// import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Award, Zap, LineChart, Code2, BarChart3 } from "lucide-react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = 'rgba(3, 7, 18, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(0, 229, 255, 0.2)';
      ctx.lineWidth = 1;

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        if (!ctx) return;
        ctx.fillStyle = 'rgba(0, 229, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fill();

        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100 && ctx) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />
        
        <div className="absolute inset-0 matrix-bg opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 rounded-full glass-panel border border-cyan-500/30">
              <span className="text-cyan-400 text-sm font-semibold">🚀 AMU&apos;S PREMIER FINTECH CLUB</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Empowering <span className="text-gradient">Tomorrow&apos;s</span><br />
              <span className="text-gradient">FinTech Leaders</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Finance • Algorithm • Analytics • Stocks • Trade
            </p>

            {/* Club Motto */}
            <div className="mb-6">
              <div className="inline-block px-6 py-3 rounded-lg glass-panel border border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 to-green-500/10">
                <p className="text-lg md:text-xl font-bold">
                  <span className="text-red-400">Bear</span>{' '}
                  <span className="text-cyan-400">Bytes</span>{' '}
                  <span className="text-gray-400">n</span>{' '}
                  <span className="text-green-400">Bullish</span>{' '}
                  <span className="text-yellow-400">Rise</span>
                </p>
              </div>
            </div>
            
            <p className="text-sm text-cyan-400/80 mb-8 font-mono">
              F.A.A.S.T. — Aligarh Muslim University&#39;s official FinTech club, founded in 2025.
            </p>
            
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Join AMU&apos;s most dynamic community where finance meets technology. 
              Build, trade, analyze, and innovate with the best minds in FinTech.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/joinus">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 text-lg px-8 py-6 glow-cyan">
                  Join FAAST Now
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg px-8 py-6">
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="glass-panel rounded-xl p-6 hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-gradient mb-2">50+</div>
                <div className="text-gray-400">Members</div>
              </div>
              <div className="glass-panel rounded-xl p-6 hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-gradient mb-2">2+</div>
                <div className="text-gray-400">Events Hosted</div>
              </div>
              <div className="glass-panel rounded-xl p-6 hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-gradient mb-2">3</div>
                <div className="text-gray-400">Competitions Won</div>
              </div>
              <div className="glass-panel rounded-xl p-6 hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-gradient mb-2">4</div>
                <div className="text-gray-400">Specialized Teams</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-cyan-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-[#0a1f3c]/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
              We&apos;re not just a club – we&apos;re a launchpad for future innovators in finance and technology
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: LineChart,
                  title: "Algorithmic Trading",
                  description: "Master quantitative strategies and automated trading systems",
                  color: "cyan"
                },
                {
                  icon: BarChart3,
                  title: "Market Analytics",
                  description: "Deep dive into financial data analysis and market research",
                  color: "blue"
                },
                {
                  icon: Code2,
                  title: "FinTech Development",
                  description: "Build cutting-edge financial technology solutions",
                  color: "purple"
                },
                {
                  icon: TrendingUp,
                  title: "Live Trading",
                  description: "Real-world trading experience with mentorship",
                  color: "yellow"
                }
              ].map((item, index) => (
                <div key={index} className="glass-panel rounded-xl p-6 hover:scale-105 hover:glow-cyan transition-all duration-300 group">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-cyan-400">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Why Join <span className="text-gradient">FAAST?</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Elite Community",
                  description: "Network with passionate students, alumni, and industry professionals in FinTech"
                },
                {
                  icon: Award,
                  title: "Real Achievements",
                  description: "Participate in hackathons, competitions, and real-world projects with proven success"
                },
                {
                  icon: Zap,
                  title: "Hands-On Learning",
                  description: "From trading workshops to coding bootcamps – learn by doing, not just listening"
                }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:glow-cyan transition-all duration-300">
                    <item.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10" />
        <div className="absolute inset-0 matrix-bg opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center glass-panel rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Level Up Your <span className="text-gradient">FinTech Game?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              The clock&apos;s ticking — Join FAAST and be part of something extraordinary
            </p>
            <Link href="/joinus">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 text-lg px-8 py-6 glow-cyan">
                Join Now
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}