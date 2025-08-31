import { useSection } from "@/contexts/SectionContext";
import { Button } from "../ui/button";

export const HeaderContactButton = () => {
  const { scrollToSection } = useSection();

  return (
    <div className="hidden md:block">
      <Button
        onClick={() => scrollToSection("contact")}
        className="cursor-pointer"
      >
        Fale conosco
      </Button>
    </div>
  );
};
