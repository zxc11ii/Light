'use client';

import { useState } from 'react';
import { useT } from './Settings';

/**
 * Слайдер внутри карточки создателя. Если снимок один — показывает его
 * без всякого управления, стрелки и точки появляются только когда есть
 * что листать.
 */
export default function PhotoSlides({ photos, ratio = '4 / 5', className = '' }) {
  const [i, setI] = useState(0);
  const t = useT();
  const many = photos.length > 1;
  const current = photos[i];

  const go = (d) => setI((c) => (c + d + photos.length) % photos.length);

  return (
    <div className={`slides ${className}`} style={{ '--slide-ratio': ratio }}>
      <div className="slides-stage">
        {photos.map((p, k) => (
          <img
            key={p.src}
            src={p.src}
            alt={p.alt}
            loading="lazy"
            draggable={false}
            className={`${k === i ? 'is-on' : ''} ${p.paper ? 'paper' : ''}`}
            style={p.focus ? { objectPosition: p.focus } : undefined}
          />
        ))}

        {many && (
          <div className="slides-ui">
            <div className="slides-dots" role="tablist">
              {photos.map((p, k) => (
                <button
                  key={p.src}
                  type="button"
                  role="tab"
                  aria-selected={k === i}
                  aria-label={`${k + 1} / ${photos.length}`}
                  className={k === i ? 'on' : ''}
                  onClick={() => setI(k)}
                />
              ))}
            </div>
            <div className="slides-arrows">
              <button type="button" onClick={() => go(-1)} aria-label={t.ui.prev}>
                ‹
              </button>
              <button type="button" onClick={() => go(1)} aria-label={t.ui.next}>
                ›
              </button>
            </div>
          </div>
        )}
      </div>

      {current.caption && <p className="slides-caption">{current.caption}</p>}
    </div>
  );
}
