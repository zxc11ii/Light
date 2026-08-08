'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const LightContext = createContext(null);

export function useLightRoom() {
  return useContext(LightContext);
}

/**
 * Считает, сколько ламп на странице горит, подсвечивает фон комнаты
 * переменной --room и умеет разом включить или погасить всё.
 */
export default function LightProvider({ children }) {
  const [lit, setLit] = useState(0);
  const [total, setTotal] = useState(0);
  // широковещательная команда всем лампам: {value, n}
  const [cmd, setCmd] = useState({ value: false, n: 0 });

  const report = useCallback((delta) => setLit((n) => Math.max(0, n + delta)), []);
  const enroll = useCallback((delta) => setTotal((n) => Math.max(0, n + delta)), []);
  const setAll = useCallback((value) => setCmd((c) => ({ value, n: c.n + 1 })), []);

  useEffect(() => {
    document.body.style.setProperty('--room', String(Math.min(lit, 4)));
  }, [lit]);

  const value = useMemo(
    () => ({ lit, total, cmd, report, enroll, setAll }),
    [lit, total, cmd, report, enroll, setAll]
  );

  return <LightContext.Provider value={value}>{children}</LightContext.Provider>;
}
