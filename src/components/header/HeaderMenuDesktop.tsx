import { useSection } from "@/contexts/SectionContext";

export const HeaderMenuDesktop = () => {
  const { scrollToSection } = useSection();

  return (
    <>
      {/* Menu Desktop */}
      <nav className="hidden md:block">
        <ul className="flex gap-4 text-black/70">
          <li className="cursor-pointer">Home</li>
          <li
            onClick={() => scrollToSection("services")}
            className="cursor-pointer"
          >
            Serviços
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer"
          >
            Contato
          </li>
        </ul>
      </nav>
    </>
  );
};
