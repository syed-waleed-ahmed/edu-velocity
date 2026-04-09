export type MockMaterial = {
  id: string;
  title: string;
  content: string;
};

const driveMaterials: Record<string, MockMaterial> = {
  "drive-math-101": {
    id: "drive-math-101",
    title: "Algebra Foundations",
    content:
      "Variables represent unknown quantities. Equations balance two expressions. Functions map one input to one output. Practice with substitution and graph interpretation improves retention."
  },
  "drive-bio-201": {
    id: "drive-bio-201",
    title: "Cell Systems",
    content:
      "Cells contain organelles with specific roles. The nucleus stores genetic information. Mitochondria support energy transfer. Comparative diagrams help learners connect structure and function."
  }
};

export function getDriveMaterial(sourceId: string): MockMaterial {
  return (
    driveMaterials[sourceId] ?? {
      id: sourceId,
      title: "General Lesson Document",
      content:
        "Learning goals should be explicit, practice should be staged, and feedback should guide the next action."
    }
  );
}
