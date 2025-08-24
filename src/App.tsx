import { Button } from "@/components/ui/button";
import {
  Activity,
  BarChart,
  DollarSign,
  FileText,
  Menu,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "./components/ui/card";
import { WhatsAppLogo } from "./components/WhatsAppLogo";
import { useEffect, useState } from "react";

function App() {
  const [isVisibleWppIcon, setIsVisibleWppIcon] = useState(false);

  const message =
    "Olá, tudo bem? Vi o site da Desertech e gostaria de receber mais informações sobre como vocês podem ajudar no meu negócio.";
  const linkZap = `https://wa.me/${
    import.meta.env.VITE_PUBLIC_ZAP
  }?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const handleScroll = () => {
      // quando passar de 400px do topo, mostra o botão
      if (window.scrollY > 400) {
        setIsVisibleWppIcon(true);
      } else {
        setIsVisibleWppIcon(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dados dos motivos (poderia vir até de uma API futuramente)
  const reasons = [
    {
      id: 1,
      icon: <DollarSign size={28} color="white" className="p-1" />,
      value: "10x",
      text: "retorno de investimento",
    },
    {
      id: 2,
      icon: <TrendingUp size={28} color="white" className="p-1" />,
      value: "95%",
      text: "clientes satisfeitos",
    },
    {
      id: 3,
      icon: <BarChart size={28} color="white" className="p-1" />,
      value: "500+",
      text: "projetos entregues",
    },
    {
      id: 4,
      icon: <Activity size={28} color="white" className="p-1" />,
      value: "24/7",
      text: "suporte ativo",
    },
  ];

  return (
    <>
      <header className="flex justify-between items-center w-full h-[72px] border border-b-gray-200 px-12">
        <div className="w-full max-w-[110px] md:max-w-[140px]">
          <img
            className="cursor-pointer"
            src="/svg/Desertech-logo.svg"
            alt="Logo"
          />
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex gap-4 text-black/70">
            <li>Home</li>
            <li>Serviços</li>
            <li>Contato</li>
          </ul>
        </nav>

        {/* Menu Mobile */}
        <Menu className="cursor-pointer block md:hidden" />

        <div className="hidden md:block">
          <Button className="cursor-pointer">Fale conosco</Button>
        </div>
      </header>

      <main>
        {/* Botão WhatsApp */}
        <a
          href={linkZap}
          target="_blank"
          rel="noopener noreferrer"
          className={`cursor-pointer fixed bottom-6 right-6 z-50 flex items-center 
          bg-[#25D366] shadow-lg justify-center w-13 h-13 rounded-full
          transition-all duration-700 ease-in-out
          ${
            isVisibleWppIcon
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }
  `}
        >
          <WhatsAppLogo />
        </a>
        {/* Hero */}
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

        <section className="question border bg-primary py-12 px-12">
          <div className="why-choose-us flex flex-col items-center md:flex-row md:items-center md:justify-between container mx-auto  md:py-8">
            <div className="max-w-[320px]">
              <h3 className="font-semibold text-center text-3xl md:text-4xl md:text-start text-foreground">
                Por que escolher a <span className="font-bold">Desertech?</span>
              </h3>
              <p className="text-sm mt-2 text-center md:text-base md:text-start">
                Conheça os números que sustentam nossa autoridade no mercado
                digital.
              </p>
            </div>

            {/* Motivos */}
            <div className="numbers mt-5 mb-12 flex w-full">
              {reasons.map((reason, index) => (
                <div
                  key={reason.id}
                  className={`flex flex-col items-center flex-1 text-center h-20
                
                ${
                  index !== reasons.length - 1
                    ? "md:border-r-2 md:border-r-black/20"
                    : ""
                }
              `}
                >
                  <div className="rounded-full bg-black">{reason.icon}</div>
                  <h4 className="text-xl font-semibold mt-4">{reason.value}</h4>
                  <p className="text-xs mt-1 md:text-base md:mt-2">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção dos Cards */}
        <section className="bg-primary/7">
          <div className="border container mx-auto px-12 py-12">
            <div className="performance flex flex-col items-center">
              <h2 className="font-bold text-5xl text-center">
                Alta performance em todas as etapas!
              </h2>
              <p className="text-center mt-3 text-xs w-full md:text-base lg:w-5/12">
                Na Desertech, oferecemos um atendimento completo para seu
                público digital! Da análise do negócio ao layout, front-end,
                você conta com uma equipe experiente que domina as principais
                tecnologias do mercado! Aliados ao uso da Inteligência
                Artificial.
              </p>
            </div>
          </div>

          {/* Cards aqui */}
          <div className="steps flex flex-wrap gap-4 container mx-auto px-12 border">
            <Card className="step-card flex-1 min-w-[380px] px-12">
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
                  <li className="list-disc list-inside">
                    Tecnologias VUE e Nuxt;
                  </li>
                  <li className="list-disc list-inside">
                    Tecnologias VUE e Nuxt;
                  </li>
                  <li className="list-disc list-inside">
                    Tecnologias VUE e Nuxt;
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="step-card flex-1 min-w-[380px] px-12">
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
                  <li className="list-disc list-inside">
                    Tecnologias VUE e Nuxt;
                  </li>
                  <li className="list-disc list-inside">
                    Tecnologias VUE e Nuxt;
                  </li>
                  <li className="list-disc list-inside">
                    Tecnologias VUE e Nuxt;
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="step-card flex-1 min-w-[380px] px-12">
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
                  <li className="list-disc list-inside">
                    Tecnologias VUE e Nuxt;
                  </li>
                  <li className="list-disc list-inside">
                    Tecnologias VUE e Nuxt;
                  </li>
                  <li className="list-disc list-inside">
                    Tecnologias VUE e Nuxt;
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="contact">
          <div>
            <h2>Transforme a sua empresa com a Desertech</h2>
            <p>Junte-se a mais de 6.000 empresas que atuam no digital.</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
