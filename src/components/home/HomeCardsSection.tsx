import { Card, CardContent, CardHeader } from "../ui/card";
import { FileText } from "lucide-react";

export const HomeCardsSection = () => {
  const steps = [
    {
      title: "Produção de Conteúdo",
      description: "Implantação e migração das\nmelhores plataformas do Brasil",
      items: [
        "Tecnologias VUE e Nuxt;",
        "Tecnologias VUE e Nuxt;",
        "Tecnologias VUE e Nuxt;",
      ],
    },
    {
      title: "Produção de Conteúdo",
      description: "Implantação e migração das\nmelhores plataformas do Brasil",
      items: [
        "Tecnologias VUE e Nuxt;",
        "Tecnologias VUE e Nuxt;",
        "Tecnologias VUE e Nuxt;",
      ],
    },
    {
      title: "Produção de Conteúdo",
      description: "Implantação e migração das\nmelhores plataformas do Brasil",
      items: [
        "Tecnologias VUE e Nuxt;",
        "Tecnologias VUE e Nuxt;",
        "Tecnologias VUE e Nuxt;",
      ],
    },
  ];

  return (
    <section className="bg-primary/7 py-16 md:py-32">
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
          <Card key={index} className="step-card min-w-[320px] px-6 md:px-12">
            <CardHeader className="mt-4">
              <div className="step-icon mb-3">
                <FileText size={32} color="#5995ED" />
              </div>
              <div className="step-title">
                <h2 className="text-2xl md:text-3xl font-bold">{step.title}</h2>
              </div>
            </CardHeader>
            <CardContent className="step-description mb-6">
              <div className="text-sm whitespace-pre-line">
                {step.description}
              </div>
              <ul className="flex text-sm flex-col gap-2 mt-3">
                {step.items.map((item, i) => (
                  <li key={i} className="list-disc list-inside">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
