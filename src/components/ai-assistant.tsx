'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CornerDownLeft, Loader2, Sparkles, Image as ImageIcon, X } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { handleQuestion } from '@/app/actions';
import { FormattedAnswer } from './formatted-answer';

const formSchema = z.object({
  question: z.string().min(10, 'Please ask a more detailed question.'),
  photoDataUri: z.string().optional(),
});

export function AiAssistant() {
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: '',
      photoDataUri: undefined,
    },
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUri = reader.result as string;
        setImagePreview(dataUri);
        form.setValue('photoDataUri', dataUri);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const removeImage = () => {
    setImagePreview(null);
    form.setValue('photoDataUri', undefined);
    if(fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAnswer('');
    try {
      const result = await handleQuestion(values);
      if (result.answer) {
        setAnswer(result.answer);
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Failed to get an answer. Please try again.',
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'An unexpected error occurred. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-assistant" className="mb-12">
      <Card className="overflow-hidden bg-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Sparkles className="h-8 w-8 text-primary" />
            <CardTitle className="font-headline text-2xl text-primary">
              Mining chat bot for GATE Aspirants
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground">
            Have a question about mining engineering? Ask our AI assistant, powered by Gemini. You can also upload an image for context.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {imagePreview && (
                 <div className="relative w-40 h-40">
                  <Image src={imagePreview} alt="Selected image" layout="fill" className="rounded-md object-cover" />
                  <Button variant="destructive" size="icon" className="absolute top-1 right-1 h-6 w-6" onClick={removeImage}>
                    <X className="h-4 w-4"/>
                  </Button>
                 </div>
              )}
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormControl>
                        <Input
                          placeholder="e.g., Explain the principal stresses in rock mechanics..."
                          className="pr-40"
                          {...field}
                        />
                      </FormControl>
                      <div className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        <Button
                          type="button"
                          size="sm"
                          variant="ghost"
                          onClick={() => fileInputRef.current?.click()}
                          disabled={isLoading}
                        >
                          <ImageIcon className="mr-2 h-4 w-4" />
                          Add Image
                        </Button>
                        <Button
                          type="submit"
                          size="sm"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <>
                              Ask <CornerDownLeft className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormControl>
                  <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} className="hidden" />
               </FormControl>
            </form>
          </Form>

          {isLoading && (
            <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Thinking...</span>
            </div>

          )}

          {answer && (
            <div className="mt-6 rounded-lg border bg-background p-4">
              <h3 className="text-foreground">Answer:</h3>
              <FormattedAnswer content={answer} />
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
