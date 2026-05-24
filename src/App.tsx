import React from 'react';
import { TopNav } from './components/TopNav';
import { HeroPanel } from './components/HeroPanel';
import { CompassCore, CompassCaption } from './components/CompassCore';
import { SystemCard } from './components/SystemCard';
import { BottomBar } from './components/BottomBar';
import { SYSTEMS } from './config/systems.config';
import bgImageBase64 from './assets/bgImage';

// 裝飾星芒
const Sparkle: React.FC<{ size: number; style: React.CSSProperties }> = ({ size, style }) => (
  <div style={{ position:'fixed', zIndex:9, pointerEvents:'none', animation:'spT 3.5s ease-in-out infinite', ...style }}>
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <line x1={size/2} y1="1" x2={size/2} y2={size-1} stroke="rgba(201,168,76,0.8)" strokeWidth="0.7"/>
      <line x1="1" y1={size/2} x2={size-1} y2={size/2} stroke="rgba(201,168,76,0.8)" strokeWidth="0.7"/>
      {size > 12 && <>
        <line x1={size*0.22} y1={size*0.22} x2={size*0.78} y2={size*0.78} stroke="rgba(201,168,76,0.35)" strokeWidth="0.5"/>
        <line x1={size*0.78} y1={size*0.22} x2={size*0.22} y2={size*0.78} stroke="rgba(201,168,76,0.35)" strokeWidth="0.5"/>
      </>}
      <circle cx={size/2} cy={size/2} r="0.9" fill="rgba(255,240,180,0.9)"/>
    </svg>
  </div>
);

export default function App() {
  return (
    <>
      {/* 背景圖層 */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0,
        backgroundImage: `url('data:image/png;base64,${bgImageBase64}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}/>
      {/* 疊層：整體微暗 */}
      <div style={{ position:'fixed', inset:0, zIndex:1, background:'rgba(1,3,8,0.36)' }}/>
      {/* 疊層：暈角 */}
      <div style={{ position:'fixed', inset:0, zIndex:2, background:'radial-gradient(ellipse 110% 110% at 50% 50%, transparent 30%, rgba(1,3,8,0.42) 68%, rgba(1,3,8,0.78) 100%)' }}/>
      {/* 疊層：左側文字遮罩 */}
      <div style={{ position:'fixed', inset:0, zIndex:3, background:'linear-gradient(90deg, rgba(1,3,8,0.58) 0%, rgba(1,3,8,0.26) 22%, transparent 42%)' }}/>
      {/* 疊層：頂部 fade */}
      <div style={{ position:'fixed', top:0, left:0, right:0, height:'80px', zIndex:3, background:'linear-gradient(180deg, rgba(1,3,8,0.52) 0%, transparent 100%)' }}/>
      {/* 疊層：底部 fade */}
      <div style={{ position:'fixed', bottom:0, left:0, right:0, height:'70px', zIndex:3, background:'linear-gradient(0deg, rgba(1,3,8,0.58) 0%, transparent 100%)' }}/>

      {/* 裝飾星芒 */}
      <Sparkle size={16} style={{ top:'11%', left:'27%', opacity:0.55, transform:'scale(0.65)', animationDelay:'0.7s' }}/>
      <Sparkle size={12} style={{ top:'31%', left:'7%',  opacity:0.45, transform:'scale(0.50)', animationDelay:'1.5s' }}/>
      <Sparkle size={14} style={{ top:'5%',  left:'61%', opacity:0.50, transform:'scale(0.55)', animationDelay:'2.1s' }}/>

      {/* 頁面主結構 */}
      <div style={{
        position: 'relative', zIndex: 20,
        width: '100%', height: '100vh',
        display: 'grid',
        gridTemplateRows: '52px 1fr 50px',
        animation: 'fadeIn 0.5s both',
      }}>
        <TopNav />

        {/* 主要內容 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '255px 1fr',
          alignItems: 'center',
          padding: '0 28px',
          overflow: 'hidden',
        }}>
          <HeroPanel />

          {/* Arena：羅盤 + 四卡片 */}
          <div style={{
            position: 'relative',
            height: 'calc(100vh - 102px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeUp 0.7s 0.2s both',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: '1fr 1fr',
              gap: '10px',
              width: '100%',
              height: '100%',
              maxWidth: '840px',
              maxHeight: '530px',
              position: 'relative',
            }}>
              <CompassCore />
              <CompassCaption />
              {SYSTEMS.map(domain => (
                <SystemCard key={domain.id} domain={domain} />
              ))}
            </div>
          </div>
        </div>

        <BottomBar />
      </div>

      {/* 全域動畫 keyframes */}
      <style>{`
        @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes fadeUp  { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes spT     { 0%,100% { opacity: .7 } 50% { opacity: .15 } }
        @keyframes cw      { to { transform: translate(-50%,-50%) rotate(360deg)  } }
        @keyframes ccw     { to { transform: translate(-50%,-50%) rotate(-360deg) } }
        @keyframes gp      { 0%,100% { opacity:.6; transform:translate(-50%,-50%) scale(1)   } 50% { opacity:1; transform:translate(-50%,-50%) scale(1.1) } }
        @keyframes bp      { 0%,100% { box-shadow:0 0 32px rgba(201,168,76,.22),inset 0 0 22px rgba(201,168,76,.06) } 50% { box-shadow:0 0 52px rgba(201,168,76,.4),inset 0 0 30px rgba(201,168,76,.12) } }
        @keyframes lb      { 0%,100% { opacity:.9 } 50% { opacity:.2  } }
        @keyframes lp      { 0%,100% { opacity:1  } 50% { opacity:.3  } }

        .sc { transition: all 0.32s; }
        .sc:hover { transform: translateY(-3px) scale(1.008); border-color: rgba(255,255,255,0.14) !important; box-shadow: 0 14px 44px rgba(0,0,0,0.55); }

        .sc-work  { animation: fadeUp 0.65s 0.28s both; }
        .sc-life  { animation: fadeUp 0.65s 0.36s both; }
        .sc-think { animation: fadeUp 0.65s 0.44s both; }
        .sc-create{ animation: fadeUp 0.65s 0.52s both; }

        .mi { width:16px; height:16px; flex-shrink:0; opacity:.55; }

        /* Tablet */
        @media (max-width: 900px) {
          .main-grid { grid-template-columns: 1fr !important; }
          .hero-desc-wrap { display: none; }
          .arena-grid { max-width: 640px !important; max-height: 420px !important; gap: 8px !important; }
          .btm-coords { display: none; }
        }

        /* Mobile */
        @media (max-width: 600px) {
          html, body, #root { overflow: auto !important; }
          .page { height: auto !important; min-height: 100vh; }
          .arena { height: auto !important; }
          .arena-grid { display: flex !important; flex-direction: column; max-width: 100% !important; max-height: none !important; }
          .compass { display: none !important; }
          .ccap   { display: none !important; }
        }
      `}</style>
    </>
  );
}
