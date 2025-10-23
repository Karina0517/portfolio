import { Code2, Palette, Rocket, Database } from 'lucide-react';
import Image from 'next/image';
import profilePhoto from '@/assets/bellota.png';
import styles from './about.module.css';
import { Badge } from '@/components/ui/badge/Badge';

const AboutSection = () => {
  const skills = [
    { name: 'Frontend', icon: Code2, items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
    { name: 'Backend', icon: Database, items: ['Node.js', 'PostgreSQL', 'API REST'] },
    { name: 'Diseño', icon: Palette, items: ['Figma', 'UI/UX', 'Responsive Design'] },
    { name: 'Herramientas', icon: Rocket, items: ['Git', 'Vite', 'Vercel', 'Docker'] },
  ];

  return (
    <section className={`${styles.about} flex flex-col md:flex-row items-center justify-center gap-20`}>
      {/* Imagen */}
      <div className="relative">
        <div className={`${styles.imageWrapper}`}>
          <Image
            src={profilePhoto}
            alt="Foto de perfil"
            className="rounded-full object-cover"
            width={430}
            height={230}
          />
        </div>
          <Badge text="Karina Henao" color='blue' />
      </div>

      {/* Texto de presentación */}
      <div className="max-w-xl text-center md:text-left space-y-4">
        <h2 className={`${styles.title}`}>
          Hola, soy <span className={styles.gradientText}>Karina Henao</span>
        </h2>
        <p className={styles.paragraph}>
          Desarrolladora web apasionada por crear experiencias digitales excepcionales.
          Especializado en tecnologías modernas y diseño responsive, transformo ideas en
          aplicaciones web elegantes y funcionales.
        </p>
        <p className={styles.paragraph}>
          Con experiencia en desarrollo frontend y backend, me enfoco en construir soluciones
          escalables que combinan diseño intuitivo con código limpio y eficiente.
        </p>

        {/* Habilidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {skills.map(({ name, icon: Icon, items }) => (
            <div
              key={name}
              className={`${styles.skillCard} flex flex-col p-4 rounded-xl border`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-5 h-5 text-pink-400" />
                <h3 className="font-semibold">{name}</h3>
              </div>
              <p className="text-sm text-gray-600">{items.join(' • ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
