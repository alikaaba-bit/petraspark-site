import { useState } from "react";
import { Link } from "react-router-dom";
import { R, Counter, useScrollY, useMousePos, globalStyles } from "../shared";

export default function DesignServicesDark() {
  const scrollY = useScrollY();
  const mousePos = useMousePos();
  const [activeQ, setActiveQ] = useState(null);

  const navSolid = scrollY > 80;

  const faqs = [
    { q: "What does the $4,000 include?", a: "Everything from structural design and material selection to graphic design, 3D mockups, and production-ready files. Dielines, print specs, barcode placement, regulatory copy layout — all of it. No hidden fees, no hourly overages." },
    { q: "How many revisions do I get?", a: "Unlimited revisions until you're happy. We don't cap rounds. Most projects land in 2–3 rounds because we get the brief right upfront, but we'll keep going until it's exactly what you need." },
    { q: "Can you design for a product that's not manufactured by PetraSpark?", a: "Yes. The design service is standalone. You'll get production-ready files that any manufacturer can use. That said, most clients end up manufacturing with us too — the handoff is seamless and the savings are significant." },
    { q: "How long does the design process take?", a: "Typically 3–4 weeks from kickoff to final files. Rush timelines are available if you're working toward a retail launch date or seasonal window." },
    { q: "Do you design for specific retailers like Target, Walmart, or Sephora?", a: "Yes, and this is one of our core strengths. Each retailer has different compliance requirements — shelf dimensions, barcode specs, sustainability claims, print standards. We design to those specs from day one so you don't have to rework later." },
    { q: "What if I already have a brand identity but need packaging designed?", a: "Perfect — that's the most common scenario. Send us your brand guidelines and we'll design packaging that extends your identity onto the shelf and into the unboxing experience." },
  ];

  return (
    <div style={{ fontFamily: "'Satoshi', 'General Sans', -apple-system, sans-serif", color: "#fff", background: "#09090b", overflowX: "hidden", minHeight: "100vh" }}>
      <style>{globalStyles}{`
        .cost-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 56px; }
        .cost-card { padding: clamp(28px,3vw,44px); border-radius: 20px; position: relative; overflow: hidden; }
        .cost-bad { background: rgba(239,68,68,0.03); border: 1px solid rgba(239,68,68,0.1); }
        .cost-bad::before { content:''; position: absolute; top: -80px; right: -80px; width: 250px; height: 250px; border-radius: 50%; background: radial-gradient(circle, rgba(239,68,68,0.07), transparent 70%); pointer-events: none; }
        .cost-good { background: rgba(16,185,129,0.03); border: 1px solid rgba(16,185,129,0.1); }
        .cost-good::before { content:''; position: absolute; top: -80px; right: -80px; width: 250px; height: 250px; border-radius: 50%; background: radial-gradient(circle, rgba(16,185,129,0.07), transparent 70%); pointer-events: none; }
        .cost-header { font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 28px; position: relative; z-index: 1; }
        .cost-bad .cost-header { color: #f87171; }
        .cost-good .cost-header { color: #34d399; }
        .cost-item { padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.04); position: relative; z-index: 1; }
        .cost-item:last-child { border-bottom: none; }
        .cost-item-t { font-size: 16px; font-weight: 600; color: var(--text); margin-bottom: 4px; }
        .cost-item-b { font-size: 14px; line-height: 1.6; color: var(--dim); }

        .callout { margin-top: 48px; padding: 28px 36px; border-radius: 16px; background: rgba(16,185,129,0.04); border: 1px solid rgba(16,185,129,0.12); display: flex; align-items: start; gap: 14px; position: relative; overflow: hidden; }
        .callout::before { content:''; position: absolute; top: -50px; left: -50px; width: 180px; height: 180px; border-radius: 50%; background: radial-gradient(circle, rgba(16,185,129,0.06), transparent 70%); pointer-events: none; }
        .callout-icon { font-size: 22px; flex-shrink: 0; margin-top: 2px; position: relative; z-index: 1; }
        .callout-text { font-size: 16px; line-height: 1.6; color: var(--dim); position: relative; z-index: 1; }
        .callout-text strong { color: var(--text); font-weight: 700; }

        .bento-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 56px; }
        .bento-card { padding: clamp(24px,2.5vw,40px); position: relative; overflow: hidden; }
        .bento-card::after { content:''; position: absolute; top: -40px; right: -40px; width: 120px; height: 120px; border-radius: 50%; background: radial-gradient(circle, rgba(59,130,246,0.04), transparent 70%); pointer-events: none; }
        .bento-featured { grid-column: span 2; }
        .bento-featured::after { background: radial-gradient(circle, rgba(139,92,246,0.06), transparent 70%); width: 180px; height: 180px; }
        .bento-icon { font-size: 28px; margin-bottom: 16px; position: relative; z-index: 1; }
        .bento-t { font-size: 17px; font-weight: 700; color: var(--text); margin-bottom: 8px; position: relative; z-index: 1; }
        .bento-b { font-size: 15px; line-height: 1.6; color: var(--dim); position: relative; z-index: 1; }

        .roi-strip { border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 0 clamp(20px,5vw,72px); }
        .roi-inner { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); }
        .roi-item { padding: 52px 16px; text-align: center; border-right: 1px solid var(--border); }
        .roi-item:last-child { border-right: none; }
        .roi-num { font-size: clamp(40px,5vw,60px); font-weight: 700; letter-spacing: -0.03em; background: linear-gradient(135deg, var(--text), rgba(255,255,255,0.7)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .roi-label { font-size: 14px; color: var(--muted); margin-top: 10px; line-height: 1.5; max-width: 220px; margin-left: auto; margin-right: auto; }

        .process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; margin-top: 56px; border: 1px solid var(--border); border-radius: 20px; overflow: hidden; }
        .process-step { padding: clamp(24px,2.5vw,40px); border-right: 1px solid var(--border); background: rgba(255,255,255,0.01); transition: background 0.3s; }
        .process-step:last-child { border-right: none; }
        .process-step:hover { background: rgba(255,255,255,0.03); }
        .process-num { font-size: 52px; font-weight: 800; letter-spacing: -0.04em; background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1; margin-bottom: 20px; transition: all 0.4s; }
        .process-step:hover .process-num { background: linear-gradient(135deg, var(--blue), var(--purple)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .process-t { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 10px; }
        .process-b { font-size: 14px; line-height: 1.6; color: var(--dim); }
        .process-time { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--border); }

        .pricing-sec { background: var(--bg2); position: relative; overflow: hidden; }
        .pricing-sec .p-orb { position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none; animation: orbFloat 25s ease-in-out infinite; }
        .pricing-card { max-width: 680px; margin: 56px auto 0; position: relative; z-index: 2; background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 24px; padding: clamp(36px,4vw,60px); text-align: center; box-shadow: 0 0 80px rgba(59,130,246,0.04), 0 0 120px rgba(139,92,246,0.03); }
        .pricing-card::before { content:''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--blue), var(--purple), transparent); opacity: 0.5; border-radius: 24px 24px 0 0; }
        .pricing-amount { font-size: clamp(56px,8vw,84px); font-weight: 800; letter-spacing: -0.04em; background: linear-gradient(135deg, var(--text), rgba(255,255,255,0.8)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .pricing-per { font-size: 18px; color: var(--muted); margin-top: 8px; }
        .pricing-div { width: 60px; height: 1px; background: var(--border); margin: 32px auto; }
        .pricing-list { text-align: left; }
        .pricing-item { display: flex; align-items: start; gap: 14px; padding: 11px 0; font-size: 16px; color: var(--dim); line-height: 1.5; }
        .pricing-check { color: var(--emerald); font-size: 17px; flex-shrink: 0; margin-top: 2px; filter: drop-shadow(0 0 6px rgba(16,185,129,0.3)); }
        .pricing-note { font-size: 14px; color: var(--muted); margin-top: 28px; text-align: center; line-height: 1.6; }

        .bridge-sec { background: var(--bg2); }
        .bridge-inner { max-width: 640px; }
        .bridge-inner p { font-size: 17px; line-height: 1.65; color: var(--dim); margin-top: 16px; }

        @media (max-width: 900px) {
          .cost-grid { grid-template-columns: 1fr; }
          .bento-grid { grid-template-columns: 1fr; }
          .bento-featured { grid-column: span 1; }
          .roi-inner { grid-template-columns: 1fr; }
          .roi-item { border-right: none; border-bottom: 1px solid var(--border); }
          .roi-item:last-child { border-bottom: none; }
          .process-grid { grid-template-columns: 1fr 1fr; }
          .process-step:nth-child(2) { border-right: none; }
          .process-step { border-bottom: 1px solid var(--border); }
        }
        @media (max-width: 600px) {
          .process-grid { grid-template-columns: 1fr; }
          .process-step { border-right: none; }
        }
      `}</style>

      {/* NAV */}
      <nav className={`nav ${navSolid ? "nav-glass" : ""}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">PetraSpark</Link>
          <div className="nav-links">
            <a href="#" className="nav-back">← Back to Home</a>
            <a href="#included" className="nav-link">What's Included</a>
            <a href="#process" className="nav-link">Process</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#start" className="nav-cta">Start a Design Project</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-orbs">
          <div className="orb" style={{ width: 550, height: 550, top: "-8%", left: `${18 + mousePos.x * 8}%`, background: "radial-gradient(circle, rgba(139,92,246,0.18), transparent 70%)", animationDelay: "0s", transition: "left 2s ease-out" }} />
          <div className="orb" style={{ width: 450, height: 450, top: "15%", left: `${55 + mousePos.x * 6}%`, background: "radial-gradient(circle, rgba(59,130,246,0.14), transparent 70%)", animationDelay: "-8s", transition: "left 2.5s ease-out" }} />
          <div className="orb" style={{ width: 380, height: 380, top: "35%", left: `${32 + mousePos.x * 5}%`, background: "radial-gradient(circle, rgba(16,185,129,0.1), transparent 70%)", animationDelay: "-14s", transition: "left 3s ease-out" }} />
        </div>
        <div className="hero-content">
          <R delay={0.15}><p className="hero-eyebrow">Packaging Design for CPG Brands</p></R>
          <R delay={0.25}><h1>Your product is ready. <span className="glow">Your packaging isn't.</span></h1></R>
          <R delay={0.4}><p className="hero-sub">We design packaging that wins on retail shelves, converts in e-com, and gets shared on social — engineered for production from day one. One flat rate. No surprises.</p></R>
          <R delay={0.5}>
            <div className="hero-actions">
              <a href="#start" className="btn-glow">Start a Design Project <span style={{ fontSize: 18 }}>→</span></a>
              <span className="hero-price">$4,000 per product · Production-ready files included</span>
            </div>
          </R>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="section" style={{ background: "var(--bg2)" }}>
        <div className="section-inner">
          <R><div className="slabel">Why It Matters</div></R>
          <R delay={0.1}><h2 className="stitle">Bad packaging isn't cheap. <span className="glow">It's the most expensive mistake you'll make.</span></h2></R>
          <R delay={0.15}><p className="ssub">The $4,000 you spend on design is a rounding error compared to what bad packaging costs you every day it sits on a shelf or lands on a doorstep.</p></R>

          <div className="cost-grid">
            <R delay={0.15} className="cost-card cost-bad">
              <div className="cost-header">What bad packaging costs you</div>
              {[
                { t: "Lost at shelf", b: "Buyers scan a shelf in 3–5 seconds. If your packaging doesn't stop them, your product doesn't exist. You paid for that shelf placement — and you're wasting it." },
                { t: "Zero social sharing", b: "Unboxing content drives millions of free impressions for brands with share-worthy packaging. Generic packaging means you're paying for marketing that your competitors get for free." },
                { t: "Retail rejection", b: "Buyers at Target, Walmart, Whole Foods, and Sephora reject products with non-compliant or uncompetitive packaging. You lose the listing — and the months it took to get the meeting." },
                { t: "Reprints and rework", b: "Packaging designed without production specs in mind leads to color issues, die-cut problems, and reprints. Every rework costs time and money you shouldn't be spending." },
              ].map((item, i) => (
                <div key={i} className="cost-item">
                  <div className="cost-item-t">{item.t}</div>
                  <div className="cost-item-b">{item.b}</div>
                </div>
              ))}
            </R>
            <R delay={0.25} className="cost-card cost-good">
              <div className="cost-header">What great packaging earns you</div>
              {[
                { t: "Shelf conversion", b: "Packaging designed for retail visibility pulls your product off the shelf and into the cart. The right structure, color, and hierarchy do the selling for you." },
                { t: "Free marketing", b: "Packaging built for the unboxing moment turns every customer into a content creator. One viral unboxing can be worth more than your entire ad spend." },
                { t: "Retail confidence", b: "Walk into a buyer meeting with packaging that's already compliant, shelf-tested, and competitive. You're not asking for a chance — you're ready to ship." },
                { t: "Production efficiency", b: "Design engineered for manufacturing from day one means no surprises at the factory. Faster turnaround, fewer errors, lower per-unit cost." },
              ].map((item, i) => (
                <div key={i} className="cost-item">
                  <div className="cost-item-t">{item.t}</div>
                  <div className="cost-item-b">{item.b}</div>
                </div>
              ))}
            </R>
          </div>

          <R delay={0.3}>
            <div className="callout">
              <div className="callout-icon">💡</div>
              <div className="callout-text"><strong>The math is simple.</strong> If your product retails for $25 and better packaging converts just 2 more units per store per week across 500 doors — that's $1.3M in incremental revenue per year. The design pays for itself before the first production run ships.</div>
            </div>
          </R>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section" id="included">
        <div className="section-inner">
          <R><div className="slabel">What's Included</div></R>
          <R delay={0.1}><h2 className="stitle">Everything you need to go from <span className="glow">concept to production.</span></h2></R>
          <div className="bento-grid">
            {[
              { icon: "📐", t: "Structural Design", b: "Custom dieline engineering for your product's exact dimensions, weight, and fragility. We design the structure around your product — not the other way around. Optimized for material efficiency and production cost.", featured: true },
              { icon: "🧪", t: "Material Selection", b: "We recommend the right substrate, finish, and coating for your price point — rigid, corrugated, folding carton, kraft, specialty stocks." },
              { icon: "🎨", t: "Graphic Design", b: "Typography, color, hierarchy, and layout designed for shelf visibility and social shareability. Brand-consistent and built to convert." },
              { icon: "✅", t: "Retail Compliance", b: "Barcode placement, regulatory copy, nutrition facts layout, retailer-specific specs. Designed to pass buyer review the first time." },
              { icon: "🖥️", t: "3D Mockups & Production Files", b: "Photorealistic 3D renders for your pitch decks, Amazon listings, and social content. Plus fully prepped production files — print-ready, press-ready, factory-ready.", featured: true },
              { icon: "🔁", t: "Unlimited Revisions", b: "We don't cap revision rounds. We refine until you're confident it's right. Most projects land in 2–3 rounds." },
            ].map((c, i) => (
              <R key={i} delay={0.08 + i * 0.06} className={`glass bento-card ${c.featured ? "bento-featured" : ""}`}>
                <div className="bento-icon">{c.icon}</div>
                <div className="bento-t">{c.t}</div>
                <div className="bento-b">{c.b}</div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ROI STATS */}
      <div className="roi-strip">
        <div className="roi-inner">
          {[
            { n: <Counter end={72} suffix="%" />, l: "of purchase decisions are made at the shelf based on packaging alone" },
            { n: <Counter end={40} suffix="%" />, l: "of consumers share products with unique packaging on social media" },
            { n: <Counter prefix="$" end={4} suffix="K" />, l: "Flat rate — no hourly billing, no scope creep, no surprise invoices" },
          ].map((s, i) => (
            <R key={i} delay={i * 0.1} className="roi-item">
              <div className="roi-num">{s.n}</div>
              <div className="roi-label">{s.l}</div>
            </R>
          ))}
        </div>
      </div>

      {/* PROCESS */}
      <section className="section" id="process" style={{ background: "var(--bg2)" }}>
        <div className="section-inner">
          <R><div className="slabel">Our Process</div></R>
          <R delay={0.1}><h2 className="stitle">Four phases. One team. <span className="glow">No handoffs.</span></h2></R>
          <R delay={0.15}><p className="ssub">From brief to production-ready files in 3–4 weeks. Every step is handled in-house by the same team that understands CPG, retail, and manufacturing.</p></R>
          <div className="process-grid">
            {[
              { n: "01", t: "Discovery", b: "We learn your brand, your product, your customer, your retail targets. We study the competitive shelf. We define what winning looks like.", time: "Week 1" },
              { n: "02", t: "Concepts", b: "We present 2–3 distinct design directions with structural recommendations. You pick a direction, we refine.", time: "Week 2" },
              { n: "03", t: "Refinement", b: "We dial in every detail — typography, color accuracy, regulatory copy, print finishes, die-cut precision. Unlimited rounds until it's right.", time: "Week 2–3" },
              { n: "04", t: "Delivery", b: "You receive production-ready files, 3D mockups, material specs, and print guidelines. Ready for any manufacturer — or ours.", time: "Week 3–4" },
            ].map((s, i) => (
              <R key={i} delay={i * 0.08} className="process-step">
                <div className="process-num">{s.n}</div>
                <div className="process-t">{s.t}</div>
                <div className="process-b">{s.b}</div>
                <div className="process-time">{s.time}</div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section pricing-sec" id="pricing">
        <div className="p-orb" style={{ width: 500, height: 500, top: "-20%", left: "10%", background: "radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)", animationDelay: "-5s" }} />
        <div className="p-orb" style={{ width: 400, height: 400, bottom: "-15%", right: "10%", background: "radial-gradient(circle, rgba(139,92,246,0.06), transparent 70%)", animationDelay: "-12s" }} />
        <div className="section-inner" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <R><div className="slabel" style={{ justifyContent: "center" }}>Pricing</div></R>
          <R delay={0.1}><h2 className="stitle" style={{ margin: "0 auto", textAlign: "center" }}>One price. <span className="glow">Everything included.</span></h2></R>
          <R delay={0.2}>
            <div className="pricing-card">
              <div className="pricing-amount">$4,000</div>
              <div className="pricing-per">per product · flat rate</div>
              <div className="pricing-div" />
              <div className="pricing-list">
                {[
                  "Custom structural design and dieline engineering",
                  "Material and finish selection for your price point",
                  "Full graphic design — shelf-optimized and social-ready",
                  "Retail compliance (barcodes, regulatory, retailer specs)",
                  "Photorealistic 3D mockups for pitches and listings",
                  "Production-ready files for any manufacturer",
                  "Unlimited revisions until final approval",
                ].map((item, i) => (
                  <div key={i} className="pricing-item">
                    <span className="pricing-check">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a href="#start" className="btn-glow" style={{ marginTop: 36 }}>Start Your Design Project <span style={{ fontSize: 18 }}>→</span></a>
              <div className="pricing-note">No hourly billing. No scope creep. The price is the price.<br />Multiple SKUs? Ask us about package pricing.</div>
            </div>
          </R>
        </div>
      </section>

      {/* PROOF */}
      <section className="section">
        <div className="section-inner">
          <R><div className="slabel">Results</div></R>
          <R delay={0.1}><h2 className="stitle">Designed to perform. <span className="glow">Built to last.</span></h2></R>
          <R delay={0.2}>
            <div className="proof-card" style={{ marginTop: 48 }}>
              <div className="proof-quote">"We came to PetraSpark with a great product and a forgettable box. They gave us packaging that got us into 1,200 retail doors in six months. The buyer at our first meeting said our shelf presence was the best in the category."</div>
              <div className="proof-attr">
                <div><div className="proof-name">James R.</div><div className="proof-role">Co-Founder, CPG Beverage Brand</div></div>
                <div className="proof-badge">1,200 doors in 6 months</div>
              </div>
            </div>
          </R>
          <R delay={0.25}>
            <div className="proof-card" style={{ marginTop: 16 }}>
              <div className="proof-quote">"Our unboxing TikTok hit 2.3M views the week we launched the new packaging. We didn't pay for a single impression — the packaging did the marketing for us."</div>
              <div className="proof-attr">
                <div><div className="proof-name">Mia K.</div><div className="proof-role">Founder, DTC Skincare Brand</div></div>
                <div className="proof-badge">2.3M organic views</div>
              </div>
            </div>
          </R>
        </div>
      </section>

      {/* BRIDGE */}
      <section className="section bridge-sec">
        <div className="section-inner">
          <R>
            <div className="bridge-inner">
              <div className="slabel">Design + Manufacturing</div>
              <h2 className="stitle" style={{ marginBottom: 8 }}>Most clients manufacture with us too. <span className="glow">Here's why.</span></h2>
              <p>When the same team that designed your packaging also manufactures it, there's zero loss in translation. No file prep headaches. No color matching issues. No "that's not what I approved" moments. The design goes straight to production in our own factory — at factory-direct pricing with no middleman markup.</p>
              <p>You're not locked in. The design files work with any manufacturer. But brands that use both services save an average of 40–60% on production and get to market 3–4 weeks faster.</p>
              <a href="#" className="btn-outline" style={{ marginTop: 32 }}>Learn About Manufacturing <span style={{ fontSize: 18 }}>→</span></a>
            </div>
          </R>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="section-inner">
          <R><div className="slabel">FAQ</div></R>
          <R delay={0.1}><h2 className="stitle">Everything you need to know <span className="glow">before you start.</span></h2></R>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <R key={i} delay={i * 0.04} className="faq-item">
                <button className="faq-q" onClick={() => setActiveQ(activeQ === i ? null : i)}>
                  {f.q}
                  <span className={`faq-icon ${activeQ === i ? "faq-icon-open" : ""}`}>+</span>
                </button>
                <div className="faq-a" style={{ maxHeight: activeQ === i ? 250 : 0, opacity: activeQ === i ? 1 : 0 }}>
                  <div className="faq-a-inner">{f.a}</div>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta" id="start">
        <div className="cta-orbs">
          <div className="orb" style={{ width: 500, height: 500, top: "-30%", left: "15%", background: "radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%)", animationDelay: "-4s" }} />
          <div className="orb" style={{ width: 400, height: 400, top: "-10%", left: "55%", background: "radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)", animationDelay: "-10s" }} />
          <div className="orb" style={{ width: 350, height: 350, bottom: "-25%", left: "35%", background: "radial-gradient(circle, rgba(16,185,129,0.06), transparent 70%)", animationDelay: "-16s" }} />
        </div>
        <div className="final-cta-content">
          <R><h2>Your product deserves packaging that <span className="glow">works as hard as you do.</span></h2></R>
          <R delay={0.1}><p>Tell us about your product and where you want it to sell. We'll take it from there.</p></R>
          <R delay={0.2}><a href="#" className="btn-glow" style={{ marginTop: 40 }}>Start a Design Project <span style={{ fontSize: 18 }}>→</span></a></R>
          <R delay={0.25}><p className="final-micro">$4,000 flat rate · 3–4 week delivery · Unlimited revisions</p></R>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">© 2026 PetraSpark. Packaging design and manufacturing for CPG brands.</div>
          <div className="footer-links">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/" className="footer-link">Manufacturing</Link>
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
