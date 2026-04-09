export type Flashcard = {
  question: string;
  answer: string;
};

export type QuizQuestion = {
  question: string;
  options: string[];
  correct: string;
};

export type StudyPlanItem = {
  title: string;
  duration: string;
  objective: string;
};

export type StudyPackage = {
  summary: string;
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
  study_plan: StudyPlanItem[];
};

export function isStudyPackage(value: unknown): value is StudyPackage {
  const candidate = value as StudyPackage;
  return Boolean(
    candidate &&
      typeof candidate.summary === "string" &&
      Array.isArray(candidate.flashcards) &&
      Array.isArray(candidate.quiz) &&
      Array.isArray(candidate.study_plan)
  );
}
