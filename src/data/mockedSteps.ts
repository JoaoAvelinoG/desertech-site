import { type LucideIcon, Monitor, BarChart3, Image } from "lucide-react";

export interface StepType {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon; // 👈 salva o componente, não o JSX
}

export const steps: StepType[] = [
  {
    title: "Criação de Sites",
    description:
      "Sites performáticos e\ncom as melhores tecnologias do mercado.",
    items: [
      "Tecnologias Front: React & Vue",
      "SSR: Next & Nuxt",
      "Backend: PHP & NodeJS",
    ],
    icon: Monitor, // 👈 só o componente
  },
  {
    title: "SEO e Analytics",
    description: "Impulsionamento da presença\ndigital com anúncios.",
    items: ["Google ADS", "Meta ADS", "TikTok"],
    icon: BarChart3,
  },
  {
    title: "Produção de conteúdo",
    description:
      "Edição de imagem e vídeo\nque prendem a atenção e convertem mais!",
    items: [
      "After Effects & Premiere",
      "Photoshop & Illustrator",
      "CorelDraw & InDesign",
    ],
    icon: Image,
  },
];
