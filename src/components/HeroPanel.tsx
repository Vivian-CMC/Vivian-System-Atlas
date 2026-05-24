import React from 'react';
import { HERO } from '../config/systems.config';

const heroStyle: React.CSSProperties = {
  paddingRight: '12px',
  paddingBottom: '16px',
  animation: 'fadeUp 0.7s 0.1s both',
};

const titleStyle: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: 'clamp(38px, 4.8vw, 64px)',
  fontWeight: 300,
  lineHeight: 1.02,
  color: 'var(--text1)',
  fontStyle: 'italic',
  marginBottom: '3px',
};

const subStyle: React.CSSProperties = {
  fontFamily: "'Cinzel', serif",
  fontSize: 'clamp(12px, 1.5vw, 19px)',
  fontWeight: 400,
  letterSpacing: '0.20em',
  color: 'var(--text1)',
  textTransform: 'uppercase',
  marginBottom: '10px',
};

const zhStyle: React.CSSProperties = {
  fontFamily: "'Noto Sans TC', sans-serif",
  fontSize: '13.5px',
  fontWeight: 300,
  color: 'var(--text2)',
  letterSpacing: '0.22em',
  marginBottom: '18px',
};

const ruleStyle: React.CSSProperties = {
  width: '38px',
  height: '1px',
  background: 'linear-gradient(90deg, var(--gold), transparent)',
  marginBottom: '18px',
};

const descStyle: React.CSSProperties = {
  fontFamily: "'Noto Sans TC', sans-serif",
  fontSize: '12.5px',
  fontWeight: 300,
  lineHeight: 2.2,
  color: 'rgba(168,152,120,0.85)',
  marginBottom: '26px',
};

const ctaStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  border: '1px solid rgba(201,168,76,0.38)',
  background: 'rgba(201,168,76,0.06)',
  padding: '9px 22px',
  borderRadius: '2px',
  fontFamily: "'Cinzel', serif",
  fontSize: '10.5px',
  letterSpacing: '0.24em',
  textTransform: 'uppercase',
  color: 'var(--gold)',
  cursor: 'pointer',
};

export const HeroPanel: React.FC = () => (
  <div style={heroStyle}>
    <div style={titleStyle}>{HERO.titleItalic}</div>
    <div style={subStyle}>{HERO.titleMain}</div>
    <div style={zhStyle}>{HERO.zh}</div>
    <div style={ruleStyle} />
    <div style={descStyle}>
      {HERO.desc.split('\n').map((line, i) => (
        <React.Fragment key={i}>{line}{i < 2 && <br />}</React.Fragment>
      ))}
    </div>
    <div style={ctaStyle}>
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        <line x1="6.5" y1="1"   x2="6.5" y2="12"  stroke="var(--gold)" strokeWidth="0.8"/>
        <line x1="1"   y1="6.5" x2="12"  y2="6.5"  stroke="var(--gold)" strokeWidth="0.8"/>
        <circle cx="6.5" cy="6.5" r="2.5" fill="none" stroke="var(--gold)" strokeWidth="0.7"/>
      </svg>
      {HERO.cta}
    </div>
  </div>
);
