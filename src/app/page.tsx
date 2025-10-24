import AboutSection from '@/components/views/aboutSection/AboutSection'
import { Card } from '@/components/ui/card/Card';
import ContactSection from '@/components/views/contactSection/ContactSection';
import ProjectsSection from '@/components/views/projectsSection/ProjectsSection';
import { Badge } from '@/components/ui/badge/Badge';
const Index = () => {
  return (
    <div className="min-h-screen">
       {/* <Header />
      <main> */}
        <AboutSection />
        {/* <ContactSection /> */}
      {/* </main> */}
      {/* <Footer />  */}
    </div>
  );
};

export default Index;


// Ejemplo de uso skills
// export default Index;

//   const skills = [
//     {
//       title: "PostgreSQL",
//       icon: SiPostgresql,
//       items: ["Base de datos relacional", "ORM", "Consultas SQL"],
//     },
//     {
//       title: "React",
//       icon: SiReact,
//       items: ["Hooks", "Componentes", "SPA"],
//     },
//     {
//       title: "TypeScript",
//       icon: SiTypescript,
//       items: ["Tipos", "Interfaces", "Generics"],
//     },
//   ];

//   return (
//     <div className="grid grid-cols-2 gap-4 pt-4">
//       {skills.map((skill, index) => (
//         <Card
//           key={index}
//           variant="skill"
//           title={skill.title}
//           icon={skill.icon}
//           items={skill.items}
//         />
//       ))}
//     </div>
//   );
