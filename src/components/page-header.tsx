import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function PageHeader() {
  const logo = PlaceHolderImages.find((img) => img.id === 'iit-kgp-logo');

  return (
    <header className="bg-card shadow-md">
      <div className="container mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6 text-center sm:flex-row sm:text-left">
        {logo && (
          <Image
            src={logo.imageUrl}
            alt={logo.description}
            width={80}
            height={80}
            className="rounded-full"
            data-ai-hint={logo.imageHint}
          />
        )}
        <div>
          <h1 className="font-headline text-3xl font-bold text-primary">
            GATE Notes Portal - Mining Engineering
          </h1>
          <p className="mt-1 text-muted-foreground">
            Chapter-wise Notes | Topic-wise PDFs | Video Lectures | Solved PYQs
          </p>
        </div>
      </div>
    </header>
  );
}
