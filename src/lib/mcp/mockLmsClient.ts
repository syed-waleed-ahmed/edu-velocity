export type MockLmsMaterial = {
  id: string;
  course: string;
  lessonText: string;
};

const lmsMaterials: Record<string, MockLmsMaterial> = {
  "lms-physics-301": {
    id: "lms-physics-301",
    course: "Physics 301",
    lessonText:
      "Motion analysis depends on velocity, acceleration, and reference frames. Learners should connect equations to observed movement and validate assumptions with examples."
  },
  "lms-history-110": {
    id: "lms-history-110",
    course: "History 110",
    lessonText:
      "Historical interpretation requires primary evidence, context, and argument quality. Learners compare sources to identify bias and corroboration."
  }
};

export function getLmsMaterial(sourceId: string): MockLmsMaterial {
  return (
    lmsMaterials[sourceId] ?? {
      id: sourceId,
      course: "General Course",
      lessonText:
        "Set clear objectives, present examples, and validate understanding with a short check before advancing."
    }
  );
}
