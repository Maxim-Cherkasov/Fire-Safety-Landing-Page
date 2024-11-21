"use client";

import { useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface ContactInfo {
  text: string;
  href?: string;
}

const contactInfo: ContactInfo[] = [
  {
    text: "+7 (495) 123-4567",
    href: "tel:+74951234567",
  },
  {
    text: "info@firesafety.ru",
    href: "mailto:info@firesafety.ru",
  },
  {
    text: "г. Москва, ул. Пожарная, 123",
  },
];

function BusinessHours() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Режим работы</h3>
      <div className="flex items-start gap-3 text-zinc-400">
        <div className="space-y-1 text-sm">
          <p>Понедельник - Пятница: 9:00 - 18:00</p>
          <p>Суббота - Воскресенье: Выходной</p>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Контактная информация</h3>
      <div className="space-y-3">
        {contactInfo.map(({ text, href }) => (
          <div key={text} className="flex items-center gap-3 text-zinc-400">
            {href ? (
              <a
                href={href}
                className="text-sm hover:text-zinc-300 transition-colors"
              >
                {text}
              </a>
            ) : (
              <span className="text-sm">{text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function BrandSection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <span className="text-xl font-semibold tracking-tight">Всероссийский противопожарный центр</span>
      </div>
      <p className="text-zinc-400 text-sm leading-relaxed">
        Профессиональные услуги в области пожарной безопасности: разработка СТУ,
        расчет пожарных рисков и экспертное сопровождение проектов.
      </p>
    </div>
  );
}

function Map() {
  const mapInitialized = useRef<boolean>(false);

  useEffect(() => {
    if (mapInitialized.current) return;

    if (!document.querySelector('script[src*="api-maps.yandex.ru"]')) {
      const script = document.createElement("script");
      script.src =
        "https://api-maps.yandex.ru/2.1/?apikey=your-api-key&lang=ru_RU";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        // @ts-ignore - Yandex Maps types not available
        ymaps.ready(() => {
          // @ts-ignore
          new ymaps.Map("ymap", {
            center: [55.7558, 37.6173], // Moscow coordinates
            zoom: 15,
            controls: ["zoomControl", "fullscreenControl"],
          });
        });
      };
    }

    mapInitialized.current = true;

    return () => {
      mapInitialized.current = false;
    };
  }, []);

  return (
    <div className="max-w-[1024px] mx-auto w-full h-[300px] rounded-xl overflow-hidden bg-zinc-900">
      <div id="ymap" className="w-full h-full" />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-200">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 gap-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <BrandSection />
            <BusinessHours />
            <ContactSection />
          </div>

          <Map />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-zinc-400">
              © {new Date().getFullYear()} Всероссийский противопожарный центр. Все права защищены.
            </div>

            <div className="flex gap-8 text-sm text-zinc-400">
              <a href="#" className="hover:text-zinc-200 transition-colors">
                Политика Конфиденциальности
              </a>
              <a href="#" className="hover:text-zinc-200 transition-colors">
                Условия Использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}