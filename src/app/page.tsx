import { PageHeader } from '@/components/page-header';
import { PageNav } from '@/components/page-nav';
import { AiAssistant } from '@/components/ai-assistant';
import { ResourceSections } from '@/components/resource-sections';
import { PageFooter } from '@/components/page-footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PageHeader />
      <PageNav />
      <main className="flex-grow">
        <div className="container mx-auto max-w-7xl px-4 py-8">
          <AiAssistant />
          <ResourceSections />
        </div>
      </main>
      <PageFooter />
    </div>
  );
}
