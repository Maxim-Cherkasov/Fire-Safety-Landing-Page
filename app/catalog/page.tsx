import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CatalogPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 bg-clip-text text-transparent dark:from-zinc-200 dark:via-zinc-400 dark:to-zinc-200">
          Каталог
        </h1>
        <Button asChild>
          <Link href="/">Close</Link>
        </Button>
      </div>
      
      <p className="text-lg text-muted-foreground">
        Просмотрите наш каталог продукции и услуг.
      </p>
    </div>
  )
}