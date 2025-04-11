import { File, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">
            Get to know more about my journey, experience, and what drives me
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="heading-md">My Story</h3>
            <p className="text-muted-foreground">
              I'm a passionate developer with a keen eye for design and a love for creating seamless user experiences. With a background in both design and development, I bring a unique perspective to every project.
            </p>
            <p className="text-muted-foreground">
              My journey began with a curiosity about how things work on the web, which led me to explore various technologies and frameworks. Today, I focus on building accessible, user-friendly applications that solve real-world problems.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-primary" />
                <span>Location: Your City</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-primary" />
                <span>Experience: X Years</span>
              </div>
            </div>
            <div className="pt-4">
              <Button variant="outline" className="gap-2" asChild>
                <a href="#" download>
                  <File size={18} />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h4 className="heading-sm mb-2">Education</h4>
              <p className="font-medium">Degree Name</p>
              <p className="text-muted-foreground text-sm">University Name, 20XX-20XX</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h4 className="heading-sm mb-2">Experience</h4>
              <p className="font-medium">Job Title</p>
              <p className="text-muted-foreground text-sm">Company Name, 20XX-Present</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h4 className="heading-sm mb-2">Interests</h4>
              <p className="text-muted-foreground">
                Photography, Travel, Reading, Music
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h4 className="heading-sm mb-2">Languages</h4>
              <p className="text-muted-foreground">
                English (Native), Spanish (Conversational)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;