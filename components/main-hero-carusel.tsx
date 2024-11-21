"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselImage {
  url: string;
  title: string;
  description: string;
  alt: string;
}

const carouselImages: CarouselImage[] = [
  {
    url: "https://p0.zoon.ru/0/5/5eed4817b8276d27c73e5c82_6263e883aa0ca5.08997965.jpg",
    title: "Разработка стандарта организации (СТО)",
    description: "",
    alt: "",
  },
  {
    url: "https://avatars.mds.yandex.net/get-ydo/4012172/2a0000017d5687d4ffd4549ca1288a12deae/diploma",
    title: "Расчёт пожарного риска",
    description: "",
    alt: "",
  },
];

interface CarouselSlideProps {
  image: CarouselImage;
}

function CarouselSlide({ image }: CarouselSlideProps) {
  return (
    <div className="relative h-[60vh] rounded-2xl overflow-hidden xl:h-[50vh]">
      <img
        src={image.url}
        alt={image.alt}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {image.title}
        </h3>
        <p className="text-zinc-200 text-sm md:text-base max-w-2xl">
          {image.description}
        </p>
      </div>
    </div>
  );
}

export function MainHeroCarousel() {
  return (
    <section className="relative mt-16 mb-24 h-full min-w-[30vw] flex">
      <div className="container mx-auto px-4 max-w-7xl flex items-center min-h-[60vh] ">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index}>
                <CarouselSlide image={image} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-8 -translate-y-1/2 text-white" />
          <CarouselNext className="right-8 -translate-y-1/2 text-white" />
        </Carousel>
      </div>
    </section>
  );
}
