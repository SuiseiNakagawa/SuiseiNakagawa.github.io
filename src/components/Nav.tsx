'use client'

import { useState, useEffect } from 'react'
import { SHOW_PUBLICATIONS } from '@/config/features'

const navLinks = [
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  ...(SHOW_PUBLICATIONS ? [{ label: 'Publications', href: '#publications' }] : []),
  { label: 'Projects', href: '#projects' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAFAF7]/95 backdrop-blur-sm border-b border-[#E0DDD6]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-6 md:px-10 h-[3.5rem] flex items-center justify-between">
        {/* Name */}
        <a
          href="#"
          className="font-serif text-[1.0625rem] font-semibold text-ink tracking-tight hover:text-accent transition-colors duration-150"
        >
          Suisei Nakagawa
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="t-label hover:text-accent transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-ink transition-all duration-200 ${
              menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-ink transition-all duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-ink transition-all duration-200 ${
              menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAFAF7] border-b border-[#E0DDD6] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="t-label hover:text-accent transition-colors duration-150"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
