import { Link } from 'react-router-dom'
import { R, Counter, useScrollY, useMousePos, globalStyles } from '../shared'

export default function About() {
  const scrollY = useScrollY()
  const mousePos = useMousePos()
  const navSolid = scrollY > 80

  return (
    <div style={{ fontFamily: "var(--font)", color: '#fff', background: '#09090b', overflowX: 'hidden', minHeight: '100vh' }}>
      <style>{globalStyles}{`
        .about-hero { position: relative; padding: clamp(140px,18vh,200px) clamp(20px,5vw,72px) clamp(60px,8vh,100px); max-width: 1280px; margin: 0 auto; }
        .about-hero h1 { font-size: clamp(40px,6vw,72px); font-weight: 700; line-height: 1.06; letter-spacing: -0.035em; max-width: 800px; }
        .about-hero-sub { font-size: clamp(17px,1.8vw,20px); line-height: 1.65; color: var(--dim); max-width: 560px; margin-top: 28px; }

        .story-section { background: var(--bg2); }
        .story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(48px,6vw,96px); align-items: center; }
        .story-text h2 { font-size: clamp(28px,3.5vw,44px); font-weight: 700; line-height: 1.12; letter-spacing: -0.03em; margin-bottom: 24px; }
        .story-text p { font-size: 17px; line-height: 1.75; color: var(--dim); margin-bottom: 20px; }
        .story-visual {
          aspect-ratio: 4/3; border-radius: 24px; position: relative; overflow: hidden;
          background: var(--bg-card); border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
        }
        .story-visual-orb { position: absolute; width: 250px; height: 250px; border-radius: 50%; filter: blur(80px); opacity: 0.2; }
        .story-visual-text { position: relative; z-index: 2; text-align: center; padding: 32px; }
        .story-visual-num { font-size: clamp(48px,6vw,72px); font-weight: 800; letter-spacing: -0.04em; }
        .story-visual-label { font-size: 14px; color: var(--muted); margin-top: 8px; }

        .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 56px; }
        .value-card {
          padding: clamp(28px,2.5vw,40px); background: var(--bg-card);
          border: 1px solid var(--border); border-radius: 20px;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1); position: relative; overflow: hidden;
        }
        .value-card:hover { border-color: var(--border-h); transform: translateY(-4px); box-shadow: 0 8px 48px rgba(0,0,0,0.4); }
        .value-card::after { content:''; position: absolute; top: -40px; right: -40px; width: 120px; height: 120px; border-radius: 50%; pointer-events: none; }
        .value-icon { font-size: 32px; margin-bottom: 16px; }
        .value-title { font-size: 18px; font-weight: 700; color: var(--text); margin-bottom: 10px; }
        .value-body { font-size: 15px; line-height: 1.65; color: var(--dim); }

        .timeline { margin-top: 56px; position: relative; }
        .timeline::before { content:''; position: absolute; left: 24px; top: 0; bottom: 0; width: 1px; background: var(--border); }
        .tl-item { display: grid; grid-template-columns: 48px 1fr; gap: 24px; padding: 32px 0; position: relative; }
        .tl-dot { width: 12px; height: 12px; border-radius: 50%; margin-top: 6px; justify-self: center; position: relative; z-index: 2; }
        .tl-year { font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; }
        .tl-title { font-size: 18px; font-weight: 700; color: var(--text); margin-bottom: 6px; }
        .tl-body { font-size: 15px; line-height: 1.6; color: var(--dim); }

        .stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border: 1px solid var(--border); border-radius: 20px; overflow: hidden; margin-top: 56px; }
        .stats-row-item { padding: 40px 16px; text-align: center; border-right: 1px solid var(--border); background: rgba(255,255,255,0.01); }
        .stats-row-item:last-child { border-right: none; }
        .stats-row-num { font-size: clamp(28px,3.5vw,44px); font-weight: 700; letter-spacing: -0.03em; background: linear-gradient(135deg, var(--text), rgba(255,255,255,0.7)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .stats-row-label { font-size: 13px; color: var(--muted); margin-top: 8px; line-height: 1.4; }

        @media (max-width: 768px) {
          .story-grid { grid-template-columns: 1fr; }
          .values-grid { grid-template-columns: 1fr; }
          .stats-row { grid-template-columns: repeat(2, 1fr); }
          .stats-row-item:nth-child(2) { border-right: none; }
          .stats-row-item { border-bottom: 1px solid var(--border); }
        }
      `}</style>

      <nav className={`nav ${navSolid ? 'nav-glass' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">PetraSpark</Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/case-studies" className="nav-link">Case Studies</Link>
            <Link to="/design" className="nav-link">Design Services</Link>
            <Link to="/quote" className="nav-cta">Get Your Free Quote</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="about-hero">
        <div className="hero-orbs">
          <div className="orb" style={{ width: 500, height: 500, top: '-15%', left: `${25 + mousePos.x * 6}%`, background: 'radial-gradient(circle, rgba(59,130,246,0.14), transparent 70%)', transition: 'left 2s ease-out' }} />
          <div className="orb" style={{ width: 400, height: 400, top: '10%', left: `${60 + mousePos.x * 5}%`, background: 'radial-gradient(circle, rgba(16,185,129,0.1), transparent 70%)', animationDelay: '-8s', transition: 'left 2.5s ease-out' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <R delay={0.1}><p className="hero-eyebrow">Our Story</p></R>
          <R delay={0.2}><h1>We built brands first. <span className="glow">Then we built the factory.</span></h1></R>
          <R delay={0.35}><p className="about-hero-sub">PetraSpark exists because we lived the problem. We spent years overpaying for packaging, managing fragmented supply chains, and fighting to get retail-ready. So we built the solution we wished we had.</p></R>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section className="section story-section">
        <div className="section-inner">
          <div className="story-grid">
            <R>
              <div className="story-text">
                <div className="slabel">The Origin</div>
                <h2>We were the customers first.</h2>
                <p>Our founders built and scaled consumer brands to $50M+ in revenue and 25,000+ retail doors. Beauty, wellness, supplements, lifestyle — across DTC and retail. Along the way, we learned a painful lesson: the packaging supply chain is broken.</p>
                <p>Sourcing agents take 15–30% off the top. Factories in one country, designers in another, brokers in between. Quality control is a game of telephone. And when you finally get retail-ready, the timeline has blown and the margin is gone.</p>
                <p>So we did what any frustrated operators would do — we built our own factory.</p>
              </div>
            </R>
            <R delay={0.15}>
              <div className="story-visual">
                <div className="story-visual-orb" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.3), transparent 70%)', top: '10%', left: '10%' }} />
                <div className="story-visual-orb" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2), transparent 70%)', bottom: '10%', right: '10%' }} />
                <div className="story-visual-text">
                  <div className="story-visual-num" style={{ background: 'linear-gradient(135deg, var(--blue), var(--purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>$50M+</div>
                  <div className="story-visual-label">Brand revenue built before starting PetraSpark</div>
                </div>
              </div>
            </R>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="section-inner">
          <R><div className="slabel">What Drives Us</div></R>
          <R delay={0.1}><h2 className="stitle">We operate by three <span className="glow">principles.</span></h2></R>
          <div className="values-grid">
            {[
              { icon: '🎯', title: 'Radical Transparency', body: "We show you the real factory cost. We show you where the markup was. We don't hide behind pricing tiers or minimum commitments. You see exactly what you're paying for.", color: 'rgba(59,130,246,0.06)' },
              { icon: '🤝', title: 'Operator Empathy', body: "We've been the founder staring at a non-compliant packaging sample at 2am before a retail deadline. We build our process around the reality of running a brand — not the convenience of running a factory.", color: 'rgba(139,92,246,0.06)' },
              { icon: '⚡', title: 'Speed as a Feature', body: "48-hour quotes. 2-week samples. 8-week full production. We're fast because we control every step — and because we know that in CPG, timing is everything.", color: 'rgba(16,185,129,0.06)' },
            ].map((v, i) => (
              <R key={i} delay={0.1 + i * 0.08} className="value-card" style={{}}>
                <div className="value-icon">{v.icon}</div>
                <div className="value-title">{v.title}</div>
                <div className="value-body">{v.body}</div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="section-inner">
          <R><div className="slabel">By The Numbers</div></R>
          <R delay={0.1}><h2 className="stitle">The numbers behind <span className="glow">the operation.</span></h2></R>
          <R delay={0.15}>
            <div className="stats-row">
              {[
                { n: <Counter end={20} prefix="15–" />, l: 'Staff on the ground in China' },
                { n: <><Counter end={25} suffix="K" /><span style={{ fontSize: '0.5em', opacity: 0.5 }}>+</span></>, l: 'Retail doors served' },
                { n: <Counter end={48} suffix="hr" />, l: 'Average quote turnaround' },
                { n: <><Counter end={60} prefix="40–" suffix="%" /></>, l: 'Average cost savings' },
              ].map((s, i) => (
                <div key={i} className="stats-row-item">
                  <div className="stats-row-num">{s.n}</div>
                  <div className="stats-row-label">{s.l}</div>
                </div>
              ))}
            </div>
          </R>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section">
        <div className="section-inner">
          <R><div className="slabel">Our Journey</div></R>
          <R delay={0.1}><h2 className="stitle">How we got <span className="glow">here.</span></h2></R>
          <div className="timeline">
            {[
              { year: 'Early Days', title: 'Built and scaled multiple CPG brands', body: 'Our founders launched and grew consumer brands across beauty, wellness, and supplements — hitting $50M+ in revenue and 25,000+ retail doors.', color: 'var(--blue)' },
              { year: 'The Problem', title: 'Discovered the packaging markup', body: 'Realized we were paying 15–30% more than factory cost on every packaging order. Sourcing agents, fragmented supply chains, and zero transparency.', color: 'var(--purple)' },
              { year: 'The Build', title: 'Opened our own factory in China', body: 'Hired 15–20 staff on the ground. Built a vertically integrated design and manufacturing operation with Western business standards.', color: 'var(--emerald)' },
              { year: 'Today', title: 'Serving CPG brands worldwide', body: 'Factory-direct packaging for DTC, retail, and e-com brands. Design services, manufacturing, and fulfillment — all under one roof.', color: 'var(--blue)' },
            ].map((t, i) => (
              <R key={i} delay={i * 0.08} className="tl-item">
                <div className="tl-dot" style={{ background: t.color, boxShadow: `0 0 12px ${t.color}40` }} />
                <div>
                  <div className="tl-year">{t.year}</div>
                  <div className="tl-title">{t.title}</div>
                  <div className="tl-body">{t.body}</div>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <div className="cta-orbs">
          <div className="orb" style={{ width: 400, height: 400, top: '-30%', left: '25%', background: 'radial-gradient(circle, rgba(59,130,246,0.1), transparent 70%)', animationDelay: '-3s' }} />
          <div className="orb" style={{ width: 350, height: 350, bottom: '-20%', right: '20%', background: 'radial-gradient(circle, rgba(16,185,129,0.08), transparent 70%)', animationDelay: '-10s' }} />
        </div>
        <div className="final-cta-content">
          <R><h2>Built by operators. <span className="glow">For operators.</span></h2></R>
          <R delay={0.1}><p>Send us your packaging. We'll show you what you should be paying.</p></R>
          <R delay={0.2}><Link to="/quote" className="btn-glow" style={{ marginTop: 40 }}>Get Your Free Quote <span style={{ fontSize: 18 }}>→</span></Link></R>
          <R delay={0.25}><p className="final-micro">No commitment. Most brands hear back within 48 hours.</p></R>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">© 2026 PetraSpark</div>
          <div className="footer-links">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/case-studies" className="footer-link">Case Studies</Link>
            <Link to="/design" className="footer-link">Design</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
