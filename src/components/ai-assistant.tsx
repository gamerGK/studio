'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CornerDownLeft, Loader2, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { handleQuestion } from '@/app/actions';
import { FormattedAnswer } from './formatted-answer';

const formSchema = z.object({
  question: z.string().min(10, 'Please ask a more detailed question.'),
});

export function AiAssistant() {
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: '',
    },
  });

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
      <Card className="overflow-hidden bg-gradient-to-br from-card to-secondary">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Sparkles className="h-8 w-8 text-accent" />
            <CardTitle className="font-headline text-2xl text-primary">
              AI Mining Expert
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground">
            Have a question about mining engineering? Ask our AI assistant, powered by Gemini.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormControl>
                        <Input
                          placeholder="e.g., Explain the principal stresses in rock mechanics..."
                          className="pr-20"
                          {...field}
                        />
                      </FormControl>
                      <Button
                        type="submit"
                        size="sm"
                        className="absolute right-1 top-1/2 -translate-y-1/2"
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
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>

          {isLoading && (
            <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Thinking...</span>
            </div>

          )}

          {answer && (
            <div className="prose prose-sm mt-6 max-w-none rounded-lg border bg-background p-4">
              <h3 className="text-foreground">Answer:</h3>
              <FormattedAnswer jsonString={answer} />
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
