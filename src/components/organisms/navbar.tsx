'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; 
import { LanguageSwitcher } from '../molecules/LanguageSwitcher';
import { Button } from '../atoms/button';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/treatments', label: 'Treatments' },
  { href: '/doctor', label: 'Doctor' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      // Set to true if page is scrolled down more than 20 pixels
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-2' 
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 transition-all duration-300">
        <Link href="/" className="relative z-50 flex items-center gap-2 transition-opacity hover:opacity-80">
          <Image
            src="/assets/images/logo.jpeg"
            alt="Hurghada Beauty Hub Logo"
            width={60}
            height={60}
            className="rounded-full object-cover lg:w-[75px] lg:h-[75px]"
            priority
          />
        </Link>

        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={`text-sm lg:text-base font-medium uppercase pb-2 tracking-wide transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 ${
                  isScrolled ? 'text-foreground/80 hover:text-primary' : 'text-black hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <LanguageSwitcher />
          <Button variant="default" size="lg" className="px-5 py-5 text-sm font-bold shadow-md cursor-pointer hover:shadow-lg transition-all">
            Book Now
          </Button>
        </div>

        <button
          className={`md:hidden relative z-50 p-2 focus:outline-none transition-colors ${
            isScrolled ? 'text-foreground' : 'text-white'
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 animate-in spin-in-90 duration-200" />
          ) : (
            <Menu className="w-6 h-6 animate-in spin-out-90 duration-200" />
          )}
        </button>
      </div>

      <div
        className={`fixed inset-0 top-[70px] z-40 h-dvh bg-background/95 backdrop-blur-lg transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-start pt-10 h-full space-y-8 px-6">
          <ul className="flex flex-col items-center space-y-6 w-full">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="w-full text-center">
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-xl font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="w-full h-px bg-border/50 my-6" />

          <div className="flex flex-col items-center gap-6 w-full pb-10">
            <LanguageSwitcher />
            <Button 
              variant="default" 
              size="lg" 
              className="w-full max-w-[250px] py-6 text-lg font-bold shadow-md"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}