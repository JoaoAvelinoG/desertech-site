import { Activity, BarChart, DollarSign, TrendingUp } from "lucide-react";

export const HomeDivider = () => {
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
    <section className="question border bg-primary py-12 px-4 md:px-12">
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
              <p className="text-xs mt-1 md:text-base md:mt-2">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
