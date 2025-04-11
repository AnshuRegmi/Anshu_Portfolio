import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50 py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-muted-foreground">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a 
              href="#home"
              className="bg-background p-2 rounded-full shadow-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Back to top"
            >
              <ChevronUp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;