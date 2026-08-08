'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { content } from '../lib/content';

const SettingsContext = createContext(null);

export function useSettings() {
  return useContext(SettingsContext);
}

/** Короткий доступ к словарю текущего языка. */
export function useT() {
  return useSettings().t;
}

export const THEME_KEY = 'lamp-theme';
export const LANG_KEY = 'lamp-lang';

export default function Settings({ children }) {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('ru');
  // до первого чтения localStorage ничего туда не пишем,
  // иначе значения по умолчанию затрут сохранённый выбор
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const t = localStorage.getItem(THEME_KEY);
      const l = localStorage.getItem(LANG_KEY);
      if (t === 'light' || t === 'dark') setTheme(t);
      if (l === 'ru' || l === 'en') setLang(l);
    } catch {
      /* приватный режим — остаёмся на значениях по умолчанию */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    if (!ready) return;
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {}
  }, [theme, ready]);

  useEffect(() => {
    document.documentElement.lang = lang;
    if (!ready) return;
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {}
  }, [lang, ready]);

  const value = useMemo(
    () => ({
      theme,
      lang,
      t: content[lang],
      toggleTheme: () => setTheme((v) => (v === 'dark' ? 'light' : 'dark')),
      setLang,
    }),
    [theme, lang]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}
