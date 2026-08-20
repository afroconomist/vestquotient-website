import { ArrowUpRight } from 'lucide-react'

interface CTABandProps {
  title: string
  subtitle?: string
  buttonText: string
  buttonHref: string
  isDark?: boolean
}

export function CTABand({ title, subtitle, buttonText, buttonHref, isDark = false }: CTABandProps) {
  const isExternal = buttonHref.startsWith('http') || buttonHref.startsWith('mailto')

  return (
    <section className={`cta-band ${isDark ? 'cta-band-dark' : ''}`}>
      <div className="container cta-band-inner">
        <div>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        {isExternal ? (
          <a
            className={`button ${isDark ? 'button-light' : 'button-primary'}`}
            href={buttonHref}
            {...(buttonHref.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            {buttonText} <ArrowUpRight />
          </a>
        ) : (
          <a
            className={`button ${isDark ? 'button-light' : 'button-primary'}`}
            href={buttonHref}
          >
            {buttonText} <ArrowUpRight />
          </a>
        )}
      </div>
    </section>
  )
}
