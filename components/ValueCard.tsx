interface ValueCardProps {
  title: string
  description: string
  icon?: string
}

export function ValueCard({ title, description, icon }: ValueCardProps) {
  return (
    <article className="value-card">
      {icon && <div className="card-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
