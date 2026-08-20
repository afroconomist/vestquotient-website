interface PageHeroProps {
  title: string
  subtitle?: string
  copy?: string
}

export function PageHero({ title, subtitle, copy }: PageHeroProps) {
  return (
    <div className="page-hero">
      <div className="container page-hero-content">
        <h1>{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
        {copy && <p className="page-hero-copy">{copy}</p>}
      </div>
    </div>
  )
}
