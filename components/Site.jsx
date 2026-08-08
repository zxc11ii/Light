'use client';

import Chronicle from './Chronicle';
import Divider from './Divider';
import Lamp from './Lamp';
import LightProvider from './LightProvider';
import MasterSwitch from './MasterSwitch';
import PhotoSlides from './PhotoSlides';
import Reveal from './Reveal';
import { useT } from './Settings';
import TopBar from './TopBar';
import { publicPath } from '../lib/paths';

/**
 * Порядок разделов подобран так, чтобы два лампомоментa никогда не шли
 * подряд: лампа — текст — лампа — текст — пара ламп в финале.
 */
export default function Site() {
  const t = useT();

  return (
    <LightProvider>
      <TopBar />
      <MasterSwitch />

      <main>
        {/* ── ГЕРОЙ · лампа ────────────────────────────────────── */}
        <section className="hero">
          <div className="hero-text">
            <span className="eyebrow">{t.hero.eyebrow}</span>
            <h1>
              {t.hero.title} <em>{t.hero.accent}</em>
            </h1>
            <p className="lead">{t.hero.lead}</p>
            <span className="hint">{t.hero.hint}</span>
          </div>

          <div className="hero-lamp">
            <Lamp
              off={publicPath("/foto/off1.jpg")}
              on={publicPath("/foto/on1.jpg")}
              title={t.lamps.edison.title}
              sub={t.lamps.edison.sub}
              glow={{ x: 50, y: 68 }}
              blend
              size="xl"
              priority
            />
          </div>
        </section>

        {/* ── 01 · СОЗДАТЕЛЬ · текст и архив, ламп нет ─────────── */}
        <Divider />

        <div className="band">
          <section>
            <Reveal>
              <span className="part">
                <b>01</b> {t.parts.creator}
              </span>
              <h2>{t.creator.title}</h2>
            </Reveal>

            <div className="creator">
              <Reveal as="aside" className="portrait">
                <PhotoSlides photos={t.creator.photos} ratio="4 / 3" className="slides--head" />
                <div className="big">
                  {t.creator.name[0]}
                  <br />
                  {t.creator.name[1]}
                </div>
                <dl>
                  {t.creator.facts.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={100}>
                {t.creator.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}

                <blockquote className="quote">
                  <p>{t.creator.quote}</p>
                  <cite>{t.creator.cite}</cite>
                </blockquote>
              </Reveal>
            </div>

            <Reveal className="sub-head">
              <h3>{t.creator.rivalsTitle}</h3>
            </Reveal>

            <div className="rivals">
              {t.creator.rivals.map((r, i) => (
                <Reveal as="article" className="rival" key={r.name} delay={i * 80}>
                  <PhotoSlides photos={r.photos} ratio="4 / 5" className="slides--head" />
                  <div className="rival-body">
                    <h3>{r.name}</h3>
                    <div className="role">{r.role}</div>
                    <p>{r.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </div>

        {/* ── 02 · ХРОНИКА · разгорающаяся лампа ───────────────── */}
        <Divider />

        <section>
          <Reveal>
            <span className="part">
              <b>02</b> {t.parts.chronicle}
            </span>
            <h2>{t.chronicle.title}</h2>
            <p className="lead">{t.chronicle.lead}</p>
          </Reveal>

          <Chronicle items={t.chronicle.items} off={publicPath("/foto/off1.jpg")} on={publicPath("/foto/on1.jpg")} />
        </section>

        {/* ── 03 · ФАКТЫ · без ламп ────────────────────────────── */}
        <Divider />

        <div className="band">
          <section>
            <Reveal>
              <span className="part">
                <b>03</b> {t.parts.facts}
              </span>
              <h2>{t.facts.title}</h2>
            </Reveal>

            <div className="facts">
              {t.facts.items.map((f, i) => (
                <Reveal as="article" className="fact" key={f.n} delay={(i % 3) * 80}>
                  <div className="fact-num">{f.n}</div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </Reveal>
              ))}
            </div>
          </section>
        </div>

        {/* ── 04 · СЕГОДНЯ · две лампы намеренной парой ────────── */}
        <Divider />

        <section>
          <Reveal>
            <span className="part">
              <b>04</b> {t.parts.today}
            </span>
            <h2>{t.today.title}</h2>
            <p className="lead">{t.today.lead}</p>
          </Reveal>

          <div className="pair">
            <Reveal className="pair-item">
              <Lamp
                off={publicPath("/foto/off2.jpg")}
                on={publicPath("/foto/on2.jpg")}
                title={t.lamps.desk.title}
                sub={t.lamps.desk.sub}
                glow={{ x: 48, y: 40 }}
              />
              <p>{t.today.desk}</p>
            </Reveal>

            <Reveal className="pair-item" delay={120}>
              <Lamp
                off={publicPath("/foto/off3.jpg")}
                on={publicPath("/foto/on3.jpg")}
                title={t.lamps.ceiling.title}
                sub={t.lamps.ceiling.sub}
                glow={{ x: 55, y: 42 }}
              />
              <p>{t.today.ceiling}</p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer>
        <div className="script">{t.footer.line}</div>
      </footer>
    </LightProvider>
  );
}
