export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#0e0e10]/95 border-b border-[#2a2a2e]">
      <div className="max-w-[1160px] mx-auto px-5 h-14 sm:h-16 flex items-center justify-between gap-8">
        <a
          href="#top"
          className="font-display font-bold text-lg sm:text-xl tracking-[0.08em] uppercase text-[#f2efe8] no-underline whitespace-nowrap shrink-0"
        >
          Ray&rsquo;s <span className="text-[#c9883d]">Ironworks</span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-6 text-[15px] text-[#cfc9bf]"
        >
          <a
            href="#about"
            className="hover:text-[#e8a317] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-[#e8a317] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Services
          </a>
          <a
            href="#work"
            className="hover:text-[#e8a317] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Work
          </a>
          <a
            href="#gallery"
            className="hover:text-[#e8a317] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="hover:text-[#e8a317] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center shrink-0">
          <a
            href="#quote"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#c9883d] hover:bg-[#e8a317] text-[#141210] font-bold text-sm transition-colors whitespace-nowrap shrink-0"
          >
            Design &amp; Quote
          </a>
        </div>
      </div>
    </header>
  );
}
