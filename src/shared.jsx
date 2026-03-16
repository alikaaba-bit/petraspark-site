import { useState, useEffect, useRef } from 'react'

export function useReveal(threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el) } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

export function R({ children, delay = 0, className = '', style = {}, dir = 'up' }) {
  const [ref, visible] = useReveal(0.08)
  const t = { up: 'translateY(48px)', left: 'translateX(48px)', right: 'translateX(-48px)', none: 'none' }
  return (
    <div ref={ref} className={className} style={{
      ...style, opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : t[dir],
      transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>{children}</div>
  )
}

export function Counter({ end, suffix = '', prefix = '', dur = 2200 }) {
  const [ref, vis] = useReveal(0.3)
  const [c, setC] = useState(0)
  useEffect(() => {
    if (!vis) return
    let s = 0; const step = end / (dur / 16)
    const t = setInterval(() => { s += step; if (s >= end) { setC(end); clearInterval(t) } else setC(Math.floor(s)) }, 16)
    return () => clearInterval(t)
  }, [vis, end, dur])
  return <span ref={ref}>{prefix}{c}{suffix}</span>
}

export function useScrollY() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const h = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])
  return scrollY
}

export function useMousePos() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  useEffect(() => {
    const h = (e) => setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    window.addEventListener('mousemove', h, { passive: true })
    return () => window.removeEventListener('mousemove', h)
  }, [])
  return mousePos
}

export const globalStyles = `
  @import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700,900&f[]=general-sans@400,500,600,700&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  :root {
    --bg: #09090b; --bg2: #0f0f12;
    --bg-card: rgba(255,255,255,0.03); --border: rgba(255,255,255,0.07);
    --border-h: rgba(255,255,255,0.14);
    --text: #fff; --dim: rgba(255,255,255,0.55); --muted: rgba(255,255,255,0.3);
    --blue: #3b82f6; --purple: #8b5cf6; --emerald: #10b981; --red: #ef4444;
    --font: 'Satoshi', 'General Sans', -apple-system, sans-serif;
  }

  .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 200; padding: 0 clamp(20px,5vw,72px); transition: all 0.5s cubic-bezier(0.16,1,0.3,1); }
  .nav-glass { background: rgba(9,9,11,0.75); backdrop-filter: blur(24px) saturate(1.4); -webkit-backdrop-filter: blur(24px) saturate(1.4); border-bottom: 1px solid var(--border); }
  .nav-inner { max-width: 1280px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; height: 72px; }
  .nav-logo { font-weight: 800; font-size: 21px; letter-spacing: -0.04em; color: var(--text); text-decoration: none; font-family: var(--font); }
  .nav-links { display: flex; gap: 32px; align-items: center; }
  .nav-link { font-size: 14px; font-weight: 500; color: var(--dim); text-decoration: none; transition: color 0.25s; }
  .nav-link:hover { color: var(--text); }
  .nav-back { font-size: 14px; font-weight: 500; color: var(--muted); text-decoration: none; display: flex; align-items: center; gap: 6px; transition: color 0.2s; }
  .nav-back:hover { color: var(--dim); }
  .nav-cta { font-size: 14px; font-weight: 600; color: var(--text); background: linear-gradient(135deg, var(--blue), var(--purple)); padding: 10px 24px; border-radius: 100px; text-decoration: none; transition: all 0.35s cubic-bezier(0.16,1,0.3,1); box-shadow: 0 0 20px rgba(59,130,246,0.15); }
  .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 4px 32px rgba(59,130,246,0.3); }

  .hero { position: relative; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; padding: clamp(140px,18vh,200px) clamp(20px,5vw,72px) clamp(80px,10vh,120px); max-width: 1280px; margin: 0 auto; }
  .hero-orbs { position: absolute; top: -20%; left: -10%; right: -10%; bottom: -20%; pointer-events: none; z-index: 0; overflow: hidden; }
  .orb { position: absolute; border-radius: 50%; filter: blur(100px); animation: orbFloat 20s ease-in-out infinite; }
  @keyframes orbFloat { 0%,100%{transform:translate(0,0) scale(1)} 25%{transform:translate(30px,-40px) scale(1.05)} 50%{transform:translate(-20px,20px) scale(0.95)} 75%{transform:translate(15px,-10px) scale(1.02)} }
  .hero-content { position: relative; z-index: 2; }
  .hero-eyebrow { font-size: 12px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: var(--muted); margin-bottom: 28px; display: flex; align-items: center; gap: 12px; }
  .hero-eyebrow::before { content: ''; width: 32px; height: 1px; background: linear-gradient(90deg, var(--blue), var(--purple)); flex-shrink: 0; }
  .hero h1 { font-family: var(--font); font-weight: 700; font-size: clamp(44px,7vw,84px); line-height: 1.04; letter-spacing: -0.035em; max-width: 880px; color: var(--text); }
  .glow { background: linear-gradient(135deg, var(--blue), var(--purple), var(--emerald)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .hero-sub { font-size: clamp(17px,1.8vw,20px); line-height: 1.65; color: var(--dim); max-width: 540px; margin-top: 28px; }
  .hero-actions { display: flex; gap: 20px; align-items: center; margin-top: 44px; flex-wrap: wrap; }
  .hero-price { font-size: 14px; color: var(--muted); }

  .btn-glow { display: inline-flex; align-items: center; gap: 10px; font-family: var(--font); font-size: 16px; font-weight: 600; color: white; background: linear-gradient(135deg, var(--blue), var(--purple)); padding: 16px 36px; border-radius: 100px; border: none; cursor: pointer; text-decoration: none; transition: all 0.35s cubic-bezier(0.16,1,0.3,1); box-shadow: 0 0 32px rgba(59,130,246,0.2), 0 0 64px rgba(139,92,246,0.1); position: relative; overflow: hidden; }
  .btn-glow::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent); opacity: 0; transition: opacity 0.3s; }
  .btn-glow:hover { transform: translateY(-2px); box-shadow: 0 8px 48px rgba(59,130,246,0.35), 0 0 80px rgba(139,92,246,0.15); }
  .btn-glow:hover::before { opacity: 1; }
  .btn-ghost { font-family: var(--font); font-size: 15px; font-weight: 500; color: var(--muted); background: none; border: none; cursor: pointer; padding: 16px 4px; transition: color 0.25s; text-decoration: none; }
  .btn-ghost:hover { color: var(--dim); }
  .btn-outline { display: inline-flex; align-items: center; gap: 10px; font-family: var(--font); font-size: 16px; font-weight: 600; color: var(--text); background: transparent; padding: 16px 36px; border-radius: 100px; border: 1px solid var(--border); cursor: pointer; text-decoration: none; transition: all 0.35s cubic-bezier(0.16,1,0.3,1); }
  .btn-outline:hover { border-color: var(--border-h); background: rgba(255,255,255,0.03); transform: translateY(-2px); }

  .section { padding: clamp(80px,10vh,140px) clamp(20px,5vw,72px); }
  .section-inner { max-width: 1280px; margin: 0 auto; }
  .slabel { font-size: 11px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); margin-bottom: 16px; display: flex; align-items: center; gap: 10px; }
  .slabel::before { content: ''; width: 24px; height: 1px; background: linear-gradient(90deg, var(--blue), var(--purple)); flex-shrink: 0; }
  .stitle { font-family: var(--font); font-size: clamp(32px,4.5vw,56px); font-weight: 700; line-height: 1.08; letter-spacing: -0.035em; color: var(--text); max-width: 720px; }
  .ssub { font-size: 18px; line-height: 1.65; color: var(--dim); max-width: 580px; margin-top: 20px; }

  .glass { background: var(--bg-card); border: 1px solid var(--border); border-radius: 20px; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); transition: all 0.4s cubic-bezier(0.16,1,0.3,1); }
  .glass:hover { border-color: var(--border-h); background: rgba(255,255,255,0.05); box-shadow: 0 8px 48px rgba(0,0,0,0.4); transform: translateY(-4px); }

  .proof-card { max-width: 640px; margin: 0 auto; padding: clamp(28px,3vw,48px); background: var(--bg-card); border: 1px solid var(--border); border-radius: 20px; position: relative; overflow: hidden; }
  .proof-card::before { content:''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--blue), var(--purple), transparent); opacity: 0.3; }
  .proof-quote { font-size: clamp(17px,2vw,22px); line-height: 1.55; color: var(--text); font-style: italic; }
  .proof-attr { margin-top: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
  .proof-name { font-size: 15px; font-weight: 600; color: var(--text); }
  .proof-role { font-size: 14px; color: var(--muted); }
  .proof-badge { font-size: 12px; font-weight: 700; color: var(--emerald); background: rgba(16,185,129,0.08); border: 1px solid rgba(16,185,129,0.15); padding: 6px 14px; border-radius: 100px; }

  .faq-list { margin-top: 48px; max-width: 720px; }
  .faq-item { border-bottom: 1px solid var(--border); }
  .faq-q { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 24px 0; font-size: 17px; font-weight: 600; color: var(--text); background: none; border: none; cursor: pointer; text-align: left; font-family: var(--font); letter-spacing: -0.01em; transition: color 0.2s; }
  .faq-q:hover { color: var(--dim); }
  .faq-icon { font-size: 20px; color: var(--muted); flex-shrink: 0; margin-left: 16px; transition: all 0.35s cubic-bezier(0.16,1,0.3,1); }
  .faq-icon-open { transform: rotate(45deg); color: var(--blue); }
  .faq-a { overflow: hidden; transition: all 0.45s cubic-bezier(0.16,1,0.3,1); }
  .faq-a-inner { padding: 0 0 24px; font-size: 16px; line-height: 1.65; color: var(--dim); max-width: 600px; }

  .final-cta { position: relative; text-align: center; padding: clamp(100px,14vh,180px) clamp(20px,5vw,72px); overflow: hidden; }
  .final-cta .cta-orbs { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
  .final-cta-content { position: relative; z-index: 2; }
  .final-cta h2 { font-family: var(--font); font-size: clamp(36px,5.5vw,64px); font-weight: 700; line-height: 1.08; letter-spacing: -0.035em; max-width: 660px; margin: 0 auto; color: var(--text); }
  .final-cta p { font-size: 18px; color: var(--dim); margin-top: 20px; line-height: 1.6; max-width: 500px; margin-left: auto; margin-right: auto; }
  .final-micro { font-size: 14px; color: var(--muted); margin-top: 16px; }

  .footer { padding: 48px clamp(20px,5vw,72px); border-top: 1px solid var(--border); background: var(--bg); }
  .footer-inner { max-width: 1280px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
  .footer-left { font-size: 14px; color: var(--muted); }
  .footer-links { display: flex; gap: 24px; }
  .footer-link { font-size: 13px; color: rgba(255,255,255,0.2); text-decoration: none; transition: color 0.2s; }
  .footer-link:hover { color: var(--dim); }

  @media (max-width: 768px) {
    .nav-links { display: none; }
  }
`
