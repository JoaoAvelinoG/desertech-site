import { LogoFacebook } from "../logos/LogoFacebook";
import { LogoInstagram } from "../logos/LogoInstagram";
import { LogoYoutube } from "../logos/LogoYoutube";

// Componente SocialMediaLinks
export const LogoList = () => {
  // Lista de redes sociais com id, ícone e link
  const socialMediaLinksList = [
    {
      id: 1,
      icon: <LogoInstagram />,
      url: "https://www.instagram.com/seuusuario",
    },
    {
      id: 2,
      icon: <LogoFacebook />,
      url: "https://www.facebook.com/seuusuario",
    },
    {
      id: 3,
      icon: <LogoYoutube />,
      url: "https://www.youtube.com/seuusuario",
    },
  ];

  return (
    <div className="flex items-center gap-2 mt-8">
      {socialMediaLinksList.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 transform transition-transform duration-300 
             hover:-translate-y-1"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};
