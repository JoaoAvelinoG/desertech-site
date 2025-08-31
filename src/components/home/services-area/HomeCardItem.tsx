import type { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "../../ui/card";

import { type StepType } from "@/data/mockedSteps";

type Props = {
  index: number;
  step: StepType;
};

export const HomeCardItem = ({ index, step }: Props) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 auto-rows-fr">
      <Card
        key={index}
        className="flex flex-col justify-between max-w-[330px] h-[400px] w-full px-6 md:px-12"
      >
        <CardHeader className="mt-4">
          <div className="step-icon mb-3">{step.icon && <step.icon />}</div>
          <h2 className="text-2xl md:text-3xl font-bold">{step.title}</h2>
        </CardHeader>

        <CardContent className="step-description mb-6 flex flex-col flex-1 ">
          <div className="text-sm whitespace-pre-line flex-1">
            {step.description}
          </div>
          <ul className="flex flex-col gap-2 mt-3 text-sm">
            {step.items.map((item: ReactNode, i: number) => (
              <li key={i} className="list-disc list-inside">
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
