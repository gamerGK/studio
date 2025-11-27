import Image from 'next/image';
import { Linkedin } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Icons } from './icons';

export function PageFooter() {
  const creatorPhoto = PlaceHolderImages.find((img) => img.id === 'creator-photo');

  return (
    <footer className="mt-16 bg-card">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-12 md:grid-cols-2">
        <div className="feedback-section">
          <h2 className="mb-3 font-headline text-2xl font-bold text-primary">💬 Feedback</h2>
          <p className="mb-6 text-muted-foreground">
            Help us improve! Share your feedback, suggest better notes, or contribute new
            resources.
          </p>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="https://forms.gle/g1e5ePNvLZhp2css5" target="_blank">
              Submit Feedback
            </a>
          </Button>
        </div>

        <div className="credit-section">
          <Card className="flex flex-col items-center p-6 text-center shadow-lg sm:flex-row sm:text-left">
            {creatorPhoto && (
              <Image
                src={creatorPhoto.imageUrl}
                alt={creatorPhoto.description}
                width={100}
                height={100}
                className="h-24 w-24 flex-shrink-0 rounded-full border-4 border-accent object-cover"
                data-ai-hint={creatorPhoto.imageHint}
              />
            )}
            <div className="mt-4 sm:ml-6 sm:mt-0">
              <h3 className="text-xl font-bold">Gaurav Kumar</h3>
              <p className="text-sm text-muted-foreground">B.Tech Final Year | 21MI31035</p>
              <p className="text-sm text-muted-foreground">Department of Mining Engineering</p>
              <Separator className="my-3" />
              <div className="flex items-center justify-center gap-4 sm:justify-start">
                <a
                  href="https://www.linkedin.com/in/gauravk8271"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/__g.a.u.r.a.v.__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icons.instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </footer>
  );
}
