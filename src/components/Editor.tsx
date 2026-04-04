import { memo } from 'react';

const Editor = memo(() => {
  return (
    <section className="flex-1 bg-surface flex flex-col relative">
      <header className="px-10 py-4 flex items-center justify-between bg-surface/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-2 text-[10px] text-on-surface-variant font-medium uppercase tracking-widest">
          <span>SeedNote</span>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span>ノートブック 1</span>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-primary font-bold">新しいページ</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">star</button>
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">share</button>
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">more_vert</button>
        </div>
      </header>

      <div className="mx-10 mt-2 p-2 bg-surface-container-high rounded-full flex items-center gap-1 shadow-2xl">
        <div className="flex items-center px-2 border-r border-outline-variant/20 gap-1">
          <button className="p-2 hover:bg-surface-variant rounded-full text-on-surface-variant transition-colors"><span className="material-symbols-outlined">format_bold</span></button>
          <button className="p-2 hover:bg-surface-variant rounded-full text-on-surface-variant transition-colors"><span className="material-symbols-outlined">format_italic</span></button>
          <button className="p-2 hover:bg-surface-variant rounded-full text-on-surface-variant transition-colors"><span className="material-symbols-outlined">format_underlined</span></button>
        </div>
        <div className="flex items-center px-2 border-r border-outline-variant/20 gap-1">
          <button className="p-2 hover:bg-surface-variant rounded-full text-on-surface-variant transition-colors"><span className="material-symbols-outlined">format_list_bulleted</span></button>
          <button className="p-2 hover:bg-surface-variant rounded-full text-on-surface-variant transition-colors"><span className="material-symbols-outlined">checklist</span></button>
        </div>
        <div className="flex items-center px-2 border-r border-outline-variant/20 gap-1">
          <button className="p-2 hover:bg-surface-variant rounded-full text-on-surface-variant transition-colors"><span className="material-symbols-outlined">image</span></button>
          <button className="p-2 hover:bg-surface-variant rounded-full text-on-surface-variant transition-colors"><span className="material-symbols-outlined">table_chart</span></button>
          <button className="p-2 hover:bg-surface-variant rounded-full text-on-surface-variant transition-colors"><span className="material-symbols-outlined">draw</span></button>
        </div>
        <div className="flex-1"></div>
        <div className="px-4 text-[10px] text-on-surface-variant/40 font-mono italic">下書き...</div>
      </div>

      <div className="flex-1 overflow-y-auto px-10 pt-12 pb-24 hide-scrollbar">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl font-extrabold font-headline tracking-tighter text-on-surface mb-6 leading-tight">新しいページ</h1>
          <div className="flex flex-wrap gap-2 mb-10">
            <span className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded-sm border border-secondary/20">ToDo</span>
            <span className="px-3 py-1 bg-error/10 text-error text-[10px] font-bold rounded-sm border border-error/20">重要</span>
            <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-sm border border-primary/20">アイデア</span>
            <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant text-[10px] font-bold rounded-sm">質問</span>
          </div>
          <div className="space-y-6 text-on-surface/90 text-lg leading-relaxed">
            <p>ここはあなたの夜のクリエイティブセッションが始まる場所です。インターフェースは消え、あなたの思考とキャンバスだけが残るように設計されています。</p>
            <div className="p-8 my-10 bg-surface-container-lowest rounded-3xl border-l-4 border-primary/40 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <h3 className="text-xl font-bold font-headline mb-4 text-primary">今日のフォーカス</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                  <span>線の代わりに色調の変化を利用して視覚的階層を定義する。</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-on-surface-variant">radio_button_unchecked</span>
                  <span>ハイエンドなエディトリアル感のためにManropeとタイポグラフィの組み合わせを探求する。</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-on-surface-variant">radio_button_unchecked</span>
                  <span>ワークスペースの設定をモバイルアプリと同期する。</span>
                </li>
              </ul>
            </div>
            <p>レイヤリングされたサーフェスを通じてどのように深みが達成されているかに注目してください。上のノートカードは<code className="bg-surface-container-high px-1.5 py-0.5 rounded text-secondary font-mono text-sm">lowest</code>コンテナに配置され、画面の中心への自然な引き寄せを作り出しています。</p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover" alt="Pen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2dZES8ql1MQq16Zgk-oElE8Z7RmwKQw-wKVOyNtx9gR38Rurx2RqRtDSK88KMWtUxPun71Dx07in1E23M38nT0iybyAfvRhzga4kre98PCgUZdF1FWYySk4e_jpCkTjcYANwbw5RYx92G12tTQbLwG_BenkUTjbKtf2560zq1vJB55YS5e1dZ0QA-AtlFGmlvaDcRbFnt_vw3qnut8G2HJVcA6fmd7VbZXsvwWhFkqMokLcy74QRx3rAh6XeuscvFoW-CIUS21u4P"/>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover" alt="Workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByW75pCZ8UZnrr3MPrYnRqjyI020OnWVfu7vLy-I_9XRF-ZW6S8kZUdci6NVk38BBq9bf2lmct2v-WBPtFg8iKZNsm87HvaCMgVoRPIsJnEPtiDsqn7hrcYNTihYOKpsaplHFQwmsE41h97sImI3vHCoBzZJMNXvp5ok1a_ftDbjvgOv1bpzWwvdpF9c6iGJm80SKkyhQMdcz5qWWSVQca8BBJCCHfYJELUd842lhE4P5RBM0U-mKxa8WP9OAqEy9v1hcZDWiTYeqk"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="fixed bottom-12 right-12 w-14 h-14 primary-gradient text-on-primary rounded-full shadow-[0_20px_40px_rgba(135,83,227,0.4)] flex items-center justify-center hover:scale-110 active:scale-90 transition-all z-50">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </section>
  );
});

Editor.displayName = 'Editor';

export default Editor;
