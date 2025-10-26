import Image from 'next/image';
import styles from './about.module.css';
import profilePhoto from '../../../assets/kari.jpeg';
import {skills} from '@/data/skillsData';

const AboutSection = () => {

  return (
   <section className={`relative ${styles.about} flex flex-col md:flex-row items-center justify-center gap-20`}>
      <div className={`${styles.containerMain} containerMain`}>
      <div className="relative">
        <div className={`${styles.imageWrapper}`}>
          <div className="w-[430px] h-[430px] bg-gradient-to-br from-pink-200 to-blue-200 rounded-full flex items-center justify-center">
          <Image
            src={profilePhoto}
            alt="Foto de perfil"
            className="rounded-full object-cover"
            width={430}
            height={230}
          />
          </div>
        </div>
      </div>

      <div className="max-w-xl text-center md:text-left space-y-4">
        <div>
        <h2 className={`${styles.title}`}>
          Hola, soy <span > <span className={styles.gradientText}>Karina Henao</span > <span className={styles.floatFlower}>🌸</span> </span>
        </h2>
        
        </div>

        <p className={styles.paragraph}>
            Soy desarrolladora web, apasionada por crear experiencias digitales que combinan diseño y funcionalidad.
            Disfruto convertir ideas en proyectos web atractivos, explorando tanto el frontend como el backend mientras sigo aprendiendo y mejorando cada día.

            Me motiva la posibilidad de crecer en el mundo del desarrollo, aportar soluciones creativas y seguir construyendo código que inspire y funcione.
        </p>


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
      </div>
    </section>
  );
};

export default AboutSection;
