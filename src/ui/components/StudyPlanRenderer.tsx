import type { StudyPlanItem } from "../../schemas/studyPackage.schema";

type StudyPlanRendererProps = {
  plan: StudyPlanItem[];
};

export function StudyPlanRenderer({ plan }: StudyPlanRendererProps) {
  return (
    <div>
      <h4 className="section-title">Study Plan</h4>
      <div className="table-wrap">
        <table className="data-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Duration</th>
            <th>Objective</th>
          </tr>
        </thead>
        <tbody>
          {plan.map((item, index) => (
            <tr key={`${item.title}-${index}`}>
              <td>{item.title}</td>
              <td>{item.duration}</td>
              <td>{item.objective}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
}
