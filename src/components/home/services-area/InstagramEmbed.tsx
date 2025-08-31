import { useEffect } from "react";

interface Props {
  url: string;
}

export const InstagramEmbed = ({ url }: Props) => {
  useEffect(() => {
    // Adiciona o script do Instagram se ainda não estiver na página
    const scriptId = "instagram-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
        <blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14"></blockquote>
      `,
      }}
    />
  );
};
