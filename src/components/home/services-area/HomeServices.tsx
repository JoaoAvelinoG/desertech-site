import { steps } from "@/data/mockedSteps";
import { HomeCardItem } from "./HomeCardItem";
import type { Ref } from "react";

type Props = {
  sectionRef: Ref<HTMLElement> | undefined;
};

export const HomeServices = ({ sectionRef }: Props) => {
  return (
    <section ref={sectionRef} className="bg-primary/7 py-16 md:py-32">
      {/* Performance */}
      <div className="container mx-auto mb-12 px-6 md:px-12 py-12">
        <div className="performance flex flex-col items-center">
          <h2 className="font-bold text-4xl md:text-5xl text-center">
            Alta performance em todas as etapas!
          </h2>
          <p className="text-center mt-3 text-xs w-full md:text-base lg:w-5/12">
            Na Desertech, oferecemos um atendimento completo para seu público
            digital! Da análise do negócio ao layout, front-end, você conta com
            uma equipe experiente que domina as principais tecnologias do
            mercado! Aliados ao uso da Inteligência Artificial.
          </p>
        </div>
      </div>

      {/* Cards aqui */}
      <div className="flex justify-center items-center flex-wrap gap-4 mx-auto px-12">
        {steps.map((step, index) => (
          <HomeCardItem key={index} step={step} index={index} />
        ))}
      </div>
    </section>
  );
};
