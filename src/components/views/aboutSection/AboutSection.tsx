import Image from 'next/image';
import styles from './about.module.css';
import profilePhoto from '../../../assets/kari.jpeg';
import { skills } from '@/data/skillsData';

const AboutSection = () => {
  return (
    <section className={`${styles.about} ${styles.aboutLayout}`}>
      <div className={styles.containerMain}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageCircle}>
            <Image
              src={profilePhoto}
              alt="Foto de perfil"
              className="rounded-full object-cover"
              width={430}
              height={230}
            />
          </div>
        </div>

        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            Hola, soy{" "}
            <span>
              <span className={styles.gradientText}>Karina Henao</span>{" "}
              <span className={styles.floatFlower}>🌸</span>
            </span>
          </h2>

          <p className={styles.paragraph}>
            Soy desarrolladora web, apasionada por crear experiencias digitales
            que combinan diseño y funcionalidad. Disfruto convertir ideas en
            proyectos web atractivos, explorando tanto el frontend como el
            backend mientras sigo aprendiendo y mejorando cada día. Me motiva la
            posibilidad de crecer en el mundo del desarrollo, aportar soluciones
            creativas y seguir construyendo código que inspire y funcione.
          </p>

          <div className={styles.skillsGrid}>
            {skills.map(({ name, icon: Icon, items }) => (
              <div key={name} className={`${styles.skillCard} ${styles.skillCardLayout}`}>
                <div className={styles.skillHeader}>
                  <Icon className={styles.skillIcon} />
                  <h3 className={styles.skillTitle}>{name}</h3>
                </div>
                <p className={styles.skillItems}>{items.join(' • ')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;