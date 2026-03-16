import { useParams, Link } from 'react-router-dom'
import { R, Counter, useScrollY, globalStyles } from '../shared'

const data = {
  'bloom-botanicals': {
    brand: 'Bloom Botanicals', category: 'DTC Skincare', color: '#8b5cf6',
    heroLine: 'From Alibaba boxes to 1,200 retail doors in 6 months.',
    stats: [
      { val: '47%', label: 'Cost reduction' },
      { val: '$280K', label: 'Saved in year one' },
      { val: '1,200', label: 'Retail doors' },
      { val: '8 wks', label: 'Quote to delivery' },
    ],
    challenge: "Bloom Botanicals had built a $6M DTC skincare brand with a loyal online following. But their packaging told a different story — generic rigid boxes sourced through an Alibaba agent, inconsistent print quality, and zero shelf presence. When Sephora came calling with a 1,200-door launch opportunity, the packaging wasn't close to retail-ready. Barcode placement was wrong. The structural design couldn't withstand retail distribution. And they were paying a 25% agent markup on every unit without knowing it.",
    solution: "We started with a full packaging audit. Within 48 hours, we showed Bloom exactly what they were paying versus what the packaging actually cost at the factory level — a $1.40 per unit gap they didn't know existed. We then redesigned the packaging from structure up: a custom rigid box with magnetic closure, soft-touch lamination, and gold foil stamping. We engineered it for Sephora's shelf dimensions and compliance requirements from day one. Barcode placement, ingredient panel layout, and sustainability claims were all built into the first draft — not patched in later.",
    result: "Bloom launched into 1,200 Sephora doors on time with packaging that the buyer described as 'the best shelf presence in the category.' The per-unit cost dropped 47% compared to their previous agent-sourced packaging — saving $280K in the first year alone. The unboxing experience drove a wave of organic UGC on TikTok and Instagram, with influencers highlighting the premium feel of the magnetic closure and foil details. Bloom has since expanded to Nordstrom and Ulta using the same packaging system.",
    quote: "We had no idea how much margin we were leaving on the table. Same box, same quality, 47% less. PetraSpark didn't just save us money — they got us retail-ready in a way our previous supplier never could.",
    quoteName: 'Sarah M.', quoteTitle: 'Founder, Bloom Botanicals',
    tags: ['Rigid Box', 'Magnetic Closure', 'Foil Stamping', 'Sephora Compliant', 'Soft-Touch Lamination'],
  },
  'verde-nutrition': {
    brand: 'Verde Nutrition', category: 'CPG Supplements', color: '#10b981',
    heroLine: '38% cost reduction. 2.3M unboxing views. Zero ad spend.',
    stats: [
      { val: '38%', label: 'Cost reduction' },
      { val: '2.3M', label: 'Organic social views' },
      { val: '$0', label: 'Ad spend on UGC' },
      { val: '6 wks', label: 'Design to delivery' },
    ],
    challenge: "Verde Nutrition was a subscription-first supplement brand doing $4M ARR with strong retention but flat growth. Their packaging was the problem: plain kraft mailer boxes with a generic sticker label. Customers loved the product but never posted about it. The unboxing was forgettable. Meanwhile, competitors with inferior products were going viral because their packaging looked premium on camera. Verde was also paying a sourcing agent 20% above factory cost for their folding cartons and inserts — margin that should have been going into growth.",
    solution: "We redesigned the entire packaging ecosystem: a custom mailer box with full interior print, a folding carton for the individual product with embossed logo and spot UV, and a branded insert card with a QR code driving to a referral program. Everything was designed to photograph well — high contrast colors, clean typography, and a reveal moment when opening the mailer. We manufactured the full system in our factory at 38% less than what Verde had been paying their agent for the old generic packaging.",
    result: "The first subscriber shipment with new packaging triggered a wave of organic content. One TikTok creator posted an unboxing that hit 2.3M views — zero paid promotion. Verde's referral program sign-ups tripled in the first month because the insert card drove QR scans. Monthly subscriber acquisition increased 28% with no change in ad spend. The 38% cost savings on packaging freed up $165K annually that Verde redirected into inventory and influencer seeding.",
    quote: "Our unboxing TikTok hit 2.3M views the week we launched the new packaging. We didn't pay for a single impression — the packaging did the marketing for us. And it costs less than what we were paying before.",
    quoteName: 'Mia K.', quoteTitle: 'Founder, Verde Nutrition',
    tags: ['Mailer Box', 'Folding Carton', 'Interior Print', 'Spot UV', 'Insert Cards'],
  },
  'cask-and-barrel': {
    brand: 'Cask & Barrel', category: 'Premium Beverage', color: '#3b82f6',
    heroLine: 'Retail-ready in 8 weeks. Now in 3,400 grocery doors.',
    stats: [
      { val: '52%', label: 'Cost reduction' },
      { val: '3,400', label: 'Retail doors' },
      { val: '8 wks', label: 'Total timeline' },
      { val: '4 SKUs', label: 'Launched simultaneously' },
    ],
    challenge: "Cask & Barrel, a craft spirits brand, had secured a verbal commitment from a major national grocery chain for 3,400 doors — but their current packaging failed compliance on multiple fronts. The carton structure couldn't withstand pallet shipping. The barcode was in the wrong position. Sustainability claims weren't substantiated. And their existing supplier quoted a 16-week timeline for a redesign, which would blow past the retailer's planogram deadline. They were about to lose the deal.",
    solution: "We treated this as a rescue mission. Week 1: full compliance audit against the retailer's spec sheet, structural redesign for pallet distribution, and graphic design for 4 SKUs simultaneously. Week 2–3: sampling and retailer approval. Week 4–8: full production run of 200,000 units across 4 SKUs, quality-checked by our on-ground team, and shipped directly to the retailer's distribution centers. We handled customs, logistics, and documentation. The per-unit cost came in 52% below what Cask & Barrel had been paying their previous supplier.",
    result: "Cask & Barrel hit the planogram deadline with two weeks to spare. All 4 SKUs passed the retailer's compliance review on the first submission — no rework needed. The shelf-ready packaging included a POS countertop display that the retailer approved for end-cap placement during the holiday season. Within 6 months, Cask & Barrel expanded into two additional grocery chains using the same packaging system. The 52% cost savings on packaging improved their gross margin by 8 points.",
    quote: "We were 72 hours from losing a 3,400-door deal. PetraSpark got us from non-compliant packaging to shipping in 8 weeks. No other supplier could have done that. And the cost was half of what we were paying before.",
    quoteName: 'James R.', quoteTitle: 'Co-Founder, Cask & Barrel',
    tags: ['Shelf-Ready', 'POS Display', 'Folding Cartons', 'Multi-SKU', 'Compliance'],
  },
}

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const scrollY = useScrollY()
  const navSolid = scrollY > 80
  const cs = data[slug]

  if (!cs) return <div style={{ color: '#fff', background: '#09090b', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><style>{globalStyles}</style><div style={{ textAlign: 'center' }}><h1>Case study not found</h1><Link to="/case-studies" className="btn-glow" style={{ marginTop: 24 }}>View All Case Studies</Link></div></div>

  const allSlugs = Object.keys(data)
  const currentIdx = allSlugs.indexOf(slug)
  const nextSlug = allSlugs[(currentIdx + 1) % allSlugs.length]
  const nextCs = data[nextSlug]

  return (
    <div style={{ fontFamily: "var(--font)", color: '#fff', background: '#09090b', overflowX: 'hidden', minHeight: '100vh' }}>
      <style>{globalStyles}{`
        .cs-hero { padding: clamp(140px,18vh,200px) clamp(20px,5vw,72px) clamp(60px,8vh,100px); max-width: 1280px; margin: 0 auto; position: relative; }
        .cs-hero-orb { position: absolute; top: -20%; left: 20%; width: 500px; height: 500px; border-radius: 50%; filter: blur(120px); opacity: 0.15; pointer-events: none; }
        .cs-meta { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; position: relative; z-index: 2; }
        .cs-meta-cat { font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; padding: 5px 14px; border-radius: 100px; border: 1px solid; }
        .cs-hero h1 { font-size: clamp(36px,5.5vw,64px); font-weight: 700; line-height: 1.08; letter-spacing: -0.035em; max-width: 800px; position: relative; z-index: 2; }
        .cs-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 24px; position: relative; z-index: 2; }
        .cs-tag { font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; padding: 5px 12px; border-radius: 100px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); color: var(--muted); }

        .cs-stats { border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 0 clamp(20px,5vw,72px); }
        .cs-stats-inner { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); }
        .cs-stat { padding: 40px 16px; text-align: center; border-right: 1px solid var(--border); }
        .cs-stat:last-child { border-right: none; }
        .cs-stat-num { font-size: clamp(28px,4vw,44px); font-weight: 700; letter-spacing: -0.03em; }
        .cs-stat-label { font-size: 13px; color: var(--muted); margin-top: 6px; }

        .cs-body { padding: clamp(60px,8vh,100px) clamp(20px,5vw,72px); }
        .cs-body-inner { max-width: 720px; margin: 0 auto; }
        .cs-section-label { font-size: 11px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 16px; display: flex; align-items: center; gap: 10px; }
        .cs-section-label::before { content: ''; width: 24px; height: 1px; flex-shrink: 0; }
        .cs-body h2 { font-size: clamp(24px,3vw,32px); font-weight: 700; letter-spacing: -0.02em; margin-bottom: 20px; line-height: 1.2; }
        .cs-body p { font-size: 17px; line-height: 1.75; color: var(--dim); margin-bottom: 48px; }

        .cs-quote-block { padding: clamp(40px,4vw,64px); background: var(--bg-card); border: 1px solid var(--border); border-radius: 24px; position: relative; overflow: hidden; margin: 48px 0; }
        .cs-quote-block::before { content:''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--blue), var(--purple), transparent); opacity: 0.4; }
        .cs-quote-text { font-size: clamp(18px,2.2vw,24px); line-height: 1.55; font-style: italic; }
        .cs-quote-attr { margin-top: 24px; }
        .cs-quote-name { font-size: 15px; font-weight: 600; }
        .cs-quote-role { font-size: 14px; color: var(--muted); }

        .cs-next { padding: clamp(60px,8vh,100px) clamp(20px,5vw,72px); border-top: 1px solid var(--border); }
        .cs-next-inner { max-width: 1280px; margin: 0 auto; }
        .cs-next-card { display: block; padding: 48px; background: var(--bg-card); border: 1px solid var(--border); border-radius: 20px; text-decoration: none; color: var(--text); transition: all 0.4s cubic-bezier(0.16,1,0.3,1); }
        .cs-next-card:hover { border-color: var(--border-h); transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.3); }
        .cs-next-label { font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 12px; }
        .cs-next-title { font-size: 24px; font-weight: 700; letter-spacing: -0.02em; }
        .cs-next-sub { font-size: 15px; color: var(--dim); margin-top: 8px; }

        .cs-cta { text-align: center; padding: clamp(80px,10vh,120px) clamp(20px,5vw,72px); }
        .cs-cta h2 { font-size: clamp(32px,4.5vw,52px); font-weight: 700; letter-spacing: -0.035em; max-width: 560px; margin: 0 auto 16px; }
        .cs-cta p { font-size: 18px; color: var(--dim); margin-bottom: 32px; }

        @media (max-width: 768px) {
          .cs-stats-inner { grid-template-columns: repeat(2, 1fr); }
          .cs-stat:nth-child(2) { border-right: none; }
        }
      `}</style>

      <nav className={`nav ${navSolid ? 'nav-glass' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">PetraSpark</Link>
          <div className="nav-links">
            <Link to="/case-studies" className="nav-back">← All Case Studies</Link>
            <Link to="/quote" className="nav-cta">Get Your Free Quote</Link>
          </div>
        </div>
      </nav>

      <section className="cs-hero">
        <div className="cs-hero-orb" style={{ background: `radial-gradient(circle, ${cs.color}, transparent 70%)` }} />
        <R delay={0.1}>
          <div className="cs-meta">
            <span className="cs-meta-cat" style={{ color: cs.color, borderColor: cs.color + '40' }}>{cs.category}</span>
          </div>
        </R>
        <R delay={0.2}><h1>{cs.heroLine}</h1></R>
        <R delay={0.3}>
          <div className="cs-tags">{cs.tags.map(t => <span key={t} className="cs-tag">{t}</span>)}</div>
        </R>
      </section>

      <div className="cs-stats">
        <div className="cs-stats-inner">
          {cs.stats.map((s, i) => (
            <R key={i} delay={i * 0.08} className="cs-stat">
              <div className="cs-stat-num" style={{ color: i === 0 ? cs.color : 'var(--text)' }}>{s.val}</div>
              <div className="cs-stat-label">{s.label}</div>
            </R>
          ))}
        </div>
      </div>

      <div className="cs-body">
        <div className="cs-body-inner">
          <R>
            <div className="cs-section-label" style={{ color: cs.color }}><span style={{ display: 'inline-block', width: 24, height: 1, background: cs.color }}></span> The Challenge</div>
            <h2>What {cs.brand} was facing.</h2>
            <p>{cs.challenge}</p>
          </R>
          <R>
            <div className="cs-section-label" style={{ color: cs.color }}><span style={{ display: 'inline-block', width: 24, height: 1, background: cs.color }}></span> The Solution</div>
            <h2>What we did.</h2>
            <p>{cs.solution}</p>
          </R>

          <R>
            <div className="cs-quote-block">
              <div className="cs-quote-text">{cs.quote}</div>
              <div className="cs-quote-attr">
                <div className="cs-quote-name">{cs.quoteName}</div>
                <div className="cs-quote-role">{cs.quoteTitle}</div>
              </div>
            </div>
          </R>

          <R>
            <div className="cs-section-label" style={{ color: cs.color }}><span style={{ display: 'inline-block', width: 24, height: 1, background: cs.color }}></span> The Result</div>
            <h2>Where they are now.</h2>
            <p>{cs.result}</p>
          </R>
        </div>
      </div>

      <div className="cs-next">
        <div className="cs-next-inner">
          <R>
            <Link to={`/case-study/${nextSlug}`} className="cs-next-card">
              <div className="cs-next-label">Next Case Study →</div>
              <div className="cs-next-title">{nextCs.brand} — {nextCs.category}</div>
              <div className="cs-next-sub">{nextCs.heroLine}</div>
            </Link>
          </R>
        </div>
      </div>

      <div className="cs-cta">
        <R>
          <h2>Ready to be the next <span className="glow">success story?</span></h2>
          <p>Send us your current packaging. We'll show you what's possible.</p>
          <Link to="/quote" className="btn-glow">Get Your Free Quote <span style={{ fontSize: 18 }}>→</span></Link>
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
