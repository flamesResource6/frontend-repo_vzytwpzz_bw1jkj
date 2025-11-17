export default function Stats() {
  const items = [
    { label: 'Total Balance', value: '$248,920', change: '+3.4%', positive: true },
    { label: 'Monthly Spend', value: '$18,430', change: '-1.2%', positive: false },
    { label: 'Active Cards', value: '12', change: '+2', positive: true },
    { label: 'Vendors', value: '54', change: '+5', positive: true },
  ];

  return (
    <section className="relative -mt-16 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <div key={it.label} className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-5">
              <div className="text-sm text-neutral-400">{it.label}</div>
              <div className="mt-2 text-2xl font-semibold text-white">{it.value}</div>
              <div className={`mt-2 inline-flex items-center text-xs font-medium rounded-full px-2 py-0.5 ${it.positive ? 'text-white bg-white/10' : 'text-black bg-white'}`}>{it.change}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
