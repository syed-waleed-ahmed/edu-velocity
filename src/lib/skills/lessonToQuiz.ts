import type { QuizQuestion } from "../../schemas/studyPackage.schema";

function extractKeywords(content: string): string[] {
  const seen = new Set<string>();
  const cleaned = content.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
  const tokens = cleaned.split(/\s+/).filter((token) => token.length >= 5);

  for (const token of tokens) {
    if (!seen.has(token)) {
      seen.add(token);
    }
    if (seen.size >= 4) break;
  }

  return Array.from(seen);
}

export function lessonToQuiz(lessonContent: string): QuizQuestion[] {
  const keywords = extractKeywords(lessonContent);
  const fallback = ["learning", "practice", "feedback", "reflection"];
  const basis = keywords.length > 0 ? keywords : fallback;

  return basis.slice(0, 4).map((word, index) => {
    const correct = `The lesson links ${word} to measurable learning outcomes.`;
    return {
      question: `Which statement best matches the lesson treatment of ${word}?`,
      options: [
        correct,
        `The lesson states ${word} should be ignored after instruction starts.`,
        `The lesson describes ${word} as unrelated to student progress.`,
        `The lesson claims ${word} only matters at final exams.`
      ],
      correct
    };
  });
}
