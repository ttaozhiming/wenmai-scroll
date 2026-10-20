import { useEffect, useRef } from 'react'
import './detail.css'

export default function DetailPanel({ figure, index, total, isFavorite, onClose, onFavorite, onPrevious, onNext, onDeepDive }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus({ preventScroll: true })
    return () => { document.body.style.overflow = previousOverflow }
  }, [])

  useEffect(() => {
    panelRef.current?.scrollTo({ top: 0, behavior: 'instant' })
  }, [figure.id])

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        onPrevious()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        onNext()
      } else if (event.key === 'Tab') {
        const focusable = [...panelRef.current.querySelectorAll('a[href], button:not([disabled])')]
        if (!focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose, onPrevious, onNext])

  return (
    <div className="dialog-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className={`detail-panel tone-${figure.color}`} role="dialog" aria-modal="true" aria-labelledby="detail-title" ref={panelRef}>
        <div className="detail-toolbar">
          <span>文脉长卷 / 人物手札</span>
          <button type="button" className="close-btn" aria-label="关闭人物手札" onClick={onClose} ref={closeRef}>×</button>
        </div>
        <div className="detail-content">
          <div className="detail-left">
            <p className="eyebrow">{figure.era}　·　{figure.role}</p>
            <span className="detail-mark" aria-hidden="true">{figure.mark}</span>
            <h2 id="detail-title">{figure.name}</h2>
            <p className="detail-alias">{figure.courtesy}</p>
            <p className="detail-hook">{figure.hook}</p>
            <div className="detail-quote"><span>代表作品 · {figure.work}</span><blockquote>“{figure.quote}”</blockquote></div>
          </div>
          <div className="detail-right">
            <div className="detail-deep">
              <div className="reading-label"><strong>深入了解</strong><span>故事篇 ↗</span></div>
              <p>走进{figure.name}的故事，听一段旁白，再亲自回应一句。</p>
              <a className="primary-button small detail-deep-link" href={`?person=${figure.id}`} onClick={(event) => onDeepDive(figure.id, event)}>
                深入了解 <span aria-hidden="true">→</span>
              </a>
            </div>

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
              <button type="button" className={`primary-button small${isFavorite ? ' saved' : ''}`} onClick={() => onFavorite(figure.id)}>
                {isFavorite ? '已收入我的书签 ★' : '收入我的书签 ☆'}
              </button>
              <div className="page-arrows">
                <button type="button" onClick={onPrevious} aria-label="上一位人物">←</button>
                <button type="button" onClick={onNext} aria-label="下一位人物">→</button>
              </div>
            </div>
            <p className="detail-page-count">{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')} 位人物</p>
          </div>
        </div>
      </section>
    </div>
  )
}
