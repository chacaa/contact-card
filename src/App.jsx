import { useState, useEffect } from "react";
import {
  Globe,
  Briefcase,
  BookOpen,
  Code,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  Share2,
  Heart,
} from "lucide-react";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import LinkButton from "./components/LinkButton";
import SocialButton from "./components/SocialButton";

// Configuración personalizable - aquí puedes cambiar todos los datos
const PROFILE_CONFIG = {
  name: "Tu Nombre",
  bio: "Desarrollador Full Stack | Creador de contenido | Tech Enthusiast",
  avatar:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  links: [
    {
      id: 1,
      title: "Mi Portfolio",
      description: "Explora mis proyectos y trabajos",
      href: "https://tu-portfolio.com",
      icon: Globe,
      gradient: true,
    },
    {
      id: 2,
      title: "Mi Blog",
      description: "Artículos sobre desarrollo y tecnología",
      href: "https://tu-blog.com",
      icon: BookOpen,
    },
    {
      id: 3,
      title: "Proyectos en GitHub",
      description: "Código abierto y repositorios",
      href: "https://github.com/tu-usuario",
      icon: Code,
    },
    {
      id: 4,
      title: "Servicios Profesionales",
      description: "Consultoría y desarrollo freelance",
      href: "https://tu-servicio.com",
      icon: Briefcase,
    },
  ],
  social: [
    {
      id: 1,
      href: "https://github.com/tu-usuario",
      icon: Github,
      label: "GitHub",
      color: "github",
    },
    {
      id: 2,
      href: "https://linkedin.com/in/tu-usuario",
      icon: Linkedin,
      label: "LinkedIn",
      color: "linkedin",
    },
    {
      id: 3,
      href: "https://instagram.com/tu-usuario",
      icon: Instagram,
      label: "Instagram",
      color: "instagram",
    },
    {
      id: 4,
      href: "mailto:tu-email@ejemplo.com",
      icon: Mail,
      label: "Email",
      color: "email",
    },
    {
      id: 5,
      href: "tel:+1234567890",
      icon: Phone,
      label: "Teléfono",
      color: "phone",
    },
  ],
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simular carga inicial
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${PROFILE_CONFIG.name} - Links`,
          text: PROFILE_CONFIG.bio,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error al compartir:", error);
      }
    } else {
      // Fallback para navegadores que no soportan Web Share API
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("¡Enlace copiado al portapapeles!");
      } catch (error) {
        console.log("Error al copiar:", error);
      }
    }
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-bg-light dark:bg-bg-dark flex items-center justify-center">
        <div className="animate-pulse-slow">
          <div className="w-16 h-16 bg-accent rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg-light dark:bg-bg-dark bg-pattern transition-colors duration-300">
        <ThemeToggle />

        <div className="container mx-auto px-4 py-8 max-w-md">
          {/* Header Section */}
          <header className="text-center mb-8 animate-fade-in">
            <div className="relative mb-6">
              <img
                src={PROFILE_CONFIG.avatar}
                alt={PROFILE_CONFIG.name}
                className="w-32 h-32 rounded-full mx-auto shadow-lg border-4 border-white dark:border-gray-700 animate-float"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-700"></div>
            </div>

            <h1 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">
              {PROFILE_CONFIG.name}
            </h1>

            <p className="text-gray-600 dark:text-gray-300 mb-6 px-4">
              {PROFILE_CONFIG.bio}
            </p>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-full font-medium transition-colors duration-300"
            >
              <Share2 size={16} />
              <span>Compartir</span>
            </button>
          </header>

          {/* Links Section */}
          <main className="space-y-4 mb-8">
            {PROFILE_CONFIG.links.map((link, index) => (
              <div
                key={link.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <LinkButton
                  href={link.href}
                  title={link.title}
                  description={link.description}
                  icon={link.icon}
                  gradient={link.gradient}
                />
              </div>
            ))}
          </main>

          {/* Social Media Section */}
          <section className="animate-fade-in">
            <h2 className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
              Sígueme en redes sociales
            </h2>

            <div className="flex justify-center space-x-4 mb-8">
              {PROFILE_CONFIG.social.map((social, index) => (
                <div
                  key={social.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <SocialButton
                    href={social.href}
                    icon={social.icon}
                    label={social.label}
                    color={social.color}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center animate-fade-in">
            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center space-x-1">
              <span>Hecho con</span>
              <Heart size={12} className="text-red-500 animate-pulse" />
              <span>usando Tailwind CSS v3</span>
            </p>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
