'use client';

import { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  FileText,
  Link as LinkIcon,
  Book,
  Weight,
  Newspaper,
  File,
  Film,
  PenSquare,
  Sheet,
  NotebookPen,
  X,
  BookCopy,
} from 'lucide-react';
import {
  syllabusData,
  weightageData,
  cheatsheetData,
  handwrittenNotesData,
  videosData,
  pyqsData,
  type ResourceCategory,
  type LinkItem,
  type ResourceSubCategory,
} from '@/lib/data';

const iconMap: { [key: string]: React.ElementType } = {
  '📚': Book,
  '🎯': Weight,
  '📘': Newspaper,
  '📄': File,
  '🧠': Sheet,
  '✍️': NotebookPen,
  '🎥': Film,
  '📝': PenSquare,
  '📐': BookCopy,
  '🧮': BookCopy,
  '📊': BookCopy,
};

function filterSubCategories(
  subCategories: ResourceSubCategory[],
  query: string
): ResourceSubCategory[] {
  if (!query) return subCategories;
  return subCategories
    .map((sub) => {
      const filteredLinks = sub.links?.filter((link) =>
        link.title.toLowerCase().includes(query)
      );
      const filteredNestedSubs = sub.subCategories
        ? filterSubCategories(sub.subCategories, query)
        : [];
      const titleMatches = sub.title.toLowerCase().includes(query);

      return {
        ...sub,
        links: filteredLinks || [],
        subCategories: filteredNestedSubs,
        // Keep the subcategory if its title matches or it has content left
        _keep: titleMatches || filteredLinks?.length || filteredNestedSubs?.length,
      };
    })
    .filter((sub) => sub._keep);
}

const ResourceLink = ({ href, title }: { href: string; title: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-2 rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent/50 hover:text-accent-foreground"
  >
    <LinkIcon className="h-4 w-4 text-primary/70 group-hover:text-primary" />
    <span>{title}</span>
  </a>
);

function renderSubCategories(subCategories: ResourceSubCategory[], level: number = 0) {
  if (!subCategories || subCategories.length === 0) return null;

  const content = (
    <>
      {subCategories.map((sub, index) => (
        <div key={`${sub.title}-${index}`}>
          {sub.subCategories && sub.subCategories.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={sub.title} className="border-b-0">
                <AccordionTrigger className="rounded-md px-2 text-base hover:bg-accent/50">
                  <span className="flex items-center gap-2">
                    {sub.icon && <span>{sub.icon}</span>} {sub.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-4 border-l ml-4">
                  {renderSubCategories(sub.subCategories, level + 1)}
                  {sub.links && sub.links.length > 0 && (
                     <ul className="mt-2 space-y-1">
                      {sub.links.map((link) => (
                        <li key={link.href}><ResourceLink {...link} /></li>
                      ))}
                    </ul>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            sub.links && sub.links.length > 0 && (
              <ul className="space-y-1 pt-2">
                {sub.links.map((link) => (
                  <li key={link.href}>
                    <ResourceLink {...link} />
                  </li>
                ))}
              </ul>
            )
          )}
        </div>
      ))}
    </>
  );

  if (level > 0) {
    return <div className="space-y-2">{content}</div>;
  }
  
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {subCategories.map((sub, index) => (
        <AccordionItem key={`${sub.title}-${index}`} value={sub.title} className="rounded-lg border bg-card">
          <AccordionTrigger className="px-4 text-base">
            <span className="flex items-center gap-2">
              {sub.icon && <span>{sub.icon}</span>} {sub.title}
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-4">
             {sub.subCategories && renderSubCategories(sub.subCategories, level + 1)}
             {sub.links && (
               <ul className="mt-2 space-y-1">
                  {sub.links.map((link) => (
                    <li key={link.href}><ResourceLink {...link} /></li>
                  ))}
                </ul>
             )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function ResourceSections() {
  const [searchQuery, setSearchQuery] = useState('');
  const query = searchQuery.toLowerCase();

  const filteredSyllabus = useMemo(() => {
    if (!query) return syllabusData;
    const filteredSubCategories = filterSubCategories(syllabusData.subCategories, query);
    return { ...syllabusData, subCategories: filteredSubCategories };
  }, [query]);

  const allResources = useMemo(() => {
    const data = [cheatsheetData, handwrittenNotesData, videosData, pyqsData];
    if (!query) return data;
    return data
      .map((cat) => ({
        ...cat,
        subCategories: filterSubCategories(cat.subCategories, query),
      }))
      .filter((cat) => cat.subCategories.length > 0);
  }, [query]);


  return (
    <div>
      <div className="relative mb-8">
        <Input
          type="text"
          id="searchInput"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search notes, PDFs, videos, PYQs..."
          className="w-full pr-10 text-base"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSearchQuery('')}
            id="clearBtn"
            className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2"
          >
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {/* Syllabus Section */}
        <div id="syllabus">
          {filteredSyllabus.subCategories.length > 0 && (
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              <AccordionItem value="item-0" className="rounded-lg border bg-card/80 shadow-sm">
                <AccordionTrigger className="px-4 text-lg font-medium">
                  <span className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    {filteredSyllabus.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  {renderSubCategories(filteredSyllabus.subCategories)}
                  {filteredSyllabus.downloadLink && (
                     <div className="mt-4">
                        <ResourceLink {...filteredSyllabus.downloadLink} />
                     </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </div>

        {/* Weightage Section */}
        <div id="weightage">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-0" className="rounded-lg border bg-card/80 shadow-sm">
              <AccordionTrigger className="px-4 text-lg font-medium">
                <span className="flex items-center gap-3">
                  <Weight className="h-5 w-5 text-primary" />
                  {weightageData.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[60%]">Section</TableHead>
                        <TableHead>Approx. Weightage (%)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {weightageData.rows.map((row, index) => (
                        <TableRow key={index} className={row.isSub ? 'bg-card/50' : ''}>
                          <TableCell className={row.isSub ? 'pl-8' : ''}>{row.section}</TableCell>
                          <TableCell>{row.weightage}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{weightageData.note}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Other Resource Sections */}
        {allResources.map((category) => {
          const Icon = iconMap[category.icon] || Book;
          return (
            <div key={category.id} id={category.id}>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-0" className="rounded-lg border bg-card/80 shadow-sm">
                  <AccordionTrigger className="px-4 text-lg font-medium">
                    <span className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-primary" />
                      {category.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    {renderSubCategories(category.subCategories)}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
}
