'use client';

// Using logo.dev with the publishable key
// Note: logo.dev requires the requesting domain to be whitelisted in the dashboard
// Add localhost:3000 and aibenefitsagent.com in logo.dev dashboard → AI Benefits → Allowed Domains
const LOGO_DEV_KEY = 'pk_YckjJfb2Rt2NPcvwfZuO6g';

const integrations = [
  { name: 'Justworks', domain: 'justworks.com' },
  { name: 'Gusto', domain: 'gusto.com' },
  { name: 'ADP', domain: 'adp.com' },
  { name: 'Rippling', domain: 'rippling.com' },
  { name: 'BambooHR', domain: 'bamboohr.com' },
  { name: 'Workday', domain: 'workday.com' },
  { name: 'Paychex', domain: 'paychex.com' },
  { name: 'TriNet', domain: 'trinet.com' },
];

// Fallback colored initials if logo fails to load
const colors: Record<string, string> = {
  'Justworks': '#1F4E79',
  'Gusto': '#F97316',
  'ADP': '#DC2626',
  'Rippling': '#7C3AED',
  'BambooHR': '#5C9367',
  'Workday': '#0EA5E9',
  'Paychex': '#1D2939',
  'TriNet': '#2563EB',
};

function LogoImg({ domain, name, size = 20 }: { domain: string; name: string; size?: number }) {
  const initial = name.charAt(0);
  const color = colors[name] || '#245A89';

  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      {/* Fallback colored initial */}
      <div
        className="rounded-sm flex items-center justify-center text-white font-bold"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          fontSize: size * 0.5,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        {initial}
      </div>
      {/* Logo image on top — loads when domain is whitelisted in logo.dev (currently: Any domain) */}
      <img
        src={`https://img.logo.dev/${domain}?token=${LOGO_DEV_KEY}&size=${size * 2}&format=png`}
        alt={`${name} logo`}
        width={size}
        height={size}
        className="rounded-sm object-contain"
        style={{
          width: size,
          height: size,
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: '#FFFFFF',
        }}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    </div>
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
