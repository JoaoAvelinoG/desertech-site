import { HeaderLogo } from "../header/HeaderLogo";
import { FooterAddress } from "./FooterAddress";
import { FooterLogos } from "./FooterLogos";
import { LogoList } from "./LogoList";

export const Footer = () => {
  return (
    <footer className="shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex container mx-auto py-10">
        <div className="w-full bg-white">
          <HeaderLogo />
          <LogoList />
          <FooterAddress />
        </div>
        <FooterLogos />
      </div>
    </footer>
  );
};
