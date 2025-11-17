import { MoreHorizontal, CreditCard, ArrowUpRight, ArrowDownRight } from 'lucide-react'

const rows = [
  { id: '**** 1123', holder: 'Marketing Card', limit: '$25,000', spent: '$12,340', trend: 'up', change: '+8.2%' },
  { id: '**** 9922', holder: 'Engineering Card', limit: '$40,000', spent: '$22,180', trend: 'down', change: '-2.4%' },
  { id: '**** 4431', holder: 'Ops Card', limit: '$15,000', spent: '$9,210', trend: 'up', change: '+1.1%' },
  { id: '**** 7770', holder: 'Travel Card', limit: '$10,000', spent: '$3,940', trend: 'up', change: '+0.8%' },
]

export default function CardsTable() {
  return (
    <section className="mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-black/40 backdrop-blur">
          <div className="p-5 border-b border-white/10 flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold">Company Cards</h3>
              <p className="text-neutral-400 text-sm">Track limits, spending, and activity</p>
            </div>
            <button className="text-neutral-200 hover:text-white inline-flex items-center gap-2 text-sm">
              View all
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
          <div className="divide-y divide-white/10">
            {rows.map((r) => (
              <div key={r.id} className="p-5 grid grid-cols-12 items-center">
                <div className="col-span-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-white/80" />
                  </div>
                  <div>
                    <div className="text-white font-medium">{r.holder}</div>
                    <div className="text-neutral-400 text-sm">{r.id}</div>
                  </div>
                </div>
                <div className="col-span-3 text-neutral-200">
                  <div className="text-xs text-neutral-500">Limit</div>
                  <div className="font-medium">{r.limit}</div>
                </div>
                <div className="col-span-2 text-neutral-200">
                  <div className="text-xs text-neutral-500">Spent</div>
                  <div className="font-medium">{r.spent}</div>
                </div>
                <div className="col-span-2 flex items-center justify-end">
                  <div className={`inline-flex items-center gap-1 text-sm font-medium ${r.trend === 'up' ? 'text-white' : 'text-black bg-white rounded px-1.5 py-0.5'}`}>
                    {r.trend === 'up' ? (
                      <ArrowUpRight className="h-4 w-4" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4" />
                    )}
                    {r.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-5">
          <h3 className="text-white font-semibold">Spend by Category</h3>
          <p className="text-neutral-400 text-sm">This month</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[{
              name: 'SaaS', value: 42
            }, { name: 'Travel', value: 21 }, { name: 'Ads', value: 18 }, { name: 'Ops', value: 12 }].map((c) => (
              <div key={c.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-300 text-sm">{c.name}</span>
                  <span className="text-white font-medium">{c.value}%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <div className={`h-full rounded-full bg-white`} style={{ width: `${c.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
