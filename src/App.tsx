

function App() {
  return (
    <>
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

      <main className="pt-16 h-screen flex">
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
      </main>

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
    </>
  );
}

export default App;
