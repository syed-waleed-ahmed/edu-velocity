import type { Flashcard } from "../../schemas/studyPackage.schema";

function normalizeText(input: string): string[] {
  return input
    .replace(/\s+/g, " ")
    .trim()
    .split(/[.!?]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export function lessonToFlashcards(lessonContent: string): Flashcard[] {
  const sentences = normalizeText(lessonContent);
  const selected = sentences.slice(0, 5);

  return selected.map((sentence, index) => {
    const words = sentence.split(" ").filter((w) => w.length > 3);
    const keyword = words[0] ?? `Concept ${index + 1}`;

    return {
      question: `What is the key idea behind ${keyword.toLowerCase()}?`,
      answer: sentence
    };
  });
}
