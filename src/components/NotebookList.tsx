import { memo } from 'react';

const NotebookList = memo(() => {
  return (
    <section className="ml-64 w-80 bg-surface-container-low flex flex-col border-r border-outline-variant/10">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold font-headline text-on-surface">ノートブック 1</h2>
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">filter_list</span>
        </div>
        <div className="space-y-2">
          <div className="p-4 bg-surface-container-highest rounded-xl border border-primary/20 shadow-lg">
            <p className="text-xs font-bold text-primary mb-1">新しいページ</p>
            <p className="text-[10px] text-on-surface-variant line-clamp-2 leading-relaxed">SeedNoteで今日からクリエイティブな旅を始める...</p>
            <div className="flex gap-1.5 mt-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
            </div>
          </div>
          <div className="p-4 bg-surface-container rounded-xl hover:bg-surface-container-high transition-colors cursor-pointer group">
            <p className="text-xs font-medium text-on-surface mb-1 group-hover:text-primary transition-colors">ミーティングノート</p>
            <p className="text-[10px] text-on-surface-variant line-clamp-1">プロジェクトデルタのキックオフディスカッション...</p>
            <p className="text-[9px] text-on-surface-variant/40 mt-2">2023年10月24日</p>
          </div>
          <div className="p-4 bg-surface-container rounded-xl hover:bg-surface-container-high transition-colors cursor-pointer group">
            <p className="text-xs font-medium text-on-surface mb-1 group-hover:text-primary transition-colors">アプリのアイデア</p>
            <p className="text-[10px] text-on-surface-variant line-clamp-1">次のメジャーアップデートのブレインストーミング...</p>
            <p className="text-[9px] text-on-surface-variant/40 mt-2">2023年10月22日</p>
          </div>
        </div>
      </div>
      <div className="mt-auto p-6 bg-gradient-to-t from-surface-container-low to-transparent">
        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-outline-variant/20 hover:bg-surface-container-high transition-all text-on-surface-variant text-xs font-medium">
          <span className="material-symbols-outlined text-sm">add</span>
          セクションを追加
        </button>
      </div>
    </section>
  );
});

NotebookList.displayName = 'NotebookList';

export default NotebookList;
