import { useEffect, useMemo, useRef, useState } from 'react'
import './story.css'

function prefersLessMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

export default function StoryPage({ figure, story, isFavorite, onFavorite, onHome, onNext }) {
  const scenes = useMemo(
    () => story.chapters.flatMap((chapter, chapterIndex) => chapter.lines.map((line) => ({ ...line, chapterIndex }))),
    [story],
  )
  const [step, setStep] = useState(0)
  const [choiceReply, setChoiceReply] = useState('')
  const [visibleCount, setVisibleCount] = useState(0)
  const [portraitFailed, setPortraitFailed] = useState(false)
  const firstScene = useRef(true)
  const finished = step >= scenes.length
  const scene = finished ? null : scenes[step]
  const chapterIndex = scene?.chapterIndex ?? story.chapters.length - 1
  const currentText = choiceReply || (scene?.type === 'choice' ? '' : scene?.text || '')
  const textFinished = visibleCount >= currentText.length

  useEffect(() => {
    const oldTitle = document.title
    document.title = `${figure.name}的故事 · 文脉长卷`
    document.getElementById('story-title')?.focus({ preventScroll: true })
    return () => { document.title = oldTitle }
  }, [figure.name])

  useEffect(() => {
    if (firstScene.current) {
      firstScene.current = false
      return
    }
    document.getElementById(finished ? 'story-ending-title' : 'story-dialogue-title')?.focus({ preventScroll: true })
  }, [step, choiceReply, finished])

  useEffect(() => {
    if (!currentText) return undefined
    if (prefersLessMotion()) {
      setVisibleCount(currentText.length)
      return undefined
    }
    setVisibleCount(0)
    const timer = window.setInterval(() => {
      setVisibleCount((count) => {
        if (count >= currentText.length) {
          window.clearInterval(timer)
          return count
        }
        return Math.min(count + 2, currentText.length)
      })
    }, 36)
    return () => window.clearInterval(timer)
  }, [currentText])

  function advance() {
    if (finished || (scene?.type === 'choice' && !choiceReply)) return
    if (currentText && !textFinished) {
      setVisibleCount(currentText.length)
      return
    }
    setChoiceReply('')
    setStep((value) => Math.min(value + 1, scenes.length))
  }

  function previous() {
    if (choiceReply) {
      setChoiceReply('')
      return
    }
    setStep((value) => Math.max(value - 1, 0))
  }

  function skipChapter() {
    const next = scenes.findIndex((item, index) => index > step && item.chapterIndex > chapterIndex)
    setChoiceReply('')
    setStep(next < 0 ? scenes.length : next)
  }

  useEffect(() => {
    function onKey(event) {
      const tag = event.target?.tagName
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) return
      const onControl = ['BUTTON', 'A'].includes(tag)
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        previous()
      }
      if (event.key === 'ArrowRight' || (!onControl && (event.key === ' ' || event.key === 'Enter'))) {
        event.preventDefault()
        advance()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <div className={`story-page tone-${figure.color}`}>
      <div className="story-progress-track" role="progressbar" aria-label="故事阅读进度" aria-valuemin="0" aria-valuemax={scenes.length} aria-valuenow={step}>
        <span style={{ width: `${(step / scenes.length) * 100}%` }} />
      </div>
      <header className="story-header">
        <button type="button" className="story-back" onClick={onHome}>← 返回长卷</button>
        <div className="story-brand"><span className="brand-seal">文<br />脉</span><span>文脉长卷 <small>/ 人物篇</small></span></div>
        <button type="button" className={`story-favorite${isFavorite ? ' is-favorite' : ''}`} onClick={() => onFavorite(figure.id)} aria-label={`${isFavorite ? '取消收藏' : '收藏'}${figure.name}`}>
          {isFavorite ? '★ 已收藏' : '☆ 收藏人物'}
        </button>
      </header>

      <main className="story-main">
        <div className="story-stage">
          <div className="story-stage-rule" aria-hidden="true" />
          <div className="story-title-block">
            <span className="story-kicker">{figure.era} · {figure.role}</span>
            <h1 id="story-title" tabIndex="-1">{figure.name}</h1>
            <p>{figure.courtesy}</p>
            <span className="story-title-mark" aria-hidden="true">{figure.mark}</span>
          </div>
          <div className="story-art" aria-label={`${figure.name}的原创水墨形象，艺术化想象，非真实肖像`} role="img">
            <span className="story-art-halo" aria-hidden="true" />
            {portraitFailed ? <span className="story-portrait-fallback" aria-hidden="true">{figure.mark}</span> : (
              <img src={`${import.meta.env.BASE_URL}portraits/${figure.id}.webp`} alt="" onError={() => setPortraitFailed(true)} />
            )}
          </div>
          <div className="story-side-note" aria-hidden="true">一笔入画 · 一卷入心</div>

          {!finished ? (
            <section className="story-dialogue" aria-labelledby="story-dialogue-title">
              <div className="story-dialogue-meta">
                <span>{String(chapterIndex + 1).padStart(2, '0')} / {String(story.chapters.length).padStart(2, '0')}　{story.chapters[chapterIndex].title}</span>
                <span>{String(step + 1).padStart(2, '0')} / {String(scenes.length).padStart(2, '0')}</span>
              </div>
              {scene.type === 'choice' && !choiceReply ? (
                <div className="story-choice">
                  <h2 id="story-dialogue-title" tabIndex="-1">轮到你说</h2>
                  <p>{scene.prompt}</p>
                  <div className="story-options">{scene.options.map((option) => (
                    <button type="button" key={option.label} onClick={() => setChoiceReply(option.reply)}>{option.label} <span aria-hidden="true">↗</span></button>
                  ))}</div>
                </div>
              ) : (
                <div className="story-line" key={`${step}-${choiceReply}`}>
                  <h2 id="story-dialogue-title" tabIndex="-1">{choiceReply ? figure.name : scene.speaker === 'person' ? figure.name : '说书人'}{!choiceReply && scene.quote && <small>作品原句</small>}</h2>
                  <p className="story-line-text"><span className="sr-only" aria-live="polite">{currentText}</span><span aria-hidden="true">{currentText.slice(0, visibleCount)}</span></p>
                </div>
              )}
              <div className="story-dialogue-actions">
                <span className="story-disclaimer">人物对白为原创情境化表达，非历史原话。</span>
                <div className="story-controls">
                  <button type="button" onClick={previous} disabled={step === 0 && !choiceReply}>上一句</button>
                  <button type="button" onClick={skipChapter}>跳过本章</button>
                  <button type="button" className="story-next" onClick={advance} disabled={scene.type === 'choice' && !choiceReply}>
                    {!textFinished && currentText ? '显示全文' : step === scenes.length - 1 ? '读完故事 →' : '下一句 →'}
                  </button>
                </div>
              </div>
            </section>
          ) : (
            <section className="story-dialogue story-ending" aria-labelledby="story-ending-title">
              <span className="story-ending-kicker">卷末 · 读完这一章</span>
              <h2 id="story-ending-title" tabIndex="-1">{figure.name}，先聊到这里。</h2>
              <p>{story.summary}</p>
              <blockquote>“{figure.quote}”<cite>— {figure.work}</cite></blockquote>
              <p className="story-ending-note">{figure.detail} 人物形象为原创艺术化想象，并非史实肖像。</p>
              <div className="story-ending-actions">
                <a href={figure.source} target="_blank" rel="noreferrer">查看作品原文与出处 ↗</a>
                <button type="button" onClick={() => { setStep(0); setChoiceReply('') }}>从头再读</button>
                <button type="button" className="story-next" onClick={onNext}>遇见下一位 →</button>
              </div>
            </section>
          )}
        </div>
        <div className="story-footnote"><span>对话与画面为本项目原创</span><span>点击按钮或按空格 / → 继续阅读</span></div>
      </main>
    </div>
  )
}
