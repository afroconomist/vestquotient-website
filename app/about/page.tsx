import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PageHero } from '@/components/PageHero'
import { CTABand } from '@/components/CTABand'

const values = [
  ['Integrity', 'We do what is right, even when no one is watching.'],
  ['Client first', 'Your goals, risk profile and long-term interests guide our advice.'],
  ['Excellence', 'We pursue rigorous thinking, reliable execution and continuous improvement.'],
  ['Innovation', 'We use technology to make investing more accessible and efficient.'],
  ['Transparency', 'Clear pricing, reporting and communication at every step.'],
  ['Collaboration', 'Better outcomes come from listening, sharing insight and working together.'],
]

export default function AboutPage() {
  return <main className="site-shell"><Header /><PageHero title={<>Built for the long view.<br /><em>Rooted in Lagos.</em></>} subtitle="Who we are" copy="VestQuotient Capital Limited is a Nigerian investment bank and stockbroking firm serving people, businesses and institutions with clarity, discipline and care." />
    <section className="section container"><div className="section-label">01 <span>Our story</span></div><div className="split-copy"><div><h2>A new standard for Nigerian capital markets.</h2><p>We are a full-service investment banking and stockbroking firm committed to delivering world-class financial services to retail investors, high net worth individuals, SMEs, corporates, institutions, cooperative societies and Nigerians in the diaspora.</p><p>Our team combines local market intelligence with institutional discipline. We make participation in the Nigerian capital market easier to understand, easier to access and easier to act on.</p></div><div className="fact-panel"><span>Corporate snapshot</span><strong>₦600M</strong><p>Paid-up capital</p><strong>SEC</strong><p>Registered broker</p><strong>NGX / CSCS</strong><p>Dealing member and participant</p></div></div></section>
    <section className="section section-tint"><div className="container"><div className="split-copy"><div><div className="section-label">02 <span>Purpose</span></div><h2>Our vision is a financially empowered Nigeria.</h2></div><div><p>Our mission is to democratise access to wealth creation through ethical, innovative and research-led financial services.</p><p className="quote">“Clarity of insight. Precision in execution.”</p><Link className="text-link" href="/services">Explore our capabilities <ArrowUpRight /></Link></div></div></div></section>
    <section className="section container"><div className="section-label">03 <span>Our values</span></div><div className="value-grid">{values.map(([title, copy], i) => <article className="value-card" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <CTABand title="Let’s build a better financial future." subtitle="Talk to our team about your goals, mandate or investment journey." buttonText="Meet the team" buttonHref="mailto:exec@vestquotientcapital.com" isDark /><Footer /></main>
} 
