import Link from 'next/link'

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="wordmark footer-mark">
            <span className="mark">VQ</span>
            <span>VestQuotient <small>CAPITAL</small></span>
          </Link>
          <p>Clarity of insight. Precision in execution.<br />Institutional-grade wealth creation.</p>
        </div>
        <div className="footer-links">
          <div>
            <span>Connect</span>
            <a href="mailto:exec@vestquotientcapital.com">Executive advisors</a>
            <a href="mailto:research@vestquotientcapital.com">Research desk</a>
            <a href="mailto:diaspora@vestquotientcapital.com">Diaspora desk</a>
            <a href="mailto:careers@vestquotientcapital.com">Careers</a>
            <Link href="/privacy">Privacy & disclosures</Link>
          </div>
          <div>
            <span>Visit</span>
            <p>5A Esugbayi Street<br />Ikeja GRA, Lagos<br />Nigeria</p>
            <p style={{ marginTop: '10px', fontSize: '11px', opacity: 0.7 }}>+234 706 030 1505</p>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 VestQuotient Capital Limited</span>
        <span>Investment values can rise and fall. Past returns do not guarantee future performance.</span>
      </div>
    </footer>
  )
}
