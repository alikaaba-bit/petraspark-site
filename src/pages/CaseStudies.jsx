import { useState } from 'react'
import { Link } from 'react-router-dom'
import { R, useScrollY, useMousePos, globalStyles } from '../shared'

const studies = [
  {
    slug: 'bloom-botanicals',
    brand: 'Bloom Botanicals',
    category: 'DTC Skincare',
    headline: 'From Alibaba boxes to 1,200 retail doors in 6 months.',
    result: '47% cost reduction',
    resultDetail: '$280K saved in year one',
    tags: ['Rigid Boxes', 'Retail-Ready', 'Foil Stamping'],
    color: '#8b5cf6',
    brief: 'A fast-growing DTC skincare brand was paying a sourcing agent for generic rigid boxes. They needed retail-compliant packaging for a national Sephora launch — at a lower cost.',
  },
  {
    slug: 'verde-nutrition',
    brand: 'Verde Nutrition',
    category: 'CPG Supplements',
    headline: '38% cost reduction. 2.3M unboxing views. Zero ad spend.',
    result: '38% cost reduction',
    resultDetail: '2.3M organic social views',
    tags: ['Folding Cartons', 'Subscription Box', 'Inserts'],
    color: '#10b981',
    brief: 'A subscription supplement brand was losing margin to a middleman and getting zero social traction from generic mailer boxes. They needed packaging that performed on camera and on the P&L.',
  },
  {
    slug: 'cask-and-barrel',
    brand: 'Cask & Barrel',
    category: 'Premium Beverage',
    headline: 'Retail-ready in 8 weeks. Now in 3,400 grocery doors.',
    result: '52% cost reduction',
    resultDetail: '3,400 retail doors',
    tags: ['Shelf-Ready', 'POS Display', 'Cartons'],
    color: '#3b82f6',
    brief: 'A craft spirits brand had a major grocery chain deal on the table but non-compliant packaging. They needed a full redesign, manufactured and delivered in under 12 weeks.',
  },
]

export default function CaseStudies() {
  const scrollY = useScrollY()
  const mousePos = useMousePos()
  const navSolid = scrollY > 80

  return (
    <div style={{ fontFamily: "var(--font)", color: '#fff', background: '#09090b', overflowX: 'hidden', minHeight: '100vh' }}>
      <style>{globalStyles}{`
        .cases-grid { display: grid; grid-template-columns: 1fr; gap: 24px; margin-top: 64px; }
        .case-card {
          display: grid; grid-template-columns: 1fr 1fr; gap: 0;
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 24px;
          overflow: hidden; transition: all 0.5s cubic-bezier(0.16,1,0.3,1); cursor: pointer;
          text-decoration: none; color: var(--text);
        }
        .case-card:hover { border-color: var(--border-h); transform: translateY(-6px); box-shadow: 0 24px 64px rgba(0,0,0,0.4); }
        .case-visual {
          position: relative; min-height: 380px; display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }
        .case-visual-orb {
          position: absolute; width: 300px; height: 300px; border-radius: 50%;
          filter: blur(80px); opacity: 0.2; transition: opacity 0.5s;
        }
        .case-card:hover .case-visual-orb { opacity: 0.35; }
        .case-visual-brand {
          position: relative; z-index: 2; font-size: 32px; font-weight: 800;
          letter-spacing: -0.04em; text-align: center; padding: 0 32px;
        }
        .case-visual-cat {
          position: relative; z-index: 2; font-size: 13px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted);
          margin-top: 8px; text-align: center;
        }
        .case-content { padding: clamp(32px,4vw,56px); display: flex; flex-direction: column; justify-content: center; }
        .case-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px; }
        .case-tag {
          font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
          padding: 5px 12px; border-radius: 100px; background: rgba(255,255,255,0.05);
          border: 1px solid var(--border); color: var(--muted);
        }
        .case-headline { font-size: clamp(22px,2.5vw,28px); font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; }
        .case-brief { font-size: 16px; line-height: 1.6; color: var(--dim); margin-top: 16px; }
        .case-results { display: flex; gap: 32px; margin-top: 24px; }
        .case-result-item {}
        .case-result-val { font-size: 20px; font-weight: 700; }
        .case-result-label { font-size: 13px; color: var(--muted); margin-top: 2px; }
        .case-arrow { font-size: 14px; font-weight: 600; color: var(--dim); margin-top: 24px; display: flex; align-items: center; gap: 8px; transition: color 0.3s; }
        .case-card:hover .case-arrow { color: var(--text); }

        .bottom-cta { text-align: center; margin-top: 80px; }
        .bottom-cta p { font-size: 18px; color: var(--dim); margin-bottom: 24px; }

        @media (max-width: 768px) {
          .case-card { grid-template-columns: 1fr; }
          .case-visual { min-height: 240px; }
        }
      `}</style>

      <nav className={`nav ${navSolid ? 'nav-glass' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">PetraSpark</Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/design" className="nav-link">Design Services</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/quote" className="nav-cta">Get Your Free Quote</Link>
          </div>
        </div>
      </nav>

      <section className="hero" style={{ minHeight: 'auto', paddingBottom: 0 }}>
        <div className="hero-orbs">
          <div className="orb" style={{ width: 500, height: 500, top: '-15%', left: `${20 + mousePos.x * 6}%`, background: 'radial-gradient(circle, rgba(59,130,246,0.14), transparent 70%)', transition: 'left 2s ease-out' }} />
          <div className="orb" style={{ width: 400, height: 400, top: '5%', left: `${55 + mousePos.x * 5}%`, background: 'radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%)', animationDelay: '-8s', transition: 'left 2.5s ease-out' }} />
        </div>
        <div className="hero-content">
          <R delay={0.1}><p className="hero-eyebrow">Case Studies</p></R>
          <R delay={0.2}><h1 style={{ fontSize: 'clamp(40px,6vw,72px)' }}>Real brands. <span className="glow">Real results.</span></h1></R>
          <R delay={0.35}><p className="hero-sub">See how CPG brands cut packaging costs, launched into retail, and turned unboxing into free marketing — all with one partner.</p></R>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="section-inner">
          <div className="cases-grid">
            {studies.map((s, i) => (
              <R key={s.slug} delay={0.1 + i * 0.1}>
                <Link to={`/case-study/${s.slug}`} className="case-card">
                  <div className="case-visual">
                    <div className="case-visual-orb" style={{ background: `radial-gradient(circle, ${s.color}, transparent 70%)` }} />
                    <div>
                      <div className="case-visual-brand">{s.brand}</div>
                      <div className="case-visual-cat">{s.category}</div>
                    </div>
                  </div>
                  <div className="case-content">
                    <div className="case-tags">
                      {s.tags.map(t => <span key={t} className="case-tag">{t}</span>)}
                    </div>
                    <div className="case-headline">{s.headline}</div>
                    <div className="case-brief">{s.brief}</div>
                    <div className="case-results">
                      <div className="case-result-item">
                        <div className="case-result-val" style={{ color: s.color }}>{s.result}</div>
                        <div className="case-result-label">Primary result</div>
                      </div>
                      <div className="case-result-item">
                        <div className="case-result-val">{s.resultDetail}</div>
                        <div className="case-result-label">Secondary result</div>
                      </div>
                    </div>
                    <div className="case-arrow">Read the full story →</div>
                  </div>
                </Link>
              </R>
            ))}
          </div>

          <R delay={0.3}>
            <div className="bottom-cta">
              <p>Ready to be the next case study?</p>
              <Link to="/quote" className="btn-glow">Get Your Free Quote <span style={{ fontSize: 18 }}>→</span></Link>
            </div>
          </R>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">© 2026 PetraSpark. Factory-direct packaging for CPG brands.</div>
          <div className="footer-links">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/design" className="footer-link">Design Services</Link>
            <Link to="/about" className="footer-link">About</Link>
            <a href="#" className="footer-link">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
