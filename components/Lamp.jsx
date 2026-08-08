'use client';

import { useEffect, useRef, useState } from 'react';
import { useLightRoom } from './LightProvider';
import { useT } from './Settings';

/**
 * Кликабельная лампа без рамки: две фотографии (выключено / включено) лежат
 * друг на друге, при нажатии верхняя плавно проявляется. Длительность и
 * кривые перехода заданы в globals.css — разные для «вкл» и «выкл».
 *
 * blend — растворить края фото в фоне страницы (для снимков на чёрном).
 */
export default function Lamp({
  off,
  on,
  title,
  sub,
  glow = { x: 50, y: 55 },
  blend = false,
  size = 'md',
  className = '',
  priority = false,
}) {
  const [isOn, setIsOn] = useState(false);
  const room = useLightRoom();
  const t = useT();
  const onRef = useRef(false);
  const lastCmd = useRef(room?.cmd.n ?? 0);

  // регистрируемся в «комнате», чтобы общий выключатель знал про нас
  useEffect(() => {
    room?.enroll(1);
    return () => {
      room?.enroll(-1);
      if (onRef.current) room?.report(-1);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function light(next) {
    if (onRef.current === next) return;
    onRef.current = next;
    setIsOn(next);
    room?.report(next ? 1 : -1);
  }

  // реакция на общий выключатель
  useEffect(() => {
    if (!room || room.cmd.n === lastCmd.current) return;
    lastCmd.current = room.cmd.n;
    light(room.cmd.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room?.cmd]);

  return (
    <button
      type="button"
      onClick={() => light(!isOn)}
      aria-pressed={isOn}
      aria-label={`${title} — ${isOn ? t.ui.lampOff : t.ui.lampOn}`}
      className={['lamp', `lamp--${size}`, isOn ? 'on' : '', blend ? 'blend' : '', className]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="lamp-stage">
        <img
          className="frame-off"
          src={off}
          alt={`${title}, свет выключен`}
          loading={priority ? 'eager' : 'lazy'}
          draggable={false}
        />
        <img
          className="frame-on"
          src={on}
          alt=""
          aria-hidden="true"
          loading={priority ? 'eager' : 'lazy'}
          draggable={false}
        />
        <span className="halo" style={{ '--hx': `${glow.x}%`, '--hy': `${glow.y}%` }} />
        <span className="bloom" style={{ '--hx': `${glow.x}%`, '--hy': `${glow.y}%` }} />
      </span>

      <span className="lamp-label">
        <span className="lamp-title">{title}</span>
        <span className="lamp-sub">{sub}</span>
        <span className="state">{isOn ? t.ui.state.on : t.ui.state.off}</span>
      </span>
    </button>
  );
}
