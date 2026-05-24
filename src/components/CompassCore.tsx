import React from 'react';

const SparkleIcon: React.FC<{ size: number; opacity: number }> = ({ size, opacity }) => (
  <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
    <line x1={size/2} y1="1"        x2={size/2} y2={size-1}   stroke={`rgba(201,168,76,${opacity})`} strokeWidth="0.7"/>
    <line x1="1"      y1={size/2}   x2={size-1} y2={size/2}   stroke={`rgba(201,168,76,${opacity})`} strokeWidth="0.7"/>
    <circle cx={size/2} cy={size/2} r="0.9" fill={`rgba(255,240,180,${opacity+0.1})`}/>
  </svg>
);

export const CompassCore: React.FC = () => (
  <div style={{
    position: 'absolute',
    top: '50%', left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 30,
    pointerEvents: 'none',
    width: '220px',
    height: '220px',
  }}>
    {/* Glow */}
    <div style={{
      position: 'absolute', top: '50%', left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '220px', height: '220px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(201,168,76,0.13) 0%, rgba(37,80,200,0.07) 45%, transparent 68%)',
      animation: 'gp 3.8s ease-in-out infinite',
    }}/>

    {/* 同心圓 */}
    {[
      { size: 212, border: '1px dashed rgba(201,168,76,0.10)', anim: 'cw 70s linear infinite' },
      { size: 172, border: '1px solid rgba(201,168,76,0.14)',  anim: 'ccw 45s linear infinite' },
      { size: 132, border: '1px solid rgba(201,168,76,0.18)',  anim: 'cw 28s linear infinite' },
      { size: 92,  border: '1px solid rgba(201,168,76,0.22)',  anim: '' },
    ].map(({ size, border, anim }, i) => (
      <div key={i} style={{
        position: 'absolute', top: '50%', left: '50%',
        width: `${size}px`, height: `${size}px`,
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        border,
        animation: anim || undefined,
      }}/>
    ))}

    {/* 十字線 */}
    <div style={{ position:'absolute', top:'50%', left:'50%', width:'222px', height:'1px', transform:'translate(-50%,-50%)', background:'linear-gradient(90deg,transparent,rgba(201,168,76,0.10) 20%,rgba(201,168,76,0.22) 50%,rgba(201,168,76,0.10) 80%,transparent)' }}/>
    <div style={{ position:'absolute', top:'50%', left:'50%', width:'1px', height:'222px', transform:'translate(-50%,-50%)', background:'linear-gradient(180deg,transparent,rgba(201,168,76,0.10) 20%,rgba(201,168,76,0.22) 50%,rgba(201,168,76,0.10) 80%,transparent)' }}/>
    <div style={{ position:'absolute', top:'50%', left:'50%', width:'180px', height:'1px', transform:'translate(-50%,-50%) rotate(45deg)', background:'linear-gradient(90deg,transparent,rgba(201,168,76,0.07) 35%,rgba(201,168,76,0.12) 50%,rgba(201,168,76,0.07) 65%,transparent)' }}/>
    <div style={{ position:'absolute', top:'50%', left:'50%', width:'180px', height:'1px', transform:'translate(-50%,-50%) rotate(-45deg)', background:'linear-gradient(90deg,transparent,rgba(201,168,76,0.07) 35%,rgba(201,168,76,0.12) 50%,rgba(201,168,76,0.07) 65%,transparent)' }}/>

    {/* 四方位星芒 */}
    <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, calc(-50% - 107px))' }}><SparkleIcon size={14} opacity={0.8}/></div>
    <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, calc(-50% + 99px))' }}><SparkleIcon size={12} opacity={0.7}/></div>
    <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(calc(-50% + 99px), -50%)' }}><SparkleIcon size={12} opacity={0.7}/></div>
    <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(calc(-50% - 107px), -50%)' }}><SparkleIcon size={12} opacity={0.7}/></div>

    {/* V 徽章 */}
    <div style={{
      position: 'absolute', top: '50%', left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '70px', height: '70px',
      borderRadius: '50%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'radial-gradient(circle, rgba(10,20,50,0.92) 0%, rgba(4,8,24,0.95) 65%)',
      border: '1px solid rgba(201,168,76,0.48)',
      animation: 'bp 4.2s ease-in-out infinite',
    }}>
      <span style={{ fontFamily:"'Cinzel',serif", fontSize:'26px', fontWeight:700, color:'var(--gold)', lineHeight:1 }}>V</span>
    </div>
  </div>
);

export const CompassCaption: React.FC = () => (
  <div style={{
    position: 'absolute', top: '50%', left: '50%',
    transform: 'translate(-50%, calc(-50% + 88px))',
    textAlign: 'center',
    zIndex: 31,
    pointerEvents: 'none',
  }}>
    {['You are the center.', 'Everything connects.'].map((t, i) => (
      <div key={i} style={{
        fontFamily: "'Cinzel', serif",
        fontSize: '7px',
        letterSpacing: '0.28em',
        color: 'rgba(201,168,76,0.32)',
        textTransform: 'uppercase',
        lineHeight: 1.9,
      }}>{t}</div>
    ))}
  </div>
);
