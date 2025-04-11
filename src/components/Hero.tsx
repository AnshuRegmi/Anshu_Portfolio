import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="heading-xl">
              Hello, I'm <span className="subtle-highlight">Your Name</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A passionate developer crafting beautiful digital experiences with attention to detail
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-muted rounded-full overflow-hidden animate-fade-in">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                Your Photo Here
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-background p-4 rounded-lg shadow-lg animate-fade-in">
              <p className="font-medium">Currently available for work</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-foreground/50 hover:text-foreground transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;