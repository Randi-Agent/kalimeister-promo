import Link from "next/link"

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-[#0f0a1a]/90 backdrop-blur border-b border-purple-900/50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#d4a843] tracking-wide">
          Kali Meister
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-purple-200">
          <Link href="/readings" className="hover:text-[#d4a843] transition-colors">Readings</Link>
          <Link href="/about" className="hover:text-[#d4a843] transition-colors">About</Link>
          <a
            href="#book"
            className="bg-[#d4a843] text-[#0f0a1a] px-4 py-2 rounded-lg font-semibold hover:bg-[#f0d870] transition-colors"
          >
            Book a Reading
          </a>
        </nav>
      </div>
    </header>
  )
}
