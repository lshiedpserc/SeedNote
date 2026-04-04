import { memo } from 'react';

const Footer = memo(() => {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center px-4 py-2 bg-[#131313] border-t border-[#353534]/15">
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-label uppercase tracking-tighter text-[#cac3d8]">SeedNote v2.4.0 • すべてのノートが同期されました</span>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[10px] font-label uppercase tracking-tighter text-[#cac3d8]">オフラインモード</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-label uppercase tracking-tighter text-[#cac3d8]">ストレージ: 85% 使用</span>
          <div className="w-20 h-1 bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-secondary w-[85%]"></div>
          </div>
        </div>
        <a className="text-[10px] font-label uppercase tracking-tighter text-[#cac3d8] hover:text-[#e5e2e1] transition-opacity" href="#">サポート</a>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
