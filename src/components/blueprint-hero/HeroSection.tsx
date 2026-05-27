import { ArrowRight, Star, Users, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
          <Star size={13} className="text-yellow-400 fill-yellow-400" />
          <span className="text-white/90 font-medium">Trusted by 50,000+ users</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Build Faster.{" "}
          <br />
          <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
            Ship Smarter.
          </span>
        </h1>

        <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          A powerful platform for modern teams. Streamline your workflow, collaborate in
          real time, and deliver results with confidence.
        </p>

        {/* CTA row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-indigo-900 font-bold px-7 py-3 rounded-full hover:bg-indigo-50 transition-colors flex items-center gap-2">
            Get Started Free <ArrowRight size={16} />
          </button>
          <button className="border border-white/30 text-white/90 font-medium px-7 py-3 rounded-full hover:bg-white/10 transition-colors">
            View Demo
          </button>
        </div>

        {/* Social proof */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm">
          <div className="flex items-center gap-1.5">
            <Users size={14} /> 50k+ Users
          </div>
          <div className="w-px h-4 bg-white/20" />
          <div className="flex items-center gap-1.5">
            <Zap size={14} /> 99.9% Uptime
          </div>
          <div className="w-px h-4 bg-white/20" />
          <div className="flex items-center gap-1.5">
            <Star size={14} /> 4.9/5 Rating
          </div>
        </div>
      </div>
    </section>
  );
}
