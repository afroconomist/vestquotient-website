'use client'

import { ArrowUpRight, BarChart3, Check, ChevronDown, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const services = [
  { icon: TrendingUp, title: 'Equities trading', copy: 'Low-latency NGX execution via mobile and web, with clear confirmations, competitive commissions and dividend mandate tracking.' },
  { icon: BarChart3, title: 'Fixed income placement', copy: 'Access FGN Bonds, Treasury Bills, OMO bills and SEC-registered corporate debt across primary and secondary markets.' },
  { icon: ShieldCheck, title: 'Account & CSCS management', copy: 'Paperless e-KYC onboarding, automated CSCS account generation and transparent portfolio valuation reporting.' },
  { icon: Sparkles, title: 'Research-led advisory', copy: 'Macroeconomic analysis, sector deep-dives and proprietary equity intelligence to support decisive investing.' },
]

const audiences = ['Retail investors', 'HNIs', 'SMEs & corporates', 'Institutions', 'Diaspora Nigerians', 'Cooperative schemes']

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <Header />
        <div className="hero-content container">
          <p className="eyebrow"><span className="eyebrow-dot" /> Lagos · Nigeria · Since 2008</p>
          <h1>Clarity of insight.<br /><em>Precision in execution.</em></h1>
          <p className="hero-copy">A modern capital markets partner for Nigerians building enduring wealth — at home and around the world.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://trade.vestquotientcapital.com" target="_blank" rel="noreferrer">Start investing <ArrowUpRight /></a>
            <Link className="button button-quiet" href="/about">
              Discover VestQuotient <ChevronDown />
            </Link>
          </div>
        </div>
        <div className="hero-foot container"><span>Registered SEC Broker</span><span>NGX Dealing Member</span><span>CSCS Participant</span><span>₦600M paid-up capital</span></div>
      </section>

      <section className="intro section container" id="about">
        <div className="section-label">01 <span>Our point of view</span></div>
        <div className="intro-grid">
          <h2>We make the Nigerian capital market feel <em>clearer.</em></h2>
          <div className="intro-copy"><p>At VestQuotient Capital, we bridge world-class institutional discipline with digital accessibility. We are not just order-executors; we are dedicated wealth partners.</p><p>From first-time retail investors to institutional treasuries and Nigerians abroad, our promise is consistent: uncompromised integrity, research-driven advisory and efficient execution.</p><Link className="text-link" href="/about">Explore our story <ArrowUpRight /></Link></div>
        </div>
      </section>

      <section className="proof-band"><div className="container proof-grid"><div><strong>01</strong><span>Digital-first</span><p>e-KYC onboarding, mobile trading and real-time portfolio visibility.</p></div><div><strong>02</strong><span>Research-led</span><p>Market intelligence that helps you move with conviction.</p></div><div><strong>03</strong><span>Compliance-first</span><p>Independent oversight, segregated funds and transparent reporting.</p></div></div></section>

      <section className="services section container" id="services">
        <div className="section-label">02 <span>What we do</span></div>
        <div className="section-heading"><h2>Built for the way<br /><em>capital moves now.</em></h2><p>Comprehensive brokerage and advisory solutions, delivered with the care of a dedicated relationship team.</p></div>
        <div className="service-grid">{services.map(({ icon: Icon, title, copy }, index) => <article className="service-card" key={title}><div className="card-top"><span>0{index + 1}</span><Icon /></div><h3>{title}</h3><p>{copy}</p><Link href="/services" aria-label={`Learn more about ${title}`}><ArrowUpRight /></Link></article>)}</div>
      </section>

      <section className="diaspora section" id="diaspora"><div className="container diaspora-grid"><div><div className="section-label light">03 <span>The diaspora advantage</span></div><h2>Home is a market<br /><em>worth returning to.</em></h2><p>Our dedicated Diaspora Wealth Desk is a high-touch gateway for Nigerians abroad to participate in domestic markets without operational friction.</p><a className="button button-light" href="mailto:diaspora@vestquotientcapital.com">Talk to the diaspora desk <ArrowUpRight /></a></div><div className="diaspora-list">{['100% digital Video KYC', 'USD, GBP & EUR funding support', 'e-CCI administration for repatriation', 'Time-zone aligned account managers'].map(item => <div className="list-item" key={item}><Check /> <span>{item}</span></div>)}</div></div></section>

      <section className="audience section container"><div className="section-label">04 <span>Who we serve</span></div><div className="audience-grid"><h2>One market.<br /><em>Many ambitions.</em></h2><div className="audience-list">{audiences.map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong><ArrowUpRight /></div>)}</div></div></section>

      <section className="governance section container" id="governance"><div className="section-label">05 <span>Trust, by design</span></div><div className="governance-grid"><div><h2>Strong governance is not a requirement.<br /><em>It is an advantage.</em></h2><p>Our compliance function operates independently, reporting directly to the Board. Every trade sits within a framework built for protection, clarity and accountability.</p><Link className="text-link" href="/trust">Learn more about trust <ArrowUpRight /></Link></div><div className="governance-points">{['Strict segregation of client funds', 'Independent Board Risk & Compliance Committee', 'SEC Broker, NGX Dealing Member & CSCS participant', 'Annual independent audit of financial controls'].map(point => <div key={point}><ShieldCheck /><span>{point}</span></div>)}</div></div></section>

      <section className="start section"><div className="container start-inner"><div className="section-label light">06 <span>Your next move</span></div><h2>Invest with more<br /><em>clarity.</em></h2><p>Open your account in minutes, or speak with an advisor about a strategy built around your goals.</p><div className="steps"><div><strong>01</strong><span>Open account</span><small>Complete instant e-KYC online.</small></div><div><strong>02</strong><span>Fund & strategise</span><small>Fund securely or meet an advisor.</small></div><div><strong>03</strong><span>Execute</span><small>Trade with real-time analytics.</small></div></div><a className="button button-light" href="https://trade.vestquotientcapital.com" target="_blank" rel="noreferrer">Open an account <ArrowUpRight /></a></div></section>

      <Footer />
    </main>
  )
}
