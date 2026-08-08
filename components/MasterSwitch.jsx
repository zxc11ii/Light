'use client';

import { useLightRoom } from './LightProvider';
import { useT } from './Settings';

/** Общий выключатель: гасит или зажигает все лампы страницы сразу. */
export default function MasterSwitch() {
  const room = useLightRoom();
  const t = useT();
  if (!room) return null;

  const allOn = room.total > 0 && room.lit === room.total;

  return (
    <button
      type="button"
      className={`master ${room.lit > 0 ? 'lit' : ''}`}
      onClick={() => room.setAll(!allOn)}
      aria-label={allOn ? t.ui.master.off : t.ui.master.on}
    >
      <span className="master-dot" />
      <span className="master-count">
        {room.lit} / {room.total}
      </span>
      <span className="master-text">{allOn ? t.ui.master.off : t.ui.master.on}</span>
    </button>
  );
}
