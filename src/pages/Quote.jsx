import { useState } from 'react'
import { Link } from 'react-router-dom'
import { R, useScrollY, globalStyles } from '../shared'

export default function Quote() {
  const scrollY = useScrollY()
  const navSolid = scrollY > 80
  const [submitted, setSubmitted] = useState(false)

  return (
    <div style={{ fontFamily: "var(--font)", color: '#fff', background: '#09090b', overflowX: 'hidden', minHeight: '100vh' }}>
      <style>{globalStyles}{`
        .quote-page { max-width: 1280px; margin: 0 auto; padding: clamp(140px,18vh,200px) clamp(20px,5vw,72px) clamp(80px,10vh,120px); display: grid; grid-template-columns: 1fr 1fr; gap: clamp(48px,6vw,96px); align-items: start; }
        .quote-left {}
        .quote-left h1 { font-size: clamp(36px,5vw,56px); font-weight: 700; line-height: 1.08; letter-spacing: -0.035em; }
        .quote-left-sub { font-size: 18px; line-height: 1.65; color: var(--dim); margin-top: 20px; max-width: 440px; }

        .quote-promises { margin-top: 48px; display: flex; flex-direction: column; gap: 20px; }
        .promise { display: flex; gap: 14px; align-items: start; }
        .promise-icon { font-size: 20px; flex-shrink: 0; margin-top: 2px; filter: drop-shadow(0 0 8px rgba(16,185,129,0.3)); }
        .promise-text { font-size: 16px; line-height: 1.55; color: var(--dim); }
        .promise-text strong { color: var(--text); font-weight: 600; }

        .quote-social { margin-top: 48px; padding-top: 32px; border-top: 1px solid var(--border); }
        .quote-social-label { font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 16px; }
        .quote-social-item { display: flex; gap: 12px; align-items: start; padding: 12px 0; }
        .quote-social-stat { font-size: 18px; font-weight: 700; }
        .quote-social-desc { font-size: 14px; color: var(--muted); }

        .quote-form-card {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 24px;
          padding: clamp(32px,4vw,52px); position: relative; overflow: hidden;
        }
        .quote-form-card::before { content:''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--blue), var(--purple), transparent); opacity: 0.4; }
        .form-title { font-size: 22px; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 8px; }
        .form-subtitle { font-size: 15px; color: var(--muted); margin-bottom: 32px; }

        .form-group { margin-bottom: 20px; }
        .form-label { display: block; font-size: 13px; font-weight: 600; color: var(--dim); margin-bottom: 8px; letter-spacing: 0.02em; }
        .form-input {
          width: 100%; padding: 14px 16px; font-size: 16px; font-family: var(--font);
          background: rgba(255,255,255,0.04); border: 1px solid var(--border); border-radius: 12px;
          color: var(--text); outline: none; transition: all 0.3s;
        }
        .form-input:focus { border-color: var(--blue); box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
        .form-input::placeholder { color: var(--muted); }
        .form-textarea { min-height: 100px; resize: vertical; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-select { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 16px center; padding-right: 40px; }

        .form-submit { width: 100%; margin-top: 8px; }
        .form-note { font-size: 13px; color: var(--muted); margin-top: 12px; text-align: center; }

        .success-card { text-align: center; padding: 64px 32px; }
        .success-icon { font-size: 48px; margin-bottom: 16px; }
        .success-title { font-size: 24px; font-weight: 700; margin-bottom: 12px; }
        .success-text { font-size: 16px; color: var(--dim); line-height: 1.6; max-width: 360px; margin: 0 auto; }

        @media (max-width: 768px) {
          .quote-page { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <nav className={`nav ${navSolid ? 'nav-glass' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">PetraSpark</Link>
          <div className="nav-links">
            <Link to="/" className="nav-back">← Back to Home</Link>
            <Link to="/case-studies" className="nav-link">Case Studies</Link>
            <Link to="/design" className="nav-link">Design Services</Link>
          </div>
        </div>
      </nav>

      <div className="quote-page">
        <div className="quote-left">
          <R delay={0.1}><p className="hero-eyebrow">Get Your Free Quote</p></R>
          <R delay={0.2}><h1>Find out what your packaging <span className="glow">should actually cost.</span></h1></R>
          <R delay={0.3}><p className="quote-left-sub">Tell us what you're working with. We'll come back within 48 hours with a quote that shows you exactly what you can save — and how we'd make it better.</p></R>

          <R delay={0.4}>
            <div className="quote-promises">
              {[
                { icon: '⚡', text: '<strong>48-hour turnaround</strong> — we quote fast because we own the factory' },
                { icon: '🔒', text: '<strong>Zero obligation</strong> — if we can\'t beat your price, we\'ll tell you' },
                { icon: '📦', text: '<strong>1:1 sample match</strong> — same materials, same quality, lower cost' },
                { icon: '🌍', text: '<strong>Full service</strong> — design, manufacturing, shipping, customs' },
              ].map((p, i) => (
                <div key={i} className="promise">
                  <span className="promise-icon">{p.icon}</span>
                  <div className="promise-text" dangerouslySetInnerHTML={{ __html: p.text }} />
                </div>
              ))}
            </div>
          </R>

          <R delay={0.5}>
            <div className="quote-social">
              <div className="quote-social-label">By the numbers</div>
              {[
                { stat: '40–60%', desc: 'Average savings for brands who switch' },
                { stat: '25,000+', desc: 'Retail doors our packaging sits in' },
                { stat: '$50M+', desc: 'In brand revenue we\'ve helped build' },
              ].map((s, i) => (
                <div key={i} className="quote-social-item">
                  <div className="quote-social-stat">{s.stat}</div>
                  <div className="quote-social-desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </R>
        </div>

        <R delay={0.25}>
          <div className="quote-form-card">
            {submitted ? (
              <div className="success-card">
                <div className="success-icon">✓</div>
                <div className="success-title">Quote request received.</div>
                <div className="success-text">We'll review your details and get back to you within 48 hours with a full quote and savings analysis.</div>
              </div>
            ) : (
              <>
                <div className="form-title">Tell us about your packaging</div>
                <div className="form-subtitle">The more detail, the faster we can quote. But even a few basics is enough to start.</div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input className="form-input" placeholder="Jane Smith" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company</label>
                    <input className="form-input" placeholder="Brand name" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input className="form-input" type="email" placeholder="jane@brand.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone (optional)</label>
                    <input className="form-input" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">What do you need?</label>
                  <select className="form-input form-select">
                    <option value="">Select one</option>
                    <option>Quote on current packaging (beat my price)</option>
                    <option>New packaging design + manufacturing</option>
                    <option>Design only ($4,000 flat rate)</option>
                    <option>Something else</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Industry</label>
                  <select className="form-input form-select">
                    <option value="">Select your industry</option>
                    <option>Beauty & Skincare</option>
                    <option>Food & Beverage</option>
                    <option>Supplements & Wellness</option>
                    <option>Lifestyle & Home</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Tell us more (optional)</label>
                  <textarea className="form-input form-textarea" placeholder="Current packaging details, quantities, timeline, retail targets — anything that helps us give you an accurate quote." />
                </div>

                <button className="btn-glow form-submit" onClick={() => setSubmitted(true)}>
                  Submit Quote Request <span style={{ fontSize: 18 }}>→</span>
                </button>
                <div className="form-note">No commitment. Most brands hear back within 48 hours.</div>
              </>
            )}
          </div>
        </R>
      </div>

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
