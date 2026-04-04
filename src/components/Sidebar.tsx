import { memo } from 'react';

const Sidebar = memo(() => {
  return (
    <aside className="fixed left-0 top-0 h-full z-40 flex flex-col border-r border-[#353534]/15 bg-[#1c1b1b] w-64 pt-20">
      <div className="px-6 mb-6">
        <div className="flex items-center gap-3 mb-1">
          <img className="w-8 h-8 rounded-full object-cover" alt="Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRYa3_98AbPDc2HLz3WbXxyhlAzEJbqJkspwQgZgArW-3RGMfJllJvifkYSrVoWVZs-TkYvm4Z4tu6IWu62VvaDaSlXLt_esgLWxBQY0kAQdKs_XneHIPWDR8kZKRowDpq6WY90rxe_Bnb8MWIgeEOOcdKbm-QiuZuYsdwCd0ETtIgu1lzaU79IFTLwGbjoj2Afb485rK3OB8q2Rl-n_MX2nOucHQTJ52hxh9GM-2QfCg8og0Zt96D5aLmlZeJXvxf1WlnGLlwI6g6"/>
          <div>
            <p className="text-xs font-bold text-on-surface tracking-tight">マイライブラリ</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">6 ノートブック</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto hide-scrollbar">
        <div className="flex items-center gap-3 text-[#cac3d8] px-4 py-3 mx-2 hover:bg-[#353534] rounded-lg transition-all duration-300">
          <span className="material-symbols-outlined">history</span>
          <span className="text-xs font-medium font-label uppercase tracking-widest">最近</span>
        </div>
        <div className="flex items-center gap-3 bg-[#8753e3]/20 text-[#d3bbff] rounded-lg px-4 py-3 mx-2 shadow-[inset_0_0_8px_rgba(211,187,255,0.1)] transition-all duration-300">
          <span className="material-symbols-outlined">import_contacts</span>
          <span className="text-xs font-medium font-label uppercase tracking-widest">ノートブック</span>
        </div>
        <div className="flex items-center gap-3 text-[#cac3d8] px-4 py-3 mx-2 hover:bg-[#353534] rounded-lg transition-all duration-300">
          <span className="material-symbols-outlined">sticky_note_2</span>
          <span className="text-xs font-medium font-label uppercase tracking-widest">付箋</span>
        </div>
        <div className="flex items-center gap-3 text-[#cac3d8] px-4 py-3 mx-2 hover:bg-[#353534] rounded-lg transition-all duration-300">
          <span className="material-symbols-outlined">search</span>
          <span className="text-xs font-medium font-label uppercase tracking-widest">検索</span>
        </div>
        <div className="flex items-center gap-3 text-[#cac3d8] px-4 py-3 mx-2 hover:bg-[#353534] rounded-lg transition-all duration-300">
          <span className="material-symbols-outlined">delete</span>
          <span className="text-xs font-medium font-label uppercase tracking-widest">ゴミ箱</span>
        </div>
      </nav>
      <div className="p-4">
        <button className="w-full primary-gradient text-on-primary font-bold text-xs py-3 rounded-xl shadow-lg shadow-primary-container/20 flex items-center justify-center gap-2 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-sm">add_circle</span>
          新しいノートブック
        </button>
      </div>
      <div className="border-t border-outline-variant/10 py-4">
        <div className="flex items-center gap-3 text-[#cac3d8] px-4 py-2 mx-2 hover:bg-[#353534] rounded-lg cursor-pointer">
          <span className="material-symbols-outlined text-sm">settings</span>
          <span className="text-[10px] font-medium uppercase tracking-tighter">設定</span>
        </div>
        <div className="flex items-center gap-3 text-[#cac3d8] px-4 py-2 mx-2 hover:bg-[#353534] rounded-lg cursor-pointer">
          <span className="material-symbols-outlined text-sm">help_outline</span>
          <span className="text-[10px] font-medium uppercase tracking-tighter">ヘルプ</span>
        </div>
      </div>
    </aside>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
