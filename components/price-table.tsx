"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Service {
  name: string;
  price: string;
  description: string;
}

const services: Service[] = [
  {
    name: "Женская Стрижка",
    price: "4500₽",
    description: "Включает консультацию, мытье, стрижку и укладку",
  },
  {
    name: "Мужская Стрижка",
    price: "3000₽",
    description: "Точная стрижка с укладкой",
  },
  {
    name: "Окрашивание и Мелирование",
    price: "9000₽",
    description: "Полное окрашивание или частичное/полное мелирование",
  },
  {
    name: "Укладка и Стайлинг",
    price: "3500₽",
    description: "Профессиональная сушка и укладка",
  },
  {
    name: "Уход за Волосами",
    price: "6000₽",
    description: "Глубокое кондиционирование и восстанавливающий уход",
  },
  {
    name: "Свадебная Укладка",
    price: "11000₽",
    description: "Полный свадебный дизайн прически",
  },
];

function TableTitle() {
  return (
    <div className="p-6 border-b">
      <h3 className="text-xl font-semibold bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent dark:from-zinc-100 dark:via-zinc-400 dark:to-zinc-100">
        Меню Услуг
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Выберите из нашего спектра профессиональных услуг
      </p>
    </div>
  );
}

function ServiceRow({ service }: { service: Service }) {
  return (
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">{service.name}</TableCell>
      <TableCell className="text-muted-foreground">
        {service.description}
      </TableCell>
      <TableCell className="text-right font-semibold">
        {service.price}
      </TableCell>
    </TableRow>
  );
}

export function PriceTable() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-element dark:from-zinc-800 dark:to-zinc-800 rounded-xl  " />
      <div className="relative rounded-xl border bg-background/80 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
        <TableTitle />
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[300px] font-semibold">Услуга</TableHead>
              <TableHead className="font-semibold">Описание</TableHead>
              <TableHead className="text-right font-semibold w-[100px]">
                Цена
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((service) => (
              <ServiceRow key={service.name} service={service} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
