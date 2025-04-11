import { Skill } from '@/types';

const Skills = () => {
  const frontendSkills: Skill[] = [
    { name: 'HTML/CSS', level: 5, category: 'frontend' },
    { name: 'JavaScript', level: 4, category: 'frontend' },
    { name: 'React', level: 4, category: 'frontend' },
    { name: 'TypeScript', level: 3, category: 'frontend' },
    { name: 'Tailwind CSS', level: 4, category: 'frontend' },
  ];

  const backendSkills: Skill[] = [
    { name: 'Node.js', level: 3, category: 'backend' },
    { name: 'Express', level: 3, category: 'backend' },
    { name: 'MongoDB', level: 3, category: 'backend' },
    { name: 'SQL', level: 2, category: 'backend' },
  ];

  const otherSkills: Skill[] = [
    { name: 'Git', level: 4, category: 'other' },
    { name: 'Figma', level: 3, category: 'design' },
    { name: 'UI/UX Design', level: 3, category: 'design' },
    { name: 'Project Management', level: 4, category: 'other' },
  ];

  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`h-2 w-6 rounded-full ${i < level ? 'bg-primary' : 'bg-muted'}`} />
        ))}
      </div>
    );
  };

  return (
    <section id="skills">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4">My Skills</h2>
          <p className="text-muted-foreground text-lg">
            The technologies, tools, and expertise I bring to your project
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-background p-6 rounded-lg shadow-sm">
            <h3 className="heading-md mb-6">Frontend</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {skill.level === 5 ? 'Expert' : 
                       skill.level === 4 ? 'Advanced' : 
                       skill.level === 3 ? 'Intermediate' : 
                       skill.level === 2 ? 'Basic' : 'Beginner'}
                    </span>
                  </div>
                  {renderSkillLevel(skill.level)}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm">
            <h3 className="heading-md mb-6">Backend</h3>
            <div className="space-y-6">
              {backendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {skill.level === 5 ? 'Expert' : 
                       skill.level === 4 ? 'Advanced' : 
                       skill.level === 3 ? 'Intermediate' : 
                       skill.level === 2 ? 'Basic' : 'Beginner'}
                    </span>
                  </div>
                  {renderSkillLevel(skill.level)}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm">
            <h3 className="heading-md mb-6">Other Skills</h3>
            <div className="space-y-6">
              {otherSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {skill.level === 5 ? 'Expert' : 
                       skill.level === 4 ? 'Advanced' : 
                       skill.level === 3 ? 'Intermediate' : 
                       skill.level === 2 ? 'Basic' : 'Beginner'}
                    </span>
                  </div>
                  {renderSkillLevel(skill.level)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;