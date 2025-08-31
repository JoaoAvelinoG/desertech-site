import { HeaderLogo } from "./HeaderLogo";
import { HeaderMenuDesktop } from "./HeaderMenuDesktop";
import { HeaderMenuMobile } from "./HeaderMenuMobile";
import { HeaderContactButton } from "./HeaderContactUs";

export const Header = () => {
  return (
    <header className="flex justify-between items-center w-full h-[72px] border border-b-gray-200 px-6  md:px-12">
      <HeaderLogo />
      <HeaderMenuDesktop />
      <HeaderMenuMobile />
      {/* CTA btn */}
      <HeaderContactButton />
    </header>
  );
};
