import { navigationLinks } from '@/lib/data';

export function PageNav() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-primary/80 backdrop-blur-sm">
      <div className="container mx-auto flex max-w-7xl flex-wrap justify-center gap-x-4 gap-y-2 px-4 py-2 sm:gap-x-6">
        {navigationLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
