"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        toast.success(
          "Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время."
        );
        e.currentTarget.reset();
      } else {
        throw new Error("Что-то пошло не так");
      }
    } catch (error) {
      toast.error(
        "Извините, что-то пошло не так. Пожалуйста, попробуйте еще раз."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 bg-clip-text text-transparent dark:from-zinc-200 dark:via-zinc-400 dark:to-zinc-200">
            Оставьте заявку на консультацию
          </h2>
          <p className="text-lg text-muted-foreground">
            Наши специалисты свяжутся с вами в ближайшее время
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
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
                className="h-12 bg-zinc-50 dark:bg-zinc-800/90 border-2"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Ваш телефон"
                required
                className="h-12 bg-zinc-50 dark:bg-zinc-800/90 border-2"
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
      </div>
    </section>
  );
}