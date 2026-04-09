import { describe, expect, it } from "vitest";
import { lessonToFlashcards } from "./lessonToFlashcards";
import { lessonToQuiz } from "./lessonToQuiz";
import { lessonToStudyPlan } from "./lessonToStudyPlan";

const sample =
  "Variables represent unknown quantities. Equations balance expressions. Functions map inputs to outputs. Practice checks retention.";

describe("skill transforms", () => {
  it("creates deterministic flashcards", () => {
    const cards = lessonToFlashcards(sample);
    expect(cards.length).toBeGreaterThan(0);
    expect(cards[0].question).toContain("key idea");
  });

  it("creates deterministic quiz", () => {
    const quiz = lessonToQuiz(sample);
    expect(quiz.length).toBeGreaterThan(0);
    expect(quiz[0].options).toHaveLength(4);
    expect(quiz[0].options).toContain(quiz[0].correct);
  });

  it("creates deterministic study plan", () => {
    const plan = lessonToStudyPlan(sample);
    expect(plan.length).toBeGreaterThan(0);
    expect(plan[0].title).toBe("Session 1");
  });
});
