import { ArrowUpRight, BarChart3, Building2, FileText, LineChart, ShieldCheck, WalletCards } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PageHero } from '@/components/PageHero'
import { CTABand } from '@/components/CTABand'

const groups = [
  { icon: LineChart, title: 'Stockbroking & trading', copy: 'Execution and custody support across listed Nigerian equities.', items: ['Equity trading on the NGX', 'Primary market offerings and placements', 'Secondary market execution', 'Dividend mandate and collection support', 'Transparent trade reporting and confirmations'] },
  { icon: WalletCards, title: 'Fixed income', copy: 'Practical access to instruments for income, liquidity and capital preservation.', items: ['FGN Bonds', 'Treasury Bills', 'OMO Bills', 'SEC-registered corporate bonds', 'Primary and secondary market placement'] },
  { icon: Building2, title: 'Investment banking', copy: 'Strategic capital solutions for companies, sponsors and institutional investors.', items: ['Corporate finance and advisory', 'Capital raising and restructuring', 'Mergers, acquisitions and disposals', 'Valuations and transaction support', 'Corporate action processing'] },
  { icon: BarChart3, title: 'Research & advisory', copy: 'Independent insight that turns market noise into investable perspective.', items: ['Macroeconomic analysis', 'Sector and company deep-dives', 'Equity research reports', 'Portfolio strategy and asset allocation', 'Bespoke research mandates'] },
]

export default function ServicesPage() { return <main className="site-shell"><Header /><PageHero title={<>Capital, made<br /><em>actionable.</em></>} subtitle="What we do" copy="A complete suite of brokerage, advisory and investment banking capabilities for the way capital moves now." /><section className="section container"><div className="service-detail-grid">{groups.map(({ icon: Icon, title, copy, items }) => <article className="detail-card" key={title}><Icon className="detail-icon" /><h2>{title}</h2><p>{copy}</p><ul>{items.map(item => <li key={item}><ShieldCheck />{item}</li>)}</ul><a className="text-link" href="mailto:exec@vestquotientcapital.com">Discuss a mandate <ArrowUpRight /></a></article>)}</div></section><CTABand title="A clear next move starts with a clear conversation." subtitle="Bring us a goal, a question or a market opportunity." buttonText="Contact advisors" buttonHref="mailto:exec@vestquotientcapital.com" /><Footer /></main> }
