import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:tu@email.com', label: 'Email' },
  ];

  return (
    <footer className="py-8 px-4 border-t border-border bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text mb-2">Mi Portafolio</h3>
            <p className="text-sm text-muted-foreground">
              Desarrollador Web Fullstack
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all hover-lift"
                  aria-label={social.label}
                >
                  <Icon size={20} className="text-foreground hover:text-primary transition-colors" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p className="flex items-center gap-2 justify-center md:justify-end">
              © {currentYear} Hecho con <Heart size={16} className="text-primary fill-primary" /> por Tu Nombre
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;