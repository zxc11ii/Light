'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useT } from './Settings';

/**
 * Хроника: одна карточка за раз, справа лампа. Чем дальше листаешь,
 * тем сильнее разгорается лампа — к последней карточке горит в полную силу.
 */
export default function Chronicle({ items, off, on, glow = { x: 50, y: 68 } }) {
  const [i, setI] = useState(0);
  const wrap = useRef(null);
  const t = useT();
  const n = items.length;
  const p = n > 1 ? i / (n - 1) : 1;

  const go = useCallback(
    (next) => setI((cur) => Math.min(n - 1, Math.max(0, typeof next === 'function' ? next(cur) : next))),
    [n]
  );

  // накал подмешивается к общей освещённости страницы
  useEffect(() => {
    document.body.style.setProperty('--beam', p.toFixed(3));
    return () => document.body.style.setProperty('--beam', '0');
  }, [p]);

  // стрелки на клавиатуре работают, пока хроника на экране
  useEffect(() => {
    function onKey(e) {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      const el = wrap.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.bottom < 80 || r.top > window.innerHeight - 80) return;
      e.preventDefault();
      go((c) => c + (e.key === 'ArrowRight' ? 1 : -1));
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  const item = items[i];

  return (
    <div className="chronicle" ref={wrap}>
      <div className="chr-card">
        <div className="chr-meta">
          <span>
            {String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
          </span>
          <span className="chr-wire" />
        </div>

        {/* key перезапускает анимацию появления на каждой карточке */}
        <div className="chr-body" key={i}>
          <div className="chr-year">{item.year}</div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>

        <div className="chr-controls">
          {/* функциональная форма: подряд идущие клики не теряются,
             даже если React ещё не успел перерисовать карточку */}
          <button
            type="button"
            onClick={() => go((c) => c - 1)}
            disabled={i === 0}
            aria-label={t.ui.prev}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go((c) => c + 1)}
            disabled={i === n - 1}
            aria-label={t.ui.next}
          >
            →
          </button>

          <div className="chr-ticks" role="tablist" aria-label={t.ui.timelineNav}>
            {items.map((it, k) => (
              <button
                key={it.year}
                type="button"
                role="tab"
                aria-selected={k === i}
                aria-label={it.year}
                className={k <= i ? 'lit' : ''}
                onClick={() => go(k)}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="chr-lamp"
        onClick={() => go((c) => (c === n - 1 ? 0 : c + 1))}
        aria-label={t.ui.next}
        style={{ '--p': p, '--hx': `${glow.x}%`, '--hy': `${glow.y}%` }}
      >
        <span className="chr-stage">
          <img className="frame-off" src={off} alt="" aria-hidden="true" />
          <img className="frame-on" src={on} alt="" aria-hidden="true" />
          <span className="chr-bloom" />
        </span>
        <span className="chr-gauge">
          <span className="chr-gauge-bar">
            <span style={{ transform: `scaleX(${Math.max(p, 0.02)})` }} />
          </span>
          {t.ui.gauge} {Math.round(p * 100)} %
        </span>
      </button>
    </div>
  );
}
