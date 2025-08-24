import { Card, CardContent, CardHeader } from "../ui/card";
import { FileText } from "lucide-react";
export const HomeCardsSection = () => {
  return (
    <section className="bg-primary/7">
      {/* Performance */}
      <div className="container mx-auto my-12 px-12 py-12">
        <div className="performance flex flex-col items-center">
          <h2 className="font-bold text-5xl text-center">
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
      <div className="steps flex justify-center items-center flex-wrap gap-4 container mx-auto px-12">
        <Card className="step-card min-w-[380px] px-12">
          <CardHeader className="mt-4">
            <div className="step-icon mb-3">
              <FileText size={32} color="#5995ED" />
            </div>
            <div className="step-title">
              <h2 className="text-3xl font-bold">Produção de Conteúdo</h2>
            </div>
          </CardHeader>
          <CardContent className="step-description mb-6">
            <div>
              Implantação e migração das
              <br />
              melhores plataformas do Brasil
            </div>
            <ul className="flex flex-col gap-2 mt-3">
              <li className="list-disc list-inside">Tecnologias VUE e Nuxt;</li>
              <li className="list-disc list-inside">Tecnologias VUE e Nuxt;</li>
              <li className="list-disc list-inside">Tecnologias VUE e Nuxt;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="step-card min-w-[380px] px-12">
          <CardHeader className="mt-4">
            <div className="step-icon mb-3">
              <FileText size={32} color="#5995ED" />
            </div>
            <div className="step-title">
              <h2 className="text-3xl font-bold">Produção de Conteúdo</h2>
            </div>
          </CardHeader>
          <CardContent className="step-description mb-6">
            <div>
              Implantação e migração das
              <br />
              melhores plataformas do Brasil
            </div>
            <ul className="flex flex-col gap-2 mt-3">
              <li className="list-disc list-inside">Tecnologias VUE e Nuxt;</li>
              <li className="list-disc list-inside">Tecnologias VUE e Nuxt;</li>
              <li className="list-disc list-inside">Tecnologias VUE e Nuxt;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="step-card min-w-[380px] px-12">
          <CardHeader className="mt-4">
            <div className="step-icon mb-3">
              <FileText size={32} color="#5995ED" />
            </div>
            <div className="step-title">
              <h2 className="text-3xl font-bold">Produção de Conteúdo</h2>
            </div>
          </CardHeader>
          <CardContent className="step-description mb-6">
            <div>
              Implantação e migração das
              <br />
              melhores plataformas do Brasil
            </div>
            <ul className="flex flex-col gap-2 mt-3">
              <li className="list-disc list-inside">Tecnologias VUE e Nuxt;</li>
              <li className="list-disc list-inside">Tecnologias VUE e Nuxt;</li>
              <li className="list-disc list-inside">Tecnologias VUE e Nuxt;</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
