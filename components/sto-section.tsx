"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface STOBenefit {
  title: string;
  description: string;
}

const stoBenefits: STOBenefit[] = [
  {
    title: "Оптимизация процессов",
    description: "Разработка СТО позволяет систематизировать и оптимизировать все процессы в области пожарной безопасности на предприятии.",
  },
  {
    title: "Соответствие требованиям",
    description: "Обеспечение полного соответствия требованиям законодательства в области пожарной безопасности.",
  },
  {
    title: "Индивидуальный подход",
    description: "Учет специфики вашего предприятия и особенностей производственных процессов при разработке стандарта.",
  },
  {
    title: "Комплексная защита",
    description: "Внедрение эффективной системы противопожарной защиты, адаптированной под ваши потребности.",
  },
];

const features = [
  "Разработка СТО по пожарной безопасности",
  "Внедрение систем управления пожарной безопасностью",
  "Регламентация процессов и процедур",
  "Разработка инструкций и регламентов",
  "Обучение персонала",
  "Аудит существующей документации",
];

export function STOSection() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 bg-clip-text text-transparent dark:from-zinc-200 dark:via-zinc-400 dark:to-zinc-200">
            Стандарт организации (СТО)
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Стандарт организации (СТО) — это нормативный документ, разрабатываемый для совершенствования производства и обеспечения качества продукции, выполнения работ и оказания услуг.
          </p>
          <p className="text-lg text-muted-foreground">
            В области пожарной безопасности СТО регламентирует все аспекты обеспечения противопожарной защиты на предприятии.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {stoBenefits.map((benefit, index) => (
            <Card key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-red-700/20 to-red-800/20 rounded-xl opacity-75" />
              <CardContent className="relative p-6 bg-background/90">
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Наши услуги по разработке СТО
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