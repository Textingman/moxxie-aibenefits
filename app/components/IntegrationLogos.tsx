'use client';

// logo.dev CDN key — works from browser when domain is whitelisted in logo.dev dashboard
// The key pk_YckjJfb2Rt2NPcvwfZu06g requires aibenefitsagent.com to be added as allowed domain
// For local dev, using clearbit as fallback which works without auth
const integrations = [
  { name: 'Justworks', domain: 'justworks.com', color: '#1F4E79' },
  { name: 'Gusto', domain: 'gusto.com', color: '#F97316' },
  { name: 'ADP', domain: 'adp.com', color: '#DC2626' },
  { name: 'Rippling', domain: 'rippling.com', color: '#7C3AED' },
  { name: 'BambooHR', domain: 'bamboohr.com', color: '#5C9367' },
  { name: 'Workday', domain: 'workday.com', color: '#0EA5E9' },
  { name: 'Paychex', domain: 'paychex.com', color: '#1D2939' },
  { name: 'TriNet', domain: 'trinet.com', color: '#2563EB' },
];

function LogoImg({ domain, name, size = 20 }: { domain: string; name: string; size?: number }) {
  return (
    <img
      src={`https://logo.clearbit.com/${domain}`}
      alt={`${name} logo`}
      width={size}
      height={size}
      className="rounded-sm object-contain flex-shrink-0"
      style={{ width: size, height: size }}
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = 'none';
      }}
    />
  );
}

export function IntegrationLogosBar() {
  return (
    <section style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }} className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: '#94A3B8' }}>
          Works with your existing HR platform
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {integrations.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border bg-white transition-all hover:shadow-md"
              style={{ borderColor: '#E2E8F0' }}
            >
              <LogoImg domain={tool.domain} name={tool.name} size={20} />
              <span className="text-sm font-semibold" style={{ color: '#1D2939' }}>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IntegrationLogoGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {integrations.map((tool) => (
        <div
          key={tool.name}
          className="flex items-center gap-3 p-4 rounded-xl border bg-white"
          style={{ borderColor: '#E2E8F0' }}
        >
          <LogoImg domain={tool.domain} name={tool.name} size={28} />
          <span className="text-sm font-semibold" style={{ color: '#1D2939' }}>{tool.name}</span>
        </div>
      ))}
    </div>
  );
}
