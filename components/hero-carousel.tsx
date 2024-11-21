"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface CarouselImage {
  url: string
  title: string
  description: string
  alt: string
}

const carouselImages: CarouselImage[] = [
  {
    url: "https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?w=2070&q=80",
    title: "Мужские Премиум Стрижки",
    description: "Точные стрижки и современные стили для современного джентльмена",
    alt: "Услуга мужской премиум стрижки"
  },
  {
    url: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=2070&q=80",
    title: "Женский Стайлинг",
    description: "Создаем красивые, индивидуальные образы, подчеркивающие вашу естественную красоту",
    alt: "Услуга женского стайлинга"
  },
  {
    url: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=2070&q=80",
    title: "Детские Стрижки",
    description: "Бережный, терпеливый уход в приветливой атмосфере для наших самых юных клиентов",
    alt: "Услуга детской стрижки"
  },
  {
    url: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=2070&q=80",
    title: "Окрашивание и Мелирование",
    description: "Профессиональное окрашивание и техники создания многомерного цвета",
    alt: "Услуга окрашивания и мелирования волос"
  },
  {
    url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=2070&q=80",
    title: "Свадебные Услуги",
    description: "Роскошный свадебный стайлинг для вашего особенного дня",
    alt: "Услуга свадебного стайлинга"
  },
  {
    url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=2070&q=80",
    title: "Профессиональный Стайлинг",
    description: "Современные укладки для любого случая",
    alt: "Услуга профессионального стайлинга"
  },
  {
    url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=2070&q=80",
    title: "Премиум Обслуживание",
    description: "Премиальные услуги салона в элегантной атмосфере",
    alt: "Премиум обслуживание в салоне"
  },
  {
    url: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=2070&q=80",
    title: "Экспертный Уход",
    description: "Преданные своему делу стилисты, нацеленные на ваше удовлетворение",
    alt: "Услуга экспертного ухода за волосами"
  }
]

interface CarouselSlideProps {
  image: CarouselImage
}

function CarouselSlide({ image }: CarouselSlideProps) {
  return (
    <div className="relative h-[80vh] rounded-2xl overflow-hidden">
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
  )
}

export function HeroCarousel() {
  return (
    <section className="relative mt-16 mb-24">
      <div className="container mx-auto px-4 max-w-7xl flex items-center min-h-[80vh]">
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
  )
}