'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';

interface Service {
  name: string;
}

interface HaircutType {
  title: string;
  description: string;
  image: string;
  services: Service[];
}

const haircutTypes: Record<string, HaircutType> = {
  men: {
    title: 'Мужские Стрижки',
    description:
      'Наши фирменные мужские стрижки сочетают классические техники с современным стайлингом для создания изысканного образа, который подходит вашей индивидуальности и образу жизни.',
    image:
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80',
    services: [
      { name: 'Классическая Мужская Стрижка' },
      { name: 'Современный Фейд' },
      { name: 'Деловой Стиль' },
      { name: 'Стрижка и Укладка Бороды' },
    ],
  },
  women: {
    title: 'Женские Стрижки',
    description:
      'Преображающие стрижки и укладки, подчеркивающие вашу естественную красоту, от классического боба до современных многослойных стрижек.',
    image:
      'https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=800&q=80',
    services: [
      { name: 'Точная Стрижка' },
      { name: 'Многослойная Укладка' },
      { name: 'Стрижки Боб и Лоб' },
      { name: 'Укладка для Особых Случаев' },
    ],
  },
  children: {
    title: 'Детские Стрижки',
    description:
      'Бережные, терпеливые услуги стрижки для детей в дружелюбной, приветливой обстановке.',
    image:
      'https://images.unsplash.com/photo-1533512930330-4ac257c86793?w=800&q=80',
    services: [
      { name: 'Первая Стрижка' },
      { name: 'Модные Стрижки для Мальчиков' },
      { name: 'Стильные Стрижки для Девочек' },
      { name: 'Семейные Пакеты' },
    ],
  },
};

interface ServiceListProps {
  services: Service[];
}

function ServiceList({ services }: ServiceListProps) {
  return (
    <ul className="grid gap-2">
      {services.map((service, index) => (
        <li key={index} className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-zinc-950 dark:bg-zinc-200" />
          <span className="text-muted-foreground">{service.name}</span>
        </li>
      ))}
    </ul>
  );
}

interface ServiceImageProps {
  image: string;
  title: string;
}

function ServiceImage({ image, title }: ServiceImageProps) {
  return (
    <Card className="overflow-hidden border-0 bg-background/80 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
      <CardContent className="p-0">
        <AspectRatio ratio={4 / 3}>
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </AspectRatio>
      </CardContent>
    </Card>
  );
}

interface ServiceContentProps {
  title: string;
  description: string;
  services: Service[];
}

function ServiceContent({ title, description, services }: ServiceContentProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="space-y-4">
        <h4 className="font-medium">Наши Услуги Включают:</h4>
        <ServiceList services={services} />
      </div>
    </div>
  );
}

export function HaircutsSection() {
  return (
    <section id="services" className="py-24 bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 bg-clip-text text-transparent dark:from-zinc-200 dark:via-zinc-400 dark:to-zinc-200">
          Наши Услуги
        </h2>

        <Tabs defaultValue="men" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700">
              <TabsTrigger 
                value="men"
                className="data-[state=active]:bg-zinc-950 data-[state=active]:text-white dark:data-[state=active]:bg-zinc-200 dark:data-[state=active]:text-zinc-950"
              >
                Мужские Стрижки
              </TabsTrigger>
              <TabsTrigger
                value="women"
                className="data-[state=active]:bg-zinc-950 data-[state=active]:text-white dark:data-[state=active]:bg-zinc-200 dark:data-[state=active]:text-zinc-950"
              >
                Женские Стрижки
              </TabsTrigger>
              <TabsTrigger
                value="children"
                className="data-[state=active]:bg-zinc-950 data-[state=active]:text-white dark:data-[state=active]:bg-zinc-200 dark:data-[state=active]:text-zinc-950"
              >
                Детские Стрижки
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(haircutTypes).map(([key, section]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <ServiceImage image={section.image} title={section.title} />
                <ServiceContent
                  title={section.title}
                  description={section.description}
                  services={section.services}
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}