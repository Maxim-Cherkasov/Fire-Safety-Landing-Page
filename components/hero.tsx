"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Send } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { MainHeroCarousel } from "@/components/main-hero-carusel";
import { toast } from "sonner";
import { useState, FormEvent } from "react";

interface SocialLink {
  icon: typeof BsWhatsapp | typeof Phone | typeof Send;
  href: string;
  color: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: BsWhatsapp,
    href: "https://wa.me/1234567890",
    color: "text-emerald-500 hover:text-emerald-600",
    label: "WhatsApp",
  },
  {
    icon: Send,
    href: "https://t.me/yourusername",
    color: "text-sky-500 hover:text-sky-600",
    label: "Telegram",
  },
  {
    icon: Phone,
    href: "tel:+1234567890",
    color: "text-blue-500 hover:text-blue-600",
    label: "Позвонить",
  },
];

export function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
        e.currentTarget.reset();
      } else {
        throw new Error("Ошибка отправки");
      }
    } catch (error) {
      toast.error("Произошла ошибка. Пожалуйста, попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container flex items-center px-4 relative max-w-7xl min-h-[90vh] mx-auto md:flex sm:justify-items-center sm:w-full">
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(circle at center, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black, transparent 80%)",
        }}
      />
      <div className="absolute inset-0 bg-background/90 " />

      <div className="relative max-w-3xl pb-10 pl-10">
        <h1 className="text-6xl md:text-6xl font-bold text-gradient bg-clip-text tracking-tighter mb-8 dark:bg-white">
          Всероссийский противопожарный центр
        </h1>
        <p className="border-b-2 pb-7 text-xl md:text-2xl text-gray-800 dark:text-gray-400 mb-6 leading-relaxed">
          Разработка Специальных Технических Условий в области Пожарной
          Безопасности. Расчет пожарных рисков.
        </p>

        {/* Consultation Request Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="hidden"
            name="access_key"
            value="322cc816-d2e8-4dfb-bd3b-72b571d86eba"
          />
          <div className="flex gap-4">
            <Input
              type="text"
              name="name"
              placeholder="Ваше имя"
              required
              className="h-12 bg-white/90 dark:bg-zinc-800/90 border-2"
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Ваш телефон"
              required
              className="h-12 bg-white/90 dark:bg-zinc-800/90 border-2"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-12 px-8 bg-red-700 hover:bg-red-800 text-white"
            >
              {isSubmitting ? "Отправка..." : "Отправить"}
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="privacy"
              name="privacy"
              required
              className="rounded border-gray-300"
            />
            <label htmlFor="privacy" className="text-sm text-gray-600 dark:text-gray-400">
              Я согласен на обработку персональных данных
            </label>
          </div>
        </form>
      </div>

      <MainHeroCarousel />

      {/* Sticky Contact Navigation */}
      <div className="fixed bottom-8 right-8 z-50 flex gap-4">
        {socialLinks.map(({ icon: Icon, href, color, label }) => (
          <Button
            key={href}
            variant="ghost"
            size="icon"
            className={`h-14 w-14 rounded-full hover:bg-transparent ${color}`}
            onClick={() => window.open(href, "_blank")}
            aria-label={label}
          >
            <Icon className="h-8 w-8" />
          </Button>
        ))}
      </div>
    </div>
  );
}