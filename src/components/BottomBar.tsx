import React from 'react';
import { BOTTOM } from '../config/systems.config';

export const BottomBar: React.FC = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '200px 1fr 200px',
    alignItems: 'center',
    padding: '0 28px',
    borderTop: '1px solid rgba(201,168,76,0.07)',
    background: 'rgba(1,3,8,0.45)',
    backdropFilter: 'blur(16px)',
    animation: 'fadeUp 0.5s 0.65s both',
  }}>
    {/* 座標 */}
    <div style={{ display:'flex', flexDirection:'column', gap:'3px' }}>
      <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'8.5px', letterSpacing:'0.20em', textTransform:'uppercase', color:'var(--text3)' }}>
        Current Position
      </div>
      <div style={{ display:'flex', alignItems:'center', gap:'6px', fontFamily:"'DM Mono',monospace", fontSize:'10.5px', letterSpacing:'0.09em', color:'var(--text2)' }}>
        <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'var(--gold)', animation:'lb 2s ease-in-out infinite' }}/>
        {BOTTOM.coords}
      </div>
      <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'8.5px', letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--text3)' }}>
        {BOTTOM.place}
      </div>
    </div>

    {/* Motto */}
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'18px' }}>
      {BOTTOM.motto.map((word, i) => (
        <React.Fragment key={word}>
          {i > 0 && (
            <span style={{ color:'rgba(255,255,255,0.10)', fontSize:'10px' }}>·</span>
          )}
          <span style={{ fontFamily:"'Cinzel',serif", fontSize:'10px', letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--text3)', cursor:'pointer' }}>
            {word}
          </span>
        </React.Fragment>
      ))}
    </div>

    {/* 系統狀態 */}
    <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:'3px' }}>
      <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'8.5px', letterSpacing:'0.20em', textTransform:'uppercase', color:'var(--text3)' }}>
        {BOTTOM.statusLabel}
      </div>
      <div style={{ display:'flex', alignItems:'center', gap:'6px', fontFamily:"'DM Mono',monospace", fontSize:'10.5px', letterSpacing:'0.08em', color:'var(--teal)' }}>
        <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'var(--teal)', boxShadow:'0 0 6px rgba(74,191,168,0.6)', animation:'lp 2s ease-in-out infinite' }}/>
        {BOTTOM.statusText}
      </div>
    </div>
  </div>
);
