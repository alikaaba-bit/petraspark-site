import { useState } from 'react'
import { Link } from 'react-router-dom'
import { R, Counter, useScrollY, useMousePos, globalStyles } from '../shared'

export default function HomePage() {
  const scrollY = useScrollY()
  const mousePos = useMousePos()
  const [activeQ, setActiveQ] = useState(null)
  const navSolid = scrollY > 80

  const faqs = [
    { q: "What's the minimum order quantity?", a: "Mailer boxes and folding cartons start at 500–1,000 units. Rigid boxes can start at 200–500. We work with scaling CPG brands, not just enterprise — our MOQs reflect that." },
    { q: "How do I know I'm getting the same quality?", a: "We produce a 1:1 sample match before you commit. Same materials, same finishes, same specs. Our 15–20 person on-ground team runs QC at every stage. You approve before we produce." },
    { q: "How long does it take?", a: "Quoting: 48 hours. Sampling: 2–3 weeks. Production: 3–5 weeks. Total timeline from first conversation to delivery is typically 8–12 weeks." },
    { q: "Do you handle shipping and customs?", a: "Yes. We deliver to your warehouse, 3PL, or Amazon prep center. Customs, logistics, and documentation — all handled." },
    { q: "What if I need help with the design too?", a: "We have a full packaging design team — structural design, material selection, graphics, 3D mockups. It's a separate service with flat-rate pricing. Ask us for details." },
    { q: "What types of brands do you work with?", a: "CPG, DTC, and consumer brands across beauty, wellness, food, beverage, supplements, and lifestyle. If your product goes on a shelf or in a shipping box, we can help." },
  ]

  return (
    <div style={{ fontFamily: "var(--font)", color: '#fff', background: '#09090b', overflowX: 'hidden', minHeight: '100vh' }}>
      <style>{globalStyles}{`
        .stats { border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 0 clamp(20px,5vw,72px); background: var(--bg); }
        .stats-inner { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); }
        .stat { padding: 44px 16px; text-align: center; border-right: 1px solid var(--border); }
        .stat:last-child { border-right: none; }
        .stat-num { font-family: var(--font); font-size: clamp(32px,4.5vw,52px); font-weight: 700; letter-spacing: -0.03em; background: linear-gradient(135deg, var(--text), rgba(255,255,255,0.7)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .stat-label { font-size: 13px; color: var(--muted); margin-top: 8px; line-height: 1.5; max-width: 180px; margin-left: auto; margin-right: auto; }

        .prob-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 56px; }
        .prob-card { padding: clamp(28px,3vw,48px); }
        .prob-num { font-size: 52px; font-weight: 800; letter-spacing: -0.04em; background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1; margin-bottom: 16px; }
        .prob-title { font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text); margin-bottom: 10px; }
        .prob-body { font-size: 15px; line-height: 1.65; color: var(--dim); }

        .steps { margin-top: 56px; }
        .step-row { display: grid; grid-template-columns: 100px 1fr; gap: 32px; padding: 44px 0; border-bottom: 1px solid var(--border); align-items: start; }
        .step-row:first-child { border-top: 1px solid var(--border); }
        .step-row:hover .step-n { background: linear-gradient(135deg, var(--blue), var(--purple)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .step-n { font-size: 64px; font-weight: 800; letter-spacing: -0.04em; background: linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1; transition: all 0.4s; }
        .step-t { font-size: 21px; font-weight: 600; color: var(--text); margin-bottom: 10px; }
        .step-b { font-size: 16px; line-height: 1.65; color: var(--dim); max-width: 520px; }

        .compare-sec { background: var(--bg2); }
        .compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 56px; }
        .compare-card { padding: clamp(32px,3vw,48px); border-radius: 20px; position: relative; overflow: hidden; }
        .compare-old { background: rgba(239,68,68,0.04); border: 1px solid rgba(239,68,68,0.12); }
        .compare-old::before { content:''; position: absolute; top: -60px; right: -60px; width: 200px; height: 200px; border-radius: 50%; background: radial-gradient(circle, rgba(239,68,68,0.08), transparent 70%); pointer-events: none; }
        .compare-new { background: rgba(16,185,129,0.04); border: 1px solid rgba(16,185,129,0.12); }
        .compare-new::before { content:''; position: absolute; top: -60px; right: -60px; width: 200px; height: 200px; border-radius: 50%; background: radial-gradient(circle, rgba(16,185,129,0.08), transparent 70%); pointer-events: none; }
        .cmp-label { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 28px; }
        .cmp-flow { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; position: relative; z-index: 1; }
        .cmp-node { padding: 12px 20px; border-radius: 10px; font-size: 14px; font-weight: 600; background: rgba(255,255,255,0.06); border: 1px solid var(--border); white-space: nowrap; }
        .cmp-node-bad { background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.25); color: #fca5a5; box-shadow: 0 0 24px rgba(239,68,68,0.08); }
        .cmp-node-good { background: rgba(16,185,129,0.12); border-color: rgba(16,185,129,0.25); color: #6ee7b7; box-shadow: 0 0 24px rgba(16,185,129,0.08); }
        .cmp-arrow { font-size: 18px; color: var(--muted); }
        .cmp-cap { font-size: 14px; color: var(--muted); margin-top: 20px; position: relative; z-index: 1; }

        .ch-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 56px; }
        .ch-card { padding: clamp(28px,2.5vw,40px); position: relative; overflow: hidden; }
        .ch-card::after { content:''; position: absolute; top: -40px; right: -40px; width: 120px; height: 120px; border-radius: 50%; background: radial-gradient(circle, rgba(59,130,246,0.04), transparent 70%); pointer-events: none; }
        .ch-icon { font-size: 28px; margin-bottom: 16px; }
        .ch-title { font-size: 17px; font-weight: 700; color: var(--text); margin-bottom: 8px; }
        .ch-body { font-size: 15px; line-height: 1.6; color: var(--dim); }

        .why-sec { background: var(--bg2); }
        .why-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 40px; margin-top: 56px; }
        .why-num { font-size: 68px; font-weight: 800; letter-spacing: -0.04em; background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1; margin-bottom: 12px; }
        .why-t { font-size: 14px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text); margin-bottom: 10px; }
        .why-b { font-size: 15px; line-height: 1.65; color: var(--dim); }

        @media (max-width: 768px) {
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .stat:nth-child(2) { border-right: none; }
          .prob-grid, .compare-grid, .ch-grid { grid-template-columns: 1fr; }
          .why-grid { grid-template-columns: 1fr; gap: 32px; }
          .step-row { grid-template-columns: 1fr; gap: 8px; }
          .step-n { font-size: 44px; }
        }
      `}</style>

      {/* NAV */}
      <nav className={`nav ${navSolid ? 'nav-glass' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">PetraSpark</Link>
          <div className="nav-links">
            <a href="#how" className="nav-link">How It Works</a>
            <a href="#why" className="nav-link">Why PetraSpark</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#cta" className="nav-cta">Get Your Free Quote</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-orbs">
          <div className="orb" style={{ width: 600, height: 600, top: '-10%', left: `${15 + mousePos.x * 8}%`, background: 'radial-gradient(circle, rgba(59,130,246,0.18), transparent 70%)', animationDelay: '0s', transition: 'left 2s ease-out' }} />
          <div className="orb" style={{ width: 500, height: 500, top: '10%', left: `${50 + mousePos.x * 6}%`, background: 'radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)', animationDelay: '-7s', transition: 'left 2.5s ease-out' }} />
          <div className="orb" style={{ width: 400, height: 400, top: '30%', left: `${30 + mousePos.x * 5}%`, background: 'radial-gradient(circle, rgba(16,185,129,0.12), transparent 70%)', animationDelay: '-13s', transition: 'left 3s ease-out' }} />
        </div>
        <div className="hero-content">
          <R delay={0.15}><p className="hero-eyebrow">The packaging partner built for CPG brands</p></R>
          <R delay={0.25}><h1>Your packaging costs too much. <span className="glow">We'll prove it.</span></h1></R>
          <R delay={0.4}><p className="hero-sub">Send us your current packaging. We'll quote it in 48 hours — same quality, lower price. If we can't beat it, we'll tell you. No pitch. No strings.</p></R>
          <R delay={0.5}>
            <div className="hero-actions">
              <a href="#cta" className="btn-glow">See How Much You Can Save <span style={{ fontSize: 18 }}>→</span></a>
              <a href="#how" className="btn-ghost">See how it works ↓</a>
            </div>
          </R>
        </div>
      </section>

      {/* STATS */}
      <div className="stats">
        <div className="stats-inner">
          {[ { n: <Counter end={60} prefix="40–" suffix="%" />, l: 'Average cost savings for brands who switch' },
            { n: <><Counter prefix="$" end={50} suffix="M" /><span style={{ fontSize: '0.55em', opacity: 0.5 }}>+</span></>, l: 'In brand revenue we\'ve helped build' },
            { n: <><Counter end={25} suffix="K" /><span style={{ fontSize: '0.55em', opacity: 0.5 }}>+</span></>, l: 'Retail doors our packaging sits in' },
            { n: <><Counter end={48} /><span style={{ fontSize: '0.4em', fontWeight: 500, opacity: 0.5 }}> hrs</span></>, l: 'Average turnaround on your free quote' },
          ].map((s, i) => (
            <R key={i} delay={i * 0.08} className="stat"><div className="stat-num">{s.n}</div><div className="stat-label">{s.l}</div></R>
          ))}
        </div>
      </div>

      {/* PROBLEMS */}
      <section className="section">
        <div className="section-inner">
          <R><div className="slabel">The Problem</div></R>
          <R delay={0.1}><h2 className="stitle">Most CPG brands are overpaying for packaging. <span className="glow">Here's why.</span></h2></R>
          <div className="prob-grid">
            {[ { n: '01', t: 'The Middleman Tax', b: "You're paying a sourcing agent 15–30% on top of factory cost. That's margin you should be keeping. Most brands don't even know the real price." },
              { n: '02', t: "Packaging That Doesn't Convert", b: "Your product wins on quality. But on a crowded shelf or fast-scrolling feed, the packaging doesn't stop anyone. No shelf presence. No unboxing moment." },
              { n: '03', t: 'Scaling Without a System', b: "Reorders are a scramble. New SKUs mean starting from scratch. A designer in one country, a factory in another, and a broker in between." },
              { n: '04', t: 'Retail-Readiness Gaps', b: "You want Target. You want Sephora. But your current packaging doesn't meet compliance, and reworking it with your current supplier is painful." },
            ].map((p, i) => (
              <R key={i} delay={0.1 + i * 0.08} className="glass prob-card">
                <div className="prob-num">{p.n}</div><div className="prob-title">{p.t}</div><div className="prob-body">{p.b}</div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" id="how" style={{ background: 'var(--bg2)' }}>
        <div className="section-inner">
          <R><div className="slabel">How It Works</div></R>
          <R delay={0.1}><h2 className="stitle">Three steps. <span className="glow">Zero risk.</span></h2></R>
          <div className="steps">
            {[ { n: '01', t: 'Send us your packaging', b: "Ship us a sample or share your specs. We'll analyze your current packaging, materials, and cost structure — and come back with a quote within 48 hours." },
              { n: '02', t: 'We match it for less', b: "We produce a 1:1 match — same materials, same quality. Factory-direct, no middleman markup. If we can't beat your price, we'll tell you. No hard feelings." },
              { n: '03', t: 'Scale with one team', b: "Better packaging, lower cost, delivered to your warehouse or 3PL. Reorders are simple. New SKUs are fast. One team from quote to delivery." },
            ].map((s, i) => (
              <R key={i} delay={i * 0.1} className="step-row">
                <div className="step-n">{s.n}</div><div><div className="step-t">{s.t}</div><div className="step-b">{s.b}</div></div>
              </R>
            ))}
          </div>
          <R delay={0.3}><div style={{ marginTop: 48 }}><a href="#cta" className="btn-glow">Get Your Free Quote <span style={{ fontSize: 18 }}>→</span></a><p style={{ fontSize: 14, color: 'var(--muted)', marginTop: 14 }}>No commitment. Most brands hear back within 48 hours.</p></div></R>
        </div>
      </section>

      {/* COMPARE */}
      <section className="section compare-sec">
        <div className="section-inner">
          <R><div className="slabel">The Difference</div></R>
          <R delay={0.1}><h2 className="stitle">See where your money <span className="glow">actually goes.</span></h2></R>
          <div className="compare-grid">
            <R delay={0.15} className="compare-card compare-old">
              <div className="cmp-label">How most CPG brands buy packaging</div>
              <div className="cmp-flow"><div className="cmp-node">Your Brand</div><div className="cmp-arrow">→</div><div className="cmp-node cmp-node-bad">Agent +15–30%</div><div className="cmp-arrow">→</div><div className="cmp-node">Factory</div></div>
              <div className="cmp-cap">You pay the inflated price. You never see the real cost.</div>
            </R>
            <R delay={0.25} className="compare-card compare-new">
              <div className="cmp-label">How PetraSpark works</div>
              <div className="cmp-flow"><div className="cmp-node">Your Brand</div><div className="cmp-arrow">→</div><div className="cmp-node cmp-node-good">PetraSpark Factory</div></div>
              <div className="cmp-cap">No markup. We own the factory. You keep the margin.</div>
            </R>
          </div>
          <R delay={0.3}><div style={{ textAlign: 'center', marginTop: 48, fontSize: 18, color: 'var(--dim)' }}>We own the factory. You keep the margin. Average savings: 40–60%.</div></R>
        </div>
      </section>

      {/* WHAT WE MAKE */}
      <section className="section">
        <div className="section-inner">
          <R><div className="slabel">What We Make</div></R>
          <R delay={0.1}><h2 className="stitle">Packaging for every channel <span className="glow">your brand sells in.</span></h2></R>
          <div className="ch-grid">
            {[ { icon: '🏪', t: 'Retail-Ready', b: 'Folding cartons, rigid boxes, shelf-ready packaging, POS displays. Compliant and competitive for major retail.' },
              { icon: '📦', t: 'E-Com & DTC', b: 'Mailer boxes, subscription boxes, custom unboxing experiences. Built to survive shipping and look great on camera.' },
              { icon: '🎬', t: 'Marketing & PR', b: 'Influencer kits, gift sets, limited editions, seasonal runs. Premium packaging designed to be filmed and shared.' },
              { icon: '✨', t: 'The Details', b: 'Labels, stickers, inserts, tissue, cards. The finishing touches that complete the experience.' },
            ].map((c, i) => (
              <R key={i} delay={i * 0.08} className="glass ch-card"><div className="ch-icon">{c.icon}</div><div className="ch-title">{c.t}</div><div className="ch-body">{c.b}</div></R>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section why-sec" id="why">
        <div className="section-inner">
          <R><div className="slabel">Why PetraSpark</div></R>
          <R delay={0.1}><h2 className="stitle">We're not a packaging company. <span className="glow">We're a CPG company that owns a factory.</span></h2></R>
          <R delay={0.15}><p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--dim)', maxWidth: 580, marginTop: 20 }}>We built consumer brands to $50M+ in revenue and 25,000+ retail doors. Then we built the factory to make the packaging ourselves.</p></R>
          <div className="why-grid">
            {[ { n: '01', t: 'We Understand CPG', b: "Retail compliance, shelf impact, e-com fulfillment, unboxing experience, SKU proliferation — we've navigated all of it as brand operators." },
              { n: '02', t: 'Factory-Direct Pricing', b: "We own the factory in China with 15–20 staff on the ground. No sourcing agent. No middleman markup. The savings go to your bottom line." },
              { n: '03', t: 'One Team, End to End', b: "Western founders, American business practices, Chinese manufacturing. One team from quote to delivery. No fragmented supply chain." },
            ].map((w, i) => (
              <R key={i} delay={i * 0.1}><div className="why-num">{w.n}</div><div className="why-t">{w.t}</div><div className="why-b">{w.b}</div></R>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="section">
        <div className="section-inner">
          <R><div className="slabel">Results</div></R>
          <R delay={0.1}><h2 className="stitle">Brands that <span className="glow">made the switch.</span></h2></R>
          <R delay={0.2}>
            <div className="proof-card" style={{ marginTop: 48 }}>
              <div className="proof-quote">"We were paying a sourcing agent for three years before we found PetraSpark. Same rigid box, same foil stamping — 47% less. That's six figures back in our pocket every year."</div>
              <div className="proof-attr"><div><div className="proof-name">Sarah M.</div><div className="proof-role">Founder, DTC Skincare Brand</div></div><div className="proof-badge">47% cost reduction</div></div>
            </div>
          </R>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq" style={{ background: 'var(--bg2)' }}>
        <div className="section-inner">
          <R><div className="slabel">FAQ</div></R>
          <R delay={0.1}><h2 className="stitle">Questions we hear at every <span className="glow">founder event.</span></h2></R>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <R key={i} delay={i * 0.04} className="faq-item">
                <button className="faq-q" onClick={() => setActiveQ(activeQ === i ? null : i)}>{f.q}<span className={`faq-icon ${activeQ === i ? 'faq-icon-open' : ''}`}>+</span></button>
                <div className="faq-a" style={{ maxHeight: activeQ === i ? 200 : 0, opacity: activeQ === i ? 1 : 0 }}><div className="faq-a-inner">{f.a}</div></div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta" id="cta">
        <div className="cta-orbs">
          <div className="orb" style={{ width: 500, height: 500, top: '-30%', left: '20%', background: 'radial-gradient(circle, rgba(59,130,246,0.12), transparent 70%)', animationDelay: '-3s' }} />
          <div className="orb" style={{ width: 400, height: 400, top: '-20%', left: '55%', background: 'radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%)', animationDelay: '-9s' }} />
          <div className="orb" style={{ width: 350, height: 350, bottom: '-30%', left: '35%', background: 'radial-gradient(circle, rgba(16,185,129,0.08), transparent 70%)', animationDelay: '-15s' }} />
        </div>
        <div className="final-cta-content">
          <R><h2>Find out what your packaging <span className="glow">should actually cost.</span></h2></R>
          <R delay={0.1}><p>Send us your current packaging or specs. We'll come back with a free quote and show you what's possible.</p></R>
          <R delay={0.2}><a href="#" className="btn-glow" style={{ marginTop: 40 }}>Get Your Free Quote <span style={{ fontSize: 18 }}>→</span></a></R>
          <R delay={0.25}><p className="final-micro">No commitment. No pitch. Most brands hear back within 48 hours.</p></R>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">© 2026 PetraSpark. Factory-direct packaging for CPG brands.</div>
          <div className="footer-links">
            <Link to="/design" className="footer-link">Design Services</Link>
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
