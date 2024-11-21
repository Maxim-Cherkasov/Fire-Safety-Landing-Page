"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface ServiceOffer {
  title: string;
  description: string;
}

const serviceOffers: ServiceOffer[] = [
  {
    title: "Разработка СТУ",
    description: "Разработка специальных технических условий по пожарной безопасности для объектов, не соответствующих действующим нормам.",
  },
  {
    title: "Расчет пожарного риска",
    description: "Выполнение расчетов пожарного риска для подтверждения условий соответствия объекта требованиям пожарной безопасности.",
  },
  {
    title: "Экспертное сопровождение",
    description: "Полное сопровождение процесса согласования СТУ в МЧС России.",
  },
  {
    title: "Консультации",
    description: "Профессиональные консультации по вопросам пожарной безопасности и нормативным требованиям.",
  },
];

const benefits = [
  "Большой штат экспертов и расчетчиков",
  "Уникальность решений",
  "Несколько вариантов заказчику на выбор",
  "Оптимальные цены",
  "Работаем по всей России",
  "Гарантия согласования",
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 bg-clip-text text-transparent dark:from-zinc-200 dark:via-zinc-400 dark:to-zinc-200">
            Специальные технические условия (СТУ)
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            СТУ — это документ, содержащий нормативные требования для проектирования, когда отсутствуют нормы или их недостаточно.
          </p>
          <p className="text-lg text-muted-foreground">
            СТУ бывают 4-х видов: в части строительной, промышленной, сейсмической и пожарной безопасности. В данном случае речь идет о СТУ по пожарной безопасности.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {serviceOffers.map((offer, index) => (
            <Card key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-red-700/20 to-red-800/20 rounded-xl opacity-75" />
              <CardContent className="relative p-6 bg-background/90">
                <h3 className="text-xl font-semibold mb-3">{offer.title}</h3>
                <p className="text-muted-foreground">{offer.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Наши преимущества
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-red-700" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}