import type { LearningPackage } from "../schemas/learningPackage.schema";
import { lessonToFlashcards } from "../lib/skills/lessonToFlashcards";
import { lessonToQuiz } from "../lib/skills/lessonToQuiz";
import { lessonToStudyPlan } from "../lib/skills/lessonToStudyPlan";

export function runPlaybookLearningAgent(lessonContent: string): LearningPackage {
  const cleanContent = lessonContent.trim();
  const summary = cleanContent.length > 180 ? `${cleanContent.slice(0, 177)}...` : cleanContent;

  return {
    source: "playbook",
    metadata: {
      input_preview: cleanContent.slice(0, 120),
      generated_at: new Date().toISOString()
    },
    summary,
    flashcards: lessonToFlashcards(cleanContent),
    quiz: lessonToQuiz(cleanContent),
    study_plan: lessonToStudyPlan(cleanContent)
  };
}
