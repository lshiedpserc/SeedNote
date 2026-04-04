import { memo } from 'react';

const Header = memo(() => {
  return (
    <header className="bg-[#131313] flex justify-between items-center w-full px-6 py-4 max-w-full fixed top-0 z-50">
      <div className="flex items-center gap-8">
        <span className="text-2xl font-black font-headline text-[#d3bbff] tracking-tighter">SeedNote</span>
        <nav className="hidden md:flex items-center gap-6">
          <a className="text-[#cac3d8] hover:text-[#e5e2e1] transition-colors text-sm font-label" href="#">ノートブック</a>
          <a className="text-[#cac3d8] hover:text-[#e5e2e1] transition-colors text-sm font-label" href="#">セクション</a>
          <a className="text-[#d3bbff] border-b-2 border-[#d3bbff] pb-1 font-bold text-sm font-label" href="#">ページ</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center bg-surface-container-high rounded-full px-4 py-1.5 gap-2 group transition-all duration-200 focus-within:ring-1 ring-primary/30">
          <span className="material-symbols-outlined text-on-surface-variant text-sm">search</span>
          <input className="bg-transparent border-none text-xs focus:ring-0 outline-none placeholder:text-on-surface-variant/50 w-48" placeholder="ノートを検索..." type="text"/>
        </div>
        <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest text-[#d3bbff] text-xs font-medium hover:bg-[#353534]/50 transition-all duration-200 active:scale-95">
          <span className="material-symbols-outlined text-sm">cloud_done</span>
          <span>クラウド同期</span>
        </button>
        <div className="flex items-center gap-2 border-l border-outline-variant/20 pl-4">
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">settings</button>
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">account_circle</button>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
