const STATS = [
  { value: "50k+", label: "Active Users" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "200ms", label: "Avg. Response" },
  { value: "4.9★", label: "User Rating" },
];

export default function StatsBar() {
  return (
    <section className="bg-indigo-600 text-white">
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map(({ value, label }) => (
          <div key={label}>
            <p className="text-3xl font-extrabold">{value}</p>
            <p className="text-indigo-200 text-sm mt-1">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
