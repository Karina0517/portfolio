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
   <section className={`relative ${styles.about} flex flex-col md:flex-row items-center justify-center gap-20`}>
      {/* Flores flotantes de fondo */}
      <div className={`absolute top-20 left-10 text-6xl opacity-20 z-20 ${styles.floatFlower}`}>🌸</div> 
      <div className={`absolute top-40 right-20 text-5xl opacity-15 z-20 ${styles.floatFlowerDelayed}`}>🌺</div>
      <div className={`absolute bottom-32 left-1/4 text-4xl opacity-25 z-20 ${styles.floatFlower}`}>🌷</div>
      <div className={`absolute bottom-20 right-1/3 text-5xl opacity-20 z-20 ${styles.floatFlowerDelayed}`}>🌼</div>
      
      {/* Imagen */}
      <div className="relative">
        <div className={`${styles.imageWrapper}`}>
          {/* Flores alrededor de la imagen */}
          <div className={`absolute -top-8 -left-8 text-5xl ${styles.floatFlower}`}>🌸</div>
          <div className={`absolute -top-6 -right-6 text-4xl ${styles.floatFlowerDelayed}`}>🌺</div>
          <div className={`absolute -bottom-8 -left-6 text-4xl ${styles.floatFlower}`}>🌷</div>
          <div className={`absolute -bottom-6 -right-8 text-5xl ${styles.floatFlowerDelayed}`}>🌼</div>
          
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
              <div className={`absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity ${styles.cowSpots}`}>
                <div className="absolute top-2 right-4 w-8 h-6 bg-primary/20 rounded-full"></div>
                <div className="absolute bottom-3 left-3 w-6 h-5 bg-primary/15 rounded-full"></div>
              </div>
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