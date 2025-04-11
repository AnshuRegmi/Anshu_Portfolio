import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="section-container">
        <nav className="flex items-center justify-between py-4">
          <a href="#home" className="text-xl font-bold">Portfolio</a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-foreground/80 hover:text-foreground transition-colors duration-300">
                {link.name}
              </a>
            ))}
            <Button asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
          <button className="md:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="section-container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="py-2 text-foreground/80 hover:text-foreground transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <Button asChild className="w-full">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Get in Touch</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;