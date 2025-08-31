// src/context/SectionContext.tsx

import { createContext, useContext, type Ref } from "react";

// Define a tipagem para o estado e as funções do seu contexto.
interface SectionContextType {
  activeSection: string;
  home: Ref<HTMLElement> | undefined;
  services: Ref<HTMLElement> | undefined;
  contact: Ref<HTMLElement> | undefined;
  setActiveSection: (section: string) => void;
  scrollToSection: (section: "home" | "services" | "contact") => void;
}

// Cria o contexto com um valor padrão. O valor 'null' aqui é temporário
// e será sobrescrito pelo Provider. Usamos 'null' para garantir que o
// useContext só seja usado dentro do Provider, evitando erros.
export const SectionContext = createContext<SectionContextType | null>(null);

// Hook personalizado para facilitar o uso do contexto,
// verificando se está sendo usado corretamente.
export const useSection = () => {
  const context = useContext(SectionContext);
  if (context === null) {
    throw new Error("useSection deve ser usado dentro de um SectionProvider");
  }
  return context;
};
