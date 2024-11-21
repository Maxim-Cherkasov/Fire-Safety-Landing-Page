"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface RiskBenefit {
  title: string;
  description: string;
}

const riskBenefits: RiskBenefit[] = [
  {
    title: "Обоснование отступлений",
    description: "Расчет пожарного риска позволяет обосновать отступления от требований нормативных документов по пожарной безопасности.",
  },
  {
    title: "Экономия средств",
    description: "Оптимизация затрат на противопожарную защиту при сохранении необходимого уровня безопасности.",
  },
  {
    title: "Профессиональный анализ",
    description: "Детальный анализ пожарной опасности объекта с учетом всех факторов риска и особенностей эксплуатации.",
  },
  {
    title: "Официальное заключение",
    description: "Предоставление официального заключения о величине пожарного риска, необходимого для надзорных органов.",
  },
];

const features = [
  "Расчет индивидуального пожарного риска",
  "Расчет социального пожарного риска",
  "Моделирование эвакуации людей",
  "Моделирование развития пожара",
  "Разработка противопожарных мероприятий",
  "Экспертиза существующих расчетов",
];

export function FireRiskSection() {
  return (
    <section className="py-24 bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 bg-clip-text text-transparent dark:from-zinc-200 dark:via-zinc-400 dark:to-zinc-200">
            Расчёт пожарного риска
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Расчет пожарного риска — это метод оценки уровня пожарной опасности объекта, позволяющий обосновать обеспечение безопасности людей при отступлении от требований нормативных документов.
          </p>
          <p className="text-lg text-muted-foreground">
            Выполняется для подтверждения соответствия объекта требованиям пожарной безопасности согласно ФЗ №123 "Технический регламент о требованиях пожарной безопасности".
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {riskBenefits.map((benefit, index) => (
            <Card key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-red-700/20 to-red-800/20 rounded-xl opacity-75" />
              <CardContent className="relative p-6 bg-background/90">
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Состав работ по расчету пожарного риска
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-red-700 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}