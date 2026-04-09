import type { StudyPlanItem } from "../../schemas/studyPackage.schema";

export function lessonToStudyPlan(lessonContent: string): StudyPlanItem[] {
  const chunks = lessonContent
    .split(/\n+/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .slice(0, 4);

  const defaults = chunks.length > 0 ? chunks : ["Review lesson summary", "Practice core concepts", "Check understanding", "Plan next revision"];

  return defaults.map((chunk, index) => ({
    title: `Session ${index + 1}`,
    duration: `${30 + index * 10} minutes`,
    objective: chunk.length > 90 ? `${chunk.slice(0, 87)}...` : chunk
  }));
}
