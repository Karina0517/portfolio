import { Code2, Palette, Rocket, Database } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection = () => {
  const skills = [
    { name: 'Frontend', icon: Code2, items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
    { name: 'Backend', icon: Database, items: ['Node.js', 'PostgreSQL', 'API REST'] },
    { name: 'Diseño', icon: Palette, items: ['Figma', 'UI/UX', 'Responsive Design'] },
    { name: 'Herramientas', icon: Rocket, items: ['Git', 'Vite', 'Vercel', 'Docker'] },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full gradient-primary p-1">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  <img
                    // src={profilePhoto}
                    alt="Foto de perfil"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground rounded-full px-6 py-3 shadow-card font-semibold">
                Desarrollador Web
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl font-bold">
              Hola, soy <span className="gradient-text">Tu Nombre</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desarrollador web apasionado por crear experiencias digitales excepcionales.
              Especializado en tecnologías modernas y diseño responsive, transformo ideas
              en aplicaciones web elegantes y funcionales.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Con experiencia en desarrollo frontend y backend, me enfoco en construir
              soluciones escalables que combinan diseño intuitivo con código limpio y eficiente.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover-lift shadow-soft"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">{skill.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {skill.items.join(' • ')}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;