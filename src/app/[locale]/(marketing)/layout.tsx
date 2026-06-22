export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-brand-gold/10 py-4 px-6 bg-brand-dark-950/80 backdrop-blur-md sticky top-0 z-sticky">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-serif text-brand-gold text-xl font-bold">BEAUTY HUB</span>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-brand-light-200">
            <span className="hover:text-brand-gold cursor-pointer">Treatments</span>
            <span className="hover:text-brand-gold cursor-pointer">Gallery</span>
            <span className="hover:text-brand-gold cursor-pointer">Blog</span>
            <span className="hover:text-brand-gold cursor-pointer">Medical Tourism</span>
          </nav>
        </div>
      </header>
      <main className="flex-grow flex flex-col">{children}</main>
      <footer className="border-t border-brand-gold/10 py-6 px-6 bg-brand-dark-900 text-center text-xs text-brand-light-200">
        <div className="max-w-7xl mx-auto">
          &copy; {new Date().getFullYear()} Beauty Hub Hurghada. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
