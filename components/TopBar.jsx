'use client';

import { useSettings } from './Settings';

/** Переключатели темы и языка. */
export default function TopBar() {
  const { theme, lang, t, toggleTheme, setLang } = useSettings();
  const dark = theme === 'dark';

  return (
    <div className="topbar">
      <button
        type="button"
        className="chip chip--theme"
        onClick={toggleTheme}
        aria-label={`${t.ui.theme.label}: ${dark ? t.ui.theme.dark : t.ui.theme.light}`}
        title={t.ui.theme.label}
      >
        <span className="chip-icon" aria-hidden="true">
          {dark ? '◐' : '◑'}
        </span>
        {dark ? t.ui.theme.dark : t.ui.theme.light}
      </button>

      <div className="chip chip--lang" role="group" aria-label={t.ui.lang.label}>
        {['ru', 'en'].map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={lang === code ? 'active' : ''}
          >
            {code.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
