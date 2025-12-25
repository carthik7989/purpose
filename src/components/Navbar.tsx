import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/30 border-b border-white/10 overflow-hidden">
      <div className="max-container mx-auto fpx h-15 md:h-20 flex items-center justify-between font-big-shoulders font-semibold text-lg">

        <div className="xl:hidden text-xl md:text-2xl gold-text font-big-shoulders capitalize font-bold">The Purpose Project</div>
        {/* Desktop Links */}
        <div className="hidden xl:flex items-center space-x-16">
          <NavLink href="#about">Home</NavLink>
          <NavLink href="#services">About</NavLink>
          <NavLink href="#testimonials">Pages</NavLink>
          <NavLink href="#testimonials">Speakers</NavLink>
        </div>
        <div className="hidden xl:flex items-center space-x-16">
          <NavLink href="#about">Gallery</NavLink>
          <NavLink href="#services">Sponsor</NavLink>
          <NavLink href="#testimonials">Faq</NavLink>
          <NavLink href="#testimonials">Contact</NavLink>
        </div>
        {/* End of Desktop Links */}

        <div className="xl:hidden flex flex-col gap-[6px]">
          <div className="h-0.5 w-6 bg-white "></div>
          <div className="h-0.5 w-6 bg-white "></div>
          <div className="h-0.5 w-6 bg-white "></div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-white hover:text-gold transition-colors tracking-widest"
    >
      {children}
    </Link>
  );
}
