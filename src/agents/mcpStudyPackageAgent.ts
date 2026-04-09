import type { LearningPackage } from "../schemas/learningPackage.schema";
import { getDriveMaterial } from "../lib/mcp/mockDriveClient";
import { getLmsMaterial } from "../lib/mcp/mockLmsClient";
import { lessonToFlashcards } from "../lib/skills/lessonToFlashcards";
import { lessonToQuiz } from "../lib/skills/lessonToQuiz";
import { lessonToStudyPlan } from "../lib/skills/lessonToStudyPlan";

export type SourceProvider = "drive" | "lms";

export function runMcpStudyPackageAgent(sourceIdentifier: string, provider: SourceProvider): LearningPackage {
  const material = provider === "drive" ? getDriveMaterial(sourceIdentifier) : getLmsMaterial(sourceIdentifier);
  const content = "content" in material ? material.content : material.lessonText;
  const summary = `Imported from ${provider.toUpperCase()}: ${content.slice(0, 140)}${content.length > 140 ? "..." : ""}`;

  return {
    source: "mcp",
    metadata: {
      input_preview: `${provider}:${sourceIdentifier}`,
      generated_at: new Date().toISOString()
    },
    summary,
    flashcards: lessonToFlashcards(content),
    quiz: lessonToQuiz(content),
    study_plan: lessonToStudyPlan(content)
  };
}
