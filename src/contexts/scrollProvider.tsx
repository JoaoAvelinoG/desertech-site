import { useRef, useState, type ReactNode } from "react";
import { SectionContext } from "./SectionContext";

import { animate } from "framer-motion";

// Defina a tipagem para as props do Provider.
interface SectionProviderProps {
  children: ReactNode;
}

export const SectionProvider: React.FC<SectionProviderProps> = ({
  children,
}) => {
  // A 'activeSection' é o dado que queremos compartilhar.
  // A 'setActiveSection' é a função para modificar esse dado.
  const [activeSection, setActiveSection] = useState<string>("home");

  // Refs das seções
  const home = useRef<HTMLElement>(null);
  const services = useRef<HTMLElement>(null);
  const contact = useRef<HTMLElement>(null);

  // Função de scroll suave
  const scrollToSection = (section: "home" | "services" | "contact") => {
    const refs = { home, services, contact };
    const element = refs[section].current;

    if (element) {
      const top = element.offsetTop;

      // animação com easing suave
      animate(window.scrollY, top, {
        duration: 0.8,
        ease: "easeInOut",
        onUpdate: (latest) => window.scrollTo(0, latest),
      });

      setActiveSection(section);
    }
  };

  // O valor que será passado para todos os consumidores do contexto.
  const value = {
    activeSection,
    setActiveSection,
    home,
    services,
    contact,
    scrollToSection,
  };
  return (
    <SectionContext.Provider value={value}>{children}</SectionContext.Provider>
  );
};
