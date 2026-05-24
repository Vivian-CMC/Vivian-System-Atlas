// Vivian System Atlas — 系統設定資料
// 四大域固定不變；子系統項目為預設佔位，日後提供連結後更新

export type AccentKey = 'blue' | 'teal' | 'purple' | 'amber';

export interface SystemItem {
  name: string;
  href: string;
}

export interface SystemDomain {
  id: string;
  name: string;
  subtitle: string;
  accent: AccentKey;
  items: SystemItem[];
}

export const SYSTEMS: SystemDomain[] = [
  {
    id: 'work',
    name: 'Work OS',
    subtitle: '執行・管理・協作',
    accent: 'blue',
    items: [
      { name: 'CMC Overall Timeline', href: 'https://cmc-tracker.vercel.app/' },
      { name: 'Project Brief OS',     href: '#' },
      { name: 'Work Dashboard',       href: '#' },
      { name: 'Decision Log',         href: '#' },
    ],
  },
  {
    id: 'life',
    name: 'Life OS',
    subtitle: '平衡・健康・財務',
    accent: 'teal',
    items: [
      { name: 'Family Island',  href: 'https://vivian-cmc.github.io/Family-Island/' },
      { name: 'Health OS',      href: '#' },
      { name: 'Finance OS',     href: '#' },
      { name: 'Life Dashboard', href: '#' },
    ],
  },
  {
    id: 'think',
    name: 'Thinking OS',
    subtitle: '洞察・學習・成長',
    accent: 'purple',
    items: [
      { name: 'Insight OS',        href: 'https://vivian-cmc.github.io/Insight-OS/' },
      { name: 'Second Brain',      href: '#' },
      { name: 'Learning OS',       href: '#' },
      { name: 'Reflection Journal',href: '#' },
    ],
  },
  {
    id: 'create',
    name: 'Creation OS',
    subtitle: '內容・品牌・資產',
    accent: 'amber',
    items: [
      { name: 'Content OS',      href: '#' },
      { name: 'Writing Hub',     href: '#' },
      { name: 'Brand OS',        href: '#' },
      { name: 'Creative Archive',href: '#' },
    ],
  },
];

export const HERO = {
  titleItalic: 'Vivian',
  titleMain:   'System Atlas',
  zh:          '整合 · 連結 · 進化',
  desc:        '每一個系統，\n都是你航行中不可或缺的星艦。\n整合它們，航向更遠的未來。',
  cta:         'Explore Systems',
};

export const BOTTOM = {
  coords:    "24°02'25\"N 121°30'31\"E",
  place:     'Taiwan, Earth',
  motto:     ['Focus', 'Connect', 'Evolve'],
  statusLabel: 'System Status',
  statusText:  'All Systems Online',
};
