"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const categories = {
  men: {
    title: "Men's Cuts",
    description:
      "Precision grooming and contemporary styles tailored to the modern gentleman. Our expert barbers blend traditional techniques with current trends.",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1200&q=80",
    styles: [
      "Classic Fade with Textured Top",
      "Executive Contour Cut",
      "Modern Slick Back",
      "Refined Undercut",
    ],
  },
  women: {
    title: "Women's Styles",
    description:
      "Expertly crafted cuts that frame your face and complement your lifestyle, from elegant bobs to flowing layers.",
    image:
      "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=1200&q=80",
    styles: [
      "Layered Long Cut",
      "Precision Bob",
      "Textured Pixie",
      "Face-Framing Layers",
    ],
  },
  children: {
    title: "Kids' Cuts",
    description:
      "Gentle, patient styling for our youngest clients, creating fun and manageable looks in a comfortable environment.",
    image:
      "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=1200&q=80",
    styles: [
      "Classic Kids' Cut",
      "Modern Bowl Cut",
      "Textured Crop",
      "Easy Maintenance Trim",
    ],
  },
};

export function HaircutCategories() {
  return (
    <section className="py-24 bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 bg-clip-text text-transparent dark:from-zinc-100 dark:via-zinc-400 dark:to-zinc-100">
          Specialized Services
        </h2>

        <Tabs defaultValue="men" className="w-full">
          <TabsList className="w-full max-w-2xl mx-auto mb-12 h-14 bg-white dark:bg-zinc-900/50 border-2 border-zinc-200 dark:border-zinc-800 rounded-full grid grid-cols-3 p-1">
            {Object.keys(categories).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="rounded-full text-base capitalize data-[state=active]:bg-zinc-950 data-[state=active]:text-white dark:data-[state=active]:bg-zinc-200 dark:data-[state=active]:text-zinc-950"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(categories).map(([key, category]) => (
            <TabsContent
              key={key}
              value={key}
              className="focus-visible:outline-none"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-zinc-200 via-transparent to-zinc-200 dark:from-zinc-800 dark:to-zinc-800 rounded-2xl opacity-75" />
                  <Card className="relative border-0 rounded-xl overflow-hidden bg-background/80 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <AspectRatio ratio={4 / 3}>
                        <img
                          src={category.image}
                          alt={category.title}
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 bg-clip-text text-transparent dark:from-zinc-100 dark:via-zinc-400 dark:to-zinc-100">
                      {category.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {category.styles.map((style, index) => (
                      <Card
                        key={index}
                        className="border-2 border-zinc-100 dark:border-zinc-800/50"
                      >
                        <CardContent className="p-4">
                          <p className="font-medium">{style}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
