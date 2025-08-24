import { Button } from "../ui/button";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderMenuDesktop } from "./HeaderMenuDesktop";
import { HeaderMenuMobile } from "./HeaderMenuMobile";

export const Header = () => {
  return (
    <header className="flex justify-between items-center w-full h-[72px] border border-b-gray-200 px-12">
      <HeaderLogo />
      <HeaderMenuDesktop />

      {/* Menu Mobile */}
      <HeaderMenuMobile />

      {/* CTA btn */}
      <div className="hidden md:block">
        <Button className="cursor-pointer">Fale conosco</Button>
      </div>
    </header>
  );
};
