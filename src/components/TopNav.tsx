import React from 'react';

const navStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 28px',
  borderBottom: '1px solid rgba(201,168,76,0.10)',
  background: 'rgba(1,3,8,0.35)',
  backdropFilter: 'blur(16px)',
  animation: 'fadeIn 0.5s both',
};

const brandStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
};

const titleStyle: React.CSSProperties = {
  fontFamily: "'Cinzel', serif",
  fontSize: '12.5px',
  fontWeight: 600,
  letterSpacing: '0.22em',
  color: 'var(--text2)',
  textTransform: 'uppercase',
};

const rightStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
};

const searchStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '20px',
  padding: '5px 14px',
  fontFamily: "'Noto Sans TC', sans-serif",
  fontSize: '12px',
  color: 'var(--text3)',
  cursor: 'pointer',
  width: '210px',
};

const icoStyle: React.CSSProperties = {
  width: '28px',
  height: '28px',
  borderRadius: '50%',
  border: '1px solid rgba(255,255,255,0.10)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: 'var(--text3)',
};

const avatarStyle: React.CSSProperties = {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  border: '1px solid rgba(201,168,76,0.40)',
  background: 'rgba(8,16,40,0.75)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: "'Cinzel', serif",
  fontSize: '12px',
  fontWeight: 700,
  color: 'var(--gold)',
  cursor: 'pointer',
};

export const TopNav: React.FC = () => (
  <nav style={navStyle}>
    <div style={brandStyle}>
      {/* 四芒星 Logo */}
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <line x1="14" y1="1"  x2="14" y2="27" stroke="rgba(201,168,76,0.85)" strokeWidth="0.8"/>
        <line x1="1"  y1="14" x2="27" y2="14" stroke="rgba(201,168,76,0.85)" strokeWidth="0.8"/>
        <line x1="5"  y1="5"  x2="23" y2="23" stroke="rgba(201,168,76,0.38)" strokeWidth="0.6"/>
        <line x1="23" y1="5"  x2="5"  y2="23" stroke="rgba(201,168,76,0.38)" strokeWidth="0.6"/>
        <circle cx="14" cy="14" r="1.6" fill="rgba(255,240,180,0.95)"/>
        <circle cx="14" cy="14" r="4.5" fill="none" stroke="rgba(201,168,76,0.22)" strokeWidth="0.6"/>
      </svg>
      <span style={titleStyle}>Vivian System Atlas</span>
    </div>

    <div style={rightStyle}>
      <div style={searchStyle}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.4, flexShrink: 0 }}>
          <circle cx="5" cy="5" r="3.5" stroke="rgba(201,168,76,0.8)" strokeWidth="1"/>
          <line x1="7.5" y1="7.5" x2="11" y2="11" stroke="rgba(201,168,76,0.8)" strokeWidth="1" strokeLinecap="round"/>
        </svg>
        <span>搜尋系統、主題或關鍵字...</span>
      </div>
      <div style={icoStyle}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 1C4.8 1 3 2.8 3 5v3L1.5 10h11L11 8V5C11 2.8 9.2 1 7 1Z" stroke="currentColor" strokeWidth="1" fill="none"/>
          <line x1="5.5" y1="11" x2="8.5" y2="11" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      </div>
      <div style={avatarStyle}>V</div>
    </div>
  </nav>
);
