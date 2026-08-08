import './globals.css';
/* Порядок важен: базовые стили, затем переопределения по устройствам. */
import './styles/tablet.css';
import './styles/mobile.css';
import './styles/touch.css';
import './styles/motion.css';

export const metadata = {
  title: 'История лампы — от дуги до диода',
  description:
    'История создания электрической лампочки, её изобретатели и факты. Нажмите на лампу, чтобы включить свет.',
};

/* Тема ставится до первой отрисовки, иначе при выбранной светлой теме
   страница успевает моргнуть чёрным. Язык — тем же скриптом. */
const boot = `
try {
  var t = localStorage.getItem('lamp-theme');
  document.documentElement.dataset.theme = (t === 'light') ? 'light' : 'dark';
  var l = localStorage.getItem('lamp-lang');
  if (l === 'ru' || l === 'en') document.documentElement.lang = l;
} catch (e) {
  document.documentElement.dataset.theme = 'dark';
}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="ru" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
        {/* без JS анимации появления не сработают — показываем всё сразу */}
        <noscript>
          <style>{'.reveal{opacity:1 !important;transform:none !important}'}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
