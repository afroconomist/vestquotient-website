'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const closeMenu = () => setOpen(false)

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <nav className="nav container" aria-label="Main navigation">
      <Link href="/" className="wordmark" onClick={closeMenu}>
        <span className="mark">VQ</span>
        <span>VestQuotient <small>CAPITAL</small></span>
      </Link>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
        <span className="sr-only">Toggle navigation</span>
      </button>
      <div id="site-menu" className={`nav-links ${open ? 'is-open' : ''}`}>
        <Link href="/about" onClick={closeMenu} className={isActive('/about') ? 'active' : ''}>
          About
        </Link>
        <Link href="/services" onClick={closeMenu} className={isActive('/services') ? 'active' : ''}>
          Services
        </Link>
        <Link href="/diaspora" onClick={closeMenu} className={isActive('/diaspora') ? 'active' : ''}>
          Diaspora
        </Link>
        <Link href="/trust" onClick={closeMenu} className={isActive('/trust') ? 'active' : ''}>
          Trust
        </Link>
        <Link href="/impact" onClick={closeMenu} className={isActive('/impact') ? 'active' : ''}>
          Impact
        </Link>
        <Link href="/research" onClick={closeMenu} className={isActive('/research') ? 'active' : ''}>
          Research
        </Link>
        <Link href="/careers" onClick={closeMenu} className={isActive('/careers') ? 'active' : ''}>
          Careers
        </Link>
        <Link
          className="nav-cta"
          href="https://trade.vestquotientcapital.com"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          Open account <ArrowUpRight />
        </Link>
      </div>
    </nav>
  )
}
