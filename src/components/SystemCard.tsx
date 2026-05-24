import React from 'react';
import { SystemDomain, AccentKey } from '../config/systems.config';

// Accent 色對應表
const ACCENT: Record<AccentKey, string> = {
  blue:   '#4A8BC4',
  teal:   '#4ABFA8',
  purple: '#8B6AC4',
  amber:  '#C4824A',
};

const ACCENT_VAR: Record<AccentKey, string> = {
  blue:   'var(--blue)',
  teal:   'var(--teal)',
  purple: 'var(--purple)',
  amber:  'var(--amber)',
};

// 各域主 icon
const DomainIcon: React.FC<{ accent: AccentKey }> = ({ accent }) => {
  const c = (o: number) => `rgba(${hexToRgb(ACCENT[accent])},${o})`;
  switch (accent) {
    case 'blue': return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="7" width="16" height="11" rx="1.5" stroke={c(0.85)} strokeWidth="1.1" fill="none"/>
        <path d="M6.5 7V5.5C6.5 4.67 7.17 4 8 4h4c.83 0 1.5.67 1.5 1.5V7" stroke={c(0.65)} strokeWidth="1" fill="none"/>
        <line x1="2" y1="12" x2="18" y2="12" stroke={c(0.38)} strokeWidth="0.8"/>
      </svg>
    );
    case 'teal': return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10L10 3l7 7" stroke={c(0.8)} strokeWidth="1.1" strokeLinejoin="round" fill="none"/>
        <path d="M5 8.5V16.5a.5.5 0 00.5.5h3.5v-4h2v4h3.5a.5.5 0 00.5-.5V8.5" stroke={c(0.8)} strokeWidth="1" fill="none"/>
      </svg>
    );
    case 'purple': return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3C7 3 4.5 5.2 4.5 8c0 1.8.9 3.3 2.3 4.2V14h6.4v-1.8C14.6 11.3 15.5 9.8 15.5 8 15.5 5.2 13 3 10 3Z" stroke={c(0.8)} strokeWidth="1.1" fill="none"/>
        <line x1="7.5" y1="15.5" x2="12.5" y2="15.5" stroke={c(0.55)} strokeWidth="1" strokeLinecap="round"/>
        <line x1="8.5" y1="17"   x2="11.5" y2="17"   stroke={c(0.4)}  strokeWidth="1" strokeLinecap="round"/>
      </svg>
    );
    case 'amber': return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 16L7.5 7l8.5-3-3 8.5L4 16Z" stroke={c(0.8)} strokeWidth="1.1" strokeLinejoin="round" fill="none"/>
        <circle cx="10" cy="10" r="1.5" stroke={c(0.6)} strokeWidth="0.9" fill="none"/>
      </svg>
    );
  }
};

// 子系統 item icon（每域固定小圖示）
const ItemIcon: React.FC<{ accent: AccentKey; index: number }> = ({ accent, index }) => {
  const c = (o: number) => `rgba(${hexToRgb(ACCENT[accent])},${o})`;
  const icons: Record<AccentKey, React.ReactNode[]> = {
    blue: [
      <svg key="0" className="mi" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="1" stroke={c(0.6)} strokeWidth="1" fill="none"/><line x1="5" y1="7" x2="11" y2="7" stroke={c(0.5)} strokeWidth=".8"/><line x1="5" y1="9.5" x2="9" y2="9.5" stroke={c(0.4)} strokeWidth=".8"/></svg>,
      <svg key="1" className="mi" viewBox="0 0 16 16" fill="none"><rect x="3" y="2" width="10" height="12" rx="1" stroke={c(0.6)} strokeWidth="1" fill="none"/><line x1="5.5" y1="6" x2="10.5" y2="6" stroke={c(0.5)} strokeWidth=".8"/><line x1="5.5" y1="8.5" x2="10.5" y2="8.5" stroke={c(0.4)} strokeWidth=".8"/></svg>,
      <svg key="2" className="mi" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="1" stroke={c(0.6)} strokeWidth="1" fill="none"/><rect x="4" y="8" width="2" height="4" fill={c(0.4)}/><rect x="7" y="5" width="2" height="7" fill={c(0.35)}/><rect x="10" y="6.5" width="2" height="5.5" fill={c(0.3)}/></svg>,
      <svg key="3" className="mi" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5.5" stroke={c(0.55)} strokeWidth="1" fill="none"/><line x1="8" y1="5" x2="8" y2="8.5" stroke={c(0.6)} strokeWidth="1" strokeLinecap="round"/><line x1="8" y1="8.5" x2="10.5" y2="10" stroke={c(0.5)} strokeWidth="1" strokeLinecap="round"/></svg>,
    ],
    teal: [
      <svg key="0" className="mi" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="6" r="2.5" stroke={c(0.6)} strokeWidth="1" fill="none"/><path d="M3.5 14c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" stroke={c(0.5)} strokeWidth="1" strokeLinecap="round" fill="none"/></svg>,
      <svg key="1" className="mi" viewBox="0 0 16 16" fill="none"><path d="M8 2C5.8 2 4 3.8 4 6c0 1.5.8 2.8 2 3.5V11h4V9.5C11.2 8.8 12 7.5 12 6c0-2.2-1.8-4-4-4Z" stroke={c(0.6)} strokeWidth="1" fill="none"/><line x1="6" y1="12.5" x2="10" y2="12.5" stroke={c(0.5)} strokeWidth="1" strokeLinecap="round"/></svg>,
      <svg key="2" className="mi" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5.5" stroke={c(0.6)} strokeWidth="1" fill="none"/><line x1="8" y1="4.5" x2="8" y2="5.5" stroke={c(0.5)} strokeWidth="1" strokeLinecap="round"/><line x1="8" y1="10.5" x2="8" y2="11.5" stroke={c(0.5)} strokeWidth="1" strokeLinecap="round"/><line x1="4.5" y1="8" x2="5.5" y2="8" stroke={c(0.5)} strokeWidth="1" strokeLinecap="round"/><line x1="10.5" y1="8" x2="11.5" y2="8" stroke={c(0.5)} strokeWidth="1" strokeLinecap="round"/></svg>,
      <svg key="3" className="mi" viewBox="0 0 16 16" fill="none"><rect x="2" y="4" width="12" height="9" rx="1" stroke={c(0.6)} strokeWidth="1" fill="none"/><line x1="5" y1="7.5" x2="11" y2="7.5" stroke={c(0.4)} strokeWidth=".8"/><line x1="5" y1="9.5" x2="8.5" y2="9.5" stroke={c(0.35)} strokeWidth=".8"/></svg>,
    ],
    purple: [
      <svg key="0" className="mi" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" stroke={c(0.6)} strokeWidth="1" fill="none"/><circle cx="8" cy="8" r="5.5" stroke={c(0.3)} strokeWidth=".7" fill="none"/><line x1="8" y1="2" x2="8" y2="4" stroke={c(0.5)} strokeWidth=".8"/><line x1="8" y1="12" x2="8" y2="14" stroke={c(0.5)} strokeWidth=".8"/></svg>,
      <svg key="1" className="mi" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="7" height="7" rx=".8" stroke={c(0.6)} strokeWidth="1" fill="none"/><rect x="7" y="7" width="7" height="7" rx=".8" stroke={c(0.45)} strokeWidth="1" fill="none"/></svg>,
      <svg key="2" className="mi" viewBox="0 0 16 16" fill="none"><path d="M3 4h10M3 7.5h7M3 11h8.5" stroke={c(0.6)} strokeWidth="1" strokeLinecap="round"/></svg>,
      <svg key="3" className="mi" viewBox="0 0 16 16" fill="none"><rect x="3" y="3" width="10" height="10" rx="1" stroke={c(0.5)} strokeWidth="1" fill="none"/><circle cx="8" cy="8" r="1.8" stroke={c(0.55)} strokeWidth=".9" fill="none"/></svg>,
    ],
    amber: [
      <svg key="0" className="mi" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="1" stroke={c(0.6)} strokeWidth="1" fill="none"/><line x1="5" y1="5.5" x2="11" y2="5.5" stroke={c(0.5)} strokeWidth=".8"/><line x1="5" y1="8" x2="9" y2="8" stroke={c(0.4)} strokeWidth=".8"/><line x1="5" y1="10.5" x2="10" y2="10.5" stroke={c(0.35)} strokeWidth=".8"/></svg>,
      <svg key="1" className="mi" viewBox="0 0 16 16" fill="none"><path d="M3 13L5.5 4l2.5 6 2-3.5L12.5 13" stroke={c(0.6)} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>,
      <svg key="2" className="mi" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5.5" stroke={c(0.55)} strokeWidth="1" fill="none"/><path d="M5.5 10C5.5 10 6.5 11 8 11s2.5-1 2.5-1" stroke={c(0.5)} strokeWidth=".9" strokeLinecap="round" fill="none"/><circle cx="6" cy="7" r=".8" fill={c(0.6)}/><circle cx="10" cy="7" r=".8" fill={c(0.6)}/></svg>,
      <svg key="3" className="mi" viewBox="0 0 16 16" fill="none"><rect x="2" y="4" width="8" height="10" rx="1" stroke={c(0.55)} strokeWidth="1" fill="none"/><rect x="6" y="2" width="8" height="10" rx="1" stroke={c(0.35)} strokeWidth="1" fill="none"/></svg>,
    ],
  };
  return <>{icons[accent][index]}</>;
};

// hex → "r,g,b"
function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `${r},${g},${b}`;
}

interface SystemCardProps {
  domain: SystemDomain;
}

export const SystemCard: React.FC<SystemCardProps> = ({ domain }) => {
  const { id, name, subtitle, accent, items } = domain;
  const accentColor = ACCENT_VAR[accent];
  const rgb = hexToRgb(ACCENT[accent]);

  return (
    <a
      href="#"
      className={`sc sc-${id}`}
      style={{
        borderRadius: '14px',
        padding: '18px 22px 15px',
        backdropFilter: 'blur(22px) saturate(1.6)',
        WebkitBackdropFilter: 'blur(22px) saturate(1.6)',
        border: '1px solid rgba(255,255,255,0.08)',
        background: 'rgba(4,8,22,0.68)',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{ display:'flex', alignItems:'center', gap:'14px', marginBottom:'14px', position:'relative', zIndex:1 }}>
        <div style={{
          width:'42px', height:'42px', borderRadius:'50%',
          display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
          background: `rgba(${rgb},0.13)`,
          border: `1px solid rgba(${rgb},0.28)`,
        }}>
          <DomainIcon accent={accent}/>
        </div>
        <div>
          <div style={{ fontFamily:"'Cinzel',serif", fontSize:'clamp(14px,1.5vw,18px)', fontWeight:600, letterSpacing:'0.10em', textTransform:'uppercase', color:'var(--text1)', marginBottom:'3px' }}>
            {name}
          </div>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'10px', letterSpacing:'0.10em', color:'var(--text3)' }}>
            {subtitle}
          </div>
        </div>
      </div>

      {/* Items */}
      <div style={{ flex:1, display:'flex', flexDirection:'column', position:'relative', zIndex:1 }}>
        {items.map((item, i) => (
          <div key={i} style={{
            display:'flex', alignItems:'center', justifyContent:'space-between',
            padding:'7px 0',
            borderBottom: i < items.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
            fontFamily:"'Noto Sans TC',sans-serif",
            fontSize:'12.5px', fontWeight:300,
            color:'var(--text2)',
          }}>
            <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
              <ItemIcon accent={accent} index={i}/>
              {item.href !== '#'
                ? <a href={item.href} style={{ color:'inherit', textDecoration:'none' }}>{item.name}</a>
                : <span>{item.name}</span>
              }
            </div>
            <div style={{
              width:'4px', height:'4px', borderRadius:'50%',
              background: accentColor,
              opacity: 0.6, flexShrink: 0,
            }}/>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        marginTop:'10px', paddingTop:'8px',
        borderTop:'1px solid rgba(255,255,255,0.05)',
        fontFamily:"'DM Mono',monospace", fontSize:'10px', letterSpacing:'0.09em',
        color: `rgba(${rgb},0.62)`,
        position:'relative', zIndex:1,
      }}>
        查看全部 →
      </div>
    </a>
  );
};
