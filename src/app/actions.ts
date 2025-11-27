'use server';

import {
  answerQuestion,
  AnswerQuestionInput,
  AnswerQuestionOutput,
} from '@/ai/flows/ai-assisted-question-answering';
import { z } from 'zod';

const formSchema = z.object({
  question: z.string().min(1),
});

export async function handleQuestion(
  values: z.infer<typeof formSchema>
): Promise<AnswerQuestionOutput> {
  const validatedInput = formSchema.parse(values);
  const result = await answerQuestion(validatedInput);
  return result;
}
