import { Button } from "../ui/button";

export const HomeHero = () => {
  return (
    <section className="hero flex flex-col justify-center gap-4 border md:h-[calc(100vh-200px)] container mx-auto w-full px-12 my-12">
      <div className="flex justify-center items-center border h-full ">
        <div>
          <div className="md:max-w-[620px]">
            <h1 className="font-bold text-4xl text-center md:text-start md:text-6xl">
              Gerencie seu negócio sem preocupação
            </h1>
          </div>
          <div className="mt-4 md:max-w-[520px]">
            <p className="text-sm text-center md:text-start md:text-base">
              Aliamos tecnologia, design e estratégias para impulsionar
              resultados reais — com visão, método e Somos especialistas em
              estruturar e-commerces com inteligência, precisão.
            </p>
            <Button className="px-10 py-6 cursor-pointer mt-7 w-full md:w-auto">
              Contrate um serviço
            </Button>
          </div>
        </div>
        <div className="hidden bg-yellow-100 flex-1 xl:flex xl:items-center xl:justify-center h-full">
          {/* <img
                className="block w-full h-full object-contain"
                src="/public/png/Desertech.png"
                alt=""
              /> */}
          ...
        </div>
      </div>
    </section>
  );
};
