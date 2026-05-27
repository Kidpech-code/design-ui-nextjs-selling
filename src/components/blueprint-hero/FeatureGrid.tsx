import { Layers, Shield, Zap, Globe, BarChart, Lock } from "lucide-react";

const FEATURES = [
  {
    icon: Layers,
    title: "Modular Design",
    desc: "Compose your UI with flexible, reusable blocks that adapt to any project.",
  },
  {
    icon: Zap,
    title: "Fast by Default",
    desc: "Optimized builds, lazy loading, and edge-ready deployment out of the box.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    desc: "End-to-end encryption and role-based access control built in.",
  },
  {
    icon: Globe,
    title: "Global CDN",
    desc: "Deliver content to users worldwide with sub-100ms response times.",
  },
  {
    icon: BarChart,
    title: "Analytics Ready",
    desc: "Built-in dashboards and custom event tracking for every interaction.",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    desc: "GDPR-compliant storage with granular data retention controls.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Everything you need</h2>
        <p className="text-gray-500 mt-3 text-base max-w-xl mx-auto">
          All the building blocks for a production-ready product. No boilerplate required.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
              <Icon size={20} className="text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
