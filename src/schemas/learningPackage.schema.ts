import type { Flashcard, QuizQuestion, StudyPlanItem, StudyPackage } from "./studyPackage.schema";

export type LearningPackage = StudyPackage & {
  source: "playbook" | "mcp";
  metadata: {
    input_preview: string;
    generated_at: string;
  };
};

export type {
  Flashcard,
  QuizQuestion,
  StudyPlanItem,
  StudyPackage
};
