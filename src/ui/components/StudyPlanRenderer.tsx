import type { StudyPlanItem } from "../../schemas/studyPackage.schema";

type StudyPlanRendererProps = {
  plan: StudyPlanItem[];
};

export function StudyPlanRenderer({ plan }: StudyPlanRendererProps) {
  return (
    <section className="inspector">
      <h4 className="section-title">Study Plan</h4>
      <p className="section-kicker">Vercel AI Chat-style study plan cards with clear session blocks.</p>
      <div className="chat-thread" role="list" aria-label="Study plan sessions">
        {plan.map((item, index) => (
          <article className="chat-message chat-message-assistant" role="listitem" key={`${item.title}-${index}`}>
            <span className="chat-role">session {index + 1}</span>
            <div className="chat-part study-plan-part">
              <h5>{item.title}</h5>
              <p className="chat-text study-plan-meta">Duration: {item.duration}</p>
              <p className="chat-text">{item.objective}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
