import { useEffect, useMemo, useRef, useState } from 'react'
import { eras, figures } from './figures.js'

const FAVORITES_KEY = 'wenmai:favorites:v1'
const VISITED_KEY = 'wenmai:visited:v1'

function loadIds(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '[]')
    return Array.isArray(value) ? value.filter((id) => figures.some((item) => item.id === id)) : []
  } catch {
    return []
  }
}

function Landscape() {
  return (
    <svg className="landscape" viewBox="0 0 660 540" role="img" aria-label="水墨远山、红日与一叶小舟">
      <defs>
        <linearGradient id="mountain" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#58635d" stopOpacity=".78" />
          <stop offset="1" stopColor="#58635d" stopOpacity=".04" />
        </linearGradient>
        <linearGradient id="mountainLight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9ca39a" stopOpacity=".62" />
          <stop offset="1" stopColor="#9ca39a" stopOpacity=".04" />
        </linearGradient>
      </defs>
      <circle cx="425" cy="164" r="99" fill="#b34b3f" opacity=".95" />
      <path d="M60 366 Q156 315 224 346 Q301 270 357 323 Q431 275 524 336 Q566 321 635 349 L635 520 L60 520Z" fill="url(#mountainLight)" />
      <path d="M0 431 Q84 372 149 404 Q206 363 270 398 Q343 314 407 374 Q464 346 536 400 Q593 373 660 416 L660 540 L0 540Z" fill="url(#mountain)" />
      <path d="M0 468 Q128 453 240 469 T480 468 T660 470" fill="none" stroke="#768078" strokeWidth="2" opacity=".3" />
      <path d="M83 484 Q205 472 302 485 T550 485" fill="none" stroke="#768078" strokeWidth="2" opacity=".22" />
      <path d="M365 469 Q408 478 453 469 L441 484 Q411 494 380 482Z" fill="#242f2e" />
      <path d="M409 468 L413 431" stroke="#242f2e" strokeWidth="2" />
      <path d="M413 433 Q431 440 445 458 L413 457Z" fill="#f1eadf" stroke="#242f2e" strokeWidth="1.5" />
      <path d="M496 79 q8 -7 16 0 m10 8 q8 -7 16 0" fill="none" stroke="#263330" strokeWidth="2" strokeLinecap="round" opacity=".7" />
    </svg>
  )
}

function FigureCard({ figure, index, isFavorite, onOpen, onFavorite, compact = false }) {
  return (
    <article className={`figure-card tone-${figure.color}${compact ? ' compact' : ''}`}>
      <div className="card-head">
        <span className="card-index">{String(index + 1).padStart(2, '0')} / {figure.era}</span>
        <button className={`favorite-btn${isFavorite ? ' is-favorite' : ''}`} type="button" onClick={() => onFavorite(figure.id)} aria-label={`${isFavorite ? '取消收藏' : '收藏'}${figure.name}`} title={isFavorite ? '取消收藏' : '收藏'}>
          {isFavorite ? '★' : '☆'}
        </button>
      </div>
      <button className="card-main" type="button" onClick={() => onOpen(figure.id)} aria-label={`阅读${figure.name}的故事`}>
        <span className="card-mark" aria-hidden="true">{figure.mark}</span>
        <span className="card-role">{figure.role}</span>
        <span className="card-name">{figure.name}</span>
        <span className="card-courtesy">{figure.courtesy}</span>
        <span className="card-tagline">{figure.tagline}</span>
        <span className="card-quote">“{figure.quote}”</span>
        <span className="card-action">展开人物手札 <span aria-hidden="true">↗</span></span>
      </button>
    </article>
  )
}

function Detail({ figure, isFavorite, onClose, onFavorite, onMove }) {
  const closeRef = useRef(null)

  useEffect(() => {
    closeRef.current?.focus()
    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onMove(-1)
      if (event.key === 'ArrowRight') onMove(1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = oldOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onMove])

  return (
    <div className="dialog-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className={`detail-panel tone-${figure.color}`} role="dialog" aria-modal="true" aria-labelledby="detail-title">
        <div className="detail-toolbar">
          <span>文脉长卷 / 人物手札</span>
          <button ref={closeRef} className="close-btn" type="button" onClick={onClose} aria-label="关闭人物详情">×</button>
        </div>
        <div className="detail-content">
          <div className="detail-left">
            <p className="eyebrow">{figure.era} · {figure.role}</p>
            <div className="detail-mark" aria-hidden="true">{figure.mark}</div>
            <h2 id="detail-title">{figure.name}</h2>
            <p className="detail-alias">{figure.courtesy}</p>
            <p className="detail-hook">{figure.hook}</p>
            <div className="detail-quote"><span>代表作品 · {figure.work}</span><blockquote>“{figure.quote}”</blockquote></div>
          </div>
          <div className="detail-right">
            <div className="reading-label">卷内阅读 <span>01 / 03</span></div>
            <h3>说说这个人</h3>
            <p>{figure.story}</p>
            <div className="reading-label">细读一句 <span>02 / 03</span></div>
            <h3>这句妙在哪</h3>
            <p>{figure.insight}</p>
            <div className="reading-label">史料小注 <span>03 / 03</span></div>
            <p className="source-note">{figure.detail}</p>
            <a className="source-link" href={figure.source} target="_blank" rel="noreferrer">查看作品原文与出处 ↗</a>
            <div className="detail-actions">
              <button className={`primary-button small${isFavorite ? ' saved' : ''}`} type="button" onClick={() => onFavorite(figure.id)}>{isFavorite ? '✓ 已收入书签 · 点击移除' : '＋ 收入我的书签'}</button>
              <div className="page-arrows">
                <button type="button" onClick={() => onMove(-1)} aria-label="上一位人物">←</button>
                <button type="button" onClick={() => onMove(1)} aria-label="下一位人物">→</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function App() {
  const [era, setEra] = useState('all')
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState(null)
  const [favorites, setFavorites] = useState(() => loadIds(FAVORITES_KEY))
  const [visited, setVisited] = useState(() => loadIds(VISITED_KEY))
  const [notice, setNotice] = useState('')
  const [progress, setProgress] = useState(0)
  const noticeTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    try { localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites)) }
    catch { setNotice('浏览器未允许本地保存，收藏仅在本次打开期间有效。') }
  }, [favorites])

  useEffect(() => {
    try { localStorage.setItem(VISITED_KEY, JSON.stringify(visited)) }
    catch { setNotice('浏览器未允许本地保存，阅读足迹仅在本次打开期间有效。') }
  }, [visited])

  useEffect(() => () => clearTimeout(noticeTimer.current), [])

  const filtered = useMemo(() => {
    const term = query.trim().toLocaleLowerCase('zh-CN')
    return figures.filter((figure) => {
      const matchesEra = era === 'all' || figure.eraKey === era
      const text = `${figure.name} ${figure.courtesy} ${figure.era} ${figure.role} ${figure.work} ${figure.tagline}`.toLocaleLowerCase('zh-CN')
      return matchesEra && (!term || text.includes(term))
    })
  }, [era, query])

  const selected = figures.find((figure) => figure.id === selectedId)
  const savedFigures = figures.filter((figure) => favorites.includes(figure.id))
  const visitedFigures = visited.map((id) => figures.find((figure) => figure.id === id)).filter(Boolean).slice(0, 5)

  function toast(message) {
    setNotice(message)
    clearTimeout(noticeTimer.current)
    noticeTimer.current = setTimeout(() => setNotice(''), 3200)
  }

  function openFigure(id) {
    setSelectedId(id)
    setVisited((items) => [id, ...items.filter((item) => item !== id)])
  }

  function toggleFavorite(id) {
    const figure = figures.find((item) => item.id === id)
    const alreadySaved = favorites.includes(id)
    setFavorites((items) => alreadySaved ? items.filter((item) => item !== id) : [...items, id])
    toast(alreadySaved ? `已从书签移除 ${figure.name}` : `已把 ${figure.name} 收入书签`)
  }

  function moveFigure(direction) {
    const index = figures.findIndex((figure) => figure.id === selectedId)
    const next = (index + direction + figures.length) % figures.length
    openFigure(figures[next].id)
  }

  function randomFigure() {
    const options = figures.filter((figure) => figure.id !== selectedId)
    openFigure(options[Math.floor(Math.random() * options.length)].id)
  }

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <header id="top" className="site-header">
        <a className="brand" href="#top" aria-label="文脉长卷，回到首页"><span className="brand-seal">文<br />脉</span><span><strong>文脉长卷</strong><small>一卷读懂有趣的他们</small></span></a>
        <nav aria-label="主导航"><a href="#explore">沿卷探索</a><a href="#shelf">我的书签 <span className="nav-count">{favorites.length}</span></a><a href="#about">关于长卷</a></nav>
        <button className="header-cta" type="button" onClick={randomFigure}>偶遇一位 <span aria-hidden="true">↗</span></button>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="kicker-line" /> 一场跨越千年的纸上相逢 <span className="kicker-line" /></div>
            <h1 id="hero-title">历史很远，<br /><em>他们很近。</em></h1>
            <p className="hero-intro">从屈原的求索，到苏轼的明月。九位历史人物与诗人，带着各自的理想、烦恼和金句，在这卷纸上与你重新见面。</p>
            <div className="hero-actions"><a className="primary-button" href="#explore">展开长卷 <span aria-hidden="true">→</span></a><button className="text-button" type="button" onClick={randomFigure}>今天先认识谁？ ↗</button></div>
            <div className="hero-meta"><span><strong>09</strong> 位人物</span><span className="meta-divider" /><span><strong>04</strong> 个时代</span><span className="meta-divider" /><span>一卷有点意思的历史</span></div>
          </div>
          <div className="hero-art"><div className="hero-art-ring" /><Landscape /><div className="art-caption">山河为序 · 人物为章</div><div className="vertical-stamp">读史<br />如见<br />故人</div></div>
          <div className="hero-side-note">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <div className="marquee" aria-hidden="true"><span>诗里有山河　·　史中有人间　·　一路读下去，总会遇见熟悉的心事</span><span>诗里有山河　·　史中有人间　·　一路读下去，总会遇见熟悉的心事</span></div>

        <section id="explore" className="explore section-wrap" aria-labelledby="explore-title">
          <div className="section-topline"><span>第一章 / 沿卷探索</span><span>01 — 03</span></div>
          <div className="section-heading"><div><p className="eyebrow">THE PEOPLE BEHIND THE POEMS</p><h2 id="explore-title">翻开他们的<span>故事</span></h2></div><p>把人物从课本里请出来。点开手札，读读他们的作品，也读读他们真实的人生。</p></div>
          <div className="filters"><div className="era-tabs" role="group" aria-label="按时代筛选">{eras.map((item) => <button key={item.id} type="button" className={era === item.id ? 'active' : ''} onClick={() => setEra(item.id)} aria-pressed={era === item.id}>{item.label}</button>)}</div><label className="search-box"><span aria-hidden="true">⌕</span><span className="sr-only">搜索人物、作品或时代</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索人物 / 作品 / 时代" />{query && <button type="button" onClick={() => setQuery('')} aria-label="清空搜索">×</button>}</label></div>
          <div className="result-line"><span>当前展开 <b>{filtered.length}</b> 位人物</span><span>点击人物，继续读下去 <span aria-hidden="true">↘</span></span></div>
          {filtered.length ? <div className="figure-grid">{filtered.map((figure) => <FigureCard key={figure.id} figure={figure} index={figures.indexOf(figure)} isFavorite={favorites.includes(figure.id)} onOpen={openFigure} onFavorite={toggleFavorite} />)}</div> : <div className="empty-state"><span className="empty-glyph">寻</span><h3>这卷里暂时没有找到</h3><p>换个名字、作品或时代试试，也可以回到全部人物。</p><button type="button" onClick={() => { setEra('all'); setQuery('') }}>查看全部人物 →</button></div>}
        </section>

        <section className="interlude"><div className="interlude-inner"><span className="interlude-mark">✦</span><p>“读一个人，像读一首诗。<br />前一句是时代，后一句是他自己。”</p><span>文脉长卷 · 写给今天的读者</span></div></section>

        <section id="shelf" className="shelf section-wrap" aria-labelledby="shelf-title">
          <div className="section-topline"><span>第二章 / 我的书签</span><span>02 — 03</span></div>
          <div className="section-heading"><div><p className="eyebrow">YOUR PERSONAL SCROLL</p><h2 id="shelf-title">把喜欢的<span>留下</span></h2></div><p>喜欢谁，就点人物卡片右上角的星。你的书签和阅读足迹会留在这台浏览器里。</p></div>
          <div className="shelf-layout"><div><div className="shelf-label"><span>已收藏的人物</span><span>{String(savedFigures.length).padStart(2, '0')} / 09</span></div>{savedFigures.length ? <div className="saved-grid">{savedFigures.map((figure) => <FigureCard key={figure.id} figure={figure} index={figures.indexOf(figure)} compact isFavorite onOpen={openFigure} onFavorite={toggleFavorite} />)}</div> : <div className="shelf-empty"><span className="empty-glyph">签</span><h3>书签还是空白的</h3><p>去长卷里选一位想再读的人吧。</p><a href="#explore">去认识他们 →</a></div>}</div><aside className="footprints"><div className="shelf-label"><span>最近读过</span><span>{String(visitedFigures.length).padStart(2, '0')}</span></div>{visitedFigures.length ? <ol>{visitedFigures.map((figure, index) => <li key={figure.id}><button type="button" onClick={() => openFigure(figure.id)}><span>{String(index + 1).padStart(2, '0')}</span><strong>{figure.name}</strong><small>{figure.era}</small><span aria-hidden="true">↗</span></button></li>)}</ol> : <div className="footprints-empty">尚无阅读足迹。<br />翻开一份人物手札，它就会出现在这里。</div>}<div className="footprints-note">所有记录只保存在当前浏览器，无需登录。</div></aside></div>
        </section>

        <section id="about" className="about section-wrap" aria-labelledby="about-title"><div className="section-topline"><span>第三章 / 卷尾记</span><span>03 — 03</span></div><div className="about-grid"><div><p className="eyebrow">A NOTE FROM THE MAKER</p><h2 id="about-title">让历史，<br /><span>有点意思。</span></h2></div><div><p>这是一座小小的线上人物展厅。我们想用清楚的史实、轻松的讲述和一点点纸墨气息，让历史人物不再只是考试里的名字。</p><p>作品原句可从人物手札进入原文页面核对。人物解说为本项目原创的通俗表达；历史细节若有争议，以所列文献及进一步研究为准。</p><a href="#top">回到卷首 ↑</a></div></div></section>
      </main>

      <footer className="site-footer"><div className="brand-seal">文<br />脉</div><p>文脉长卷 · 路线二 / Agent 辅助编程<br />九位人物，一场纸上相逢。</p><span>© 2026 文脉长卷</span></footer>
      {selected && <Detail figure={selected} isFavorite={favorites.includes(selected.id)} onClose={() => setSelectedId(null)} onFavorite={toggleFavorite} onMove={moveFigure} />}
      {notice && <div className="toast" role="status">{notice}</div>}
    </>
  )
}
