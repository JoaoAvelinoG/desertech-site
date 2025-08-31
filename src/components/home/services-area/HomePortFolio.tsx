import { InstagramEmbed } from "./InstagramEmbed";

export const HomePortfolio = () => {
  return (
    <>
      <h2 className="font-bold text-4xl md:text-5xl text-center">Produções:</h2>
      <div className="flex justify-center items-center container mx-auto">
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 justify-items-center lg:grid-cols-3 border">
          <InstagramEmbed url="https://www.instagram.com/reel/CmNAhgBLGf8/" />
          <InstagramEmbed url="https://www.instagram.com/p/CmziRUBKIci/" />
          <InstagramEmbed url="https://www.instagram.com/p/CyEFUHIsD38/?img_index=1" />
          <InstagramEmbed url="https://www.instagram.com/p/C02IrVsuhGV/?img_index=1" />
          <InstagramEmbed url="https://www.instagram.com/p/C4sXgiTOqPT/?img_index=1" />
          {/* <InstagramEmbed url="https://www.instagram.com/p/C_k0-M2RWs3/" /> */}
        </div>
      </div>
    </>
  );
};
