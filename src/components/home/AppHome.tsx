import { useSection } from "@/contexts/SectionContext";
import { WhatsAppLink } from "../WhatsAppLink";
import { HomeContactArea } from "./contact/HomeContactArea";
import { HomeServices } from "./services-area/HomeServices";
import { HomeDivider } from "./hero-area/HomeDivider";
import { HomeHero } from "./hero-area/HomeHero";
import { HomePortfolio } from "./services-area/HomePortFolio";

export const AppHome = () => {
  const { services, contact } = useSection();

  return (
    <main className="home">
      {/* WhatsApp Button */}
      <WhatsAppLink />
      <HomeHero />

      <HomeDivider />

      {/* Seção dos Cards */}
      <HomeServices sectionRef={services} />

      <HomePortfolio />

      {/* Formulário */}
      <HomeContactArea sectionRef={contact} />
    </main>
  );
};
