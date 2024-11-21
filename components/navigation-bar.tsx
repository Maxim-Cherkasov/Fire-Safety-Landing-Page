"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

interface NavigationLink {
  href: string;
  label: string;
}

const navigationLinks: NavigationLink[] = [
  { href: "#testimonials", label: "Отзывы" },
  { href: "#services", label: "Услуги" },
];

function scrollToSection(sectionId: string, onClose?: () => void) {
  if (sectionId.startsWith("#")) {
    window.location.href = "/" + sectionId;
    if (onClose) {
      onClose();
    }
  }
}

function NavigationLinks({
  onClose,
  isMobile = false,
}: {
  onClose?: () => void;
  isMobile?: boolean;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {navigationLinks.map(({ href, label }) => (
        <Button
          key={href}
          variant="ghost"
          className={`${
            isMobile
              ? "w-full justify-start text-lg text-zinc-800 hover:text-zinc-950 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:text-white dark:hover:bg-zinc-800"
              : "text-sm font-medium text-white hover:text-zinc-200 dark:text-zinc-200 dark:hover:text-white"
          }`}
          onClick={() => {
            if (!isHomePage) {
              window.location.href = "/" + href;
            } else {
              scrollToSection(href, onClose);
            }
          }}
        >
          {label}
        </Button>
      ))}
    </>
  );
}

function BrandLogo() {
  return (
    <Link href="/" className="flex items-center">
      <img
        className="h-6 w-6 bg-white"
        src="https://img.icons8.com/?size=100&id=OWNMewyfffcK&format=png&color=000000"
        alt="Brand Logo"
      />
    </Link>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="opacity-0"
        aria-hidden="true"
      >
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-zinc-50" />
      ) : (
        <Moon className="h-5 w-5 text-zinc-50" />
      )}
    </Button>
  );
}

export function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow bg-nav text-white ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between max-w-7xl">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:text-zinc-200"
                aria-label="Открыть меню навигации"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] bg-white dark:bg-zinc-900"
            >
              <SheetTitle className="text-zinc-800 dark:text-zinc-200">
                Меню Навигации
              </SheetTitle>
              <nav className="flex flex-col gap-2 mt-8">
                <NavigationLinks onClose={handleClose} isMobile={true} />
              </nav>
            </SheetContent>
          </Sheet>

          <BrandLogo />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <NavigationLinks />
          <a 
            href="tel:+74951234567" 
            className="flex items-center gap-2 text-white hover:text-zinc-200"
          >
            <Phone className="h-4 w-4" />
            <span>+7 (495) 123-45-67</span>
          </a>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}