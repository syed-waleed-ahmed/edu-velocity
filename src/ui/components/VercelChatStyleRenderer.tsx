import type { LearningPackage } from "../../schemas/learningPackage.schema";

type VercelChatStyleRendererProps = {
  output: LearningPackage;
};

export function VercelChatStyleRenderer({ output }: VercelChatStyleRendererProps) {
  return (
    <section className="inspector">
      <h4 className="section-title">Vercel AI Chat-style Renderer</h4>
      <p className="section-kicker">Message-part layout showing the same structured output as chat UI blocks.</p>

      <div className="chat-thread" role="log" aria-label="Prototype chat transcript">
        <article className="chat-message chat-message-user" aria-label="User message">
          <span className="chat-role">user</span>
          <p className="chat-text">Create a learning package from the supplied lesson content.</p>
        </article>

        <article className="chat-message chat-message-assistant" aria-label="Assistant message">
          <span className="chat-role">assistant</span>
          <div className="chat-part">
            <h5>summary</h5>
            <p className="chat-text">{output.summary}</p>
          </div>
          <div className="chat-part">
            <h5>flashcards</h5>
            <p className="chat-text">{output.flashcards.length} cards generated</p>
          </div>
          <div className="chat-part">
            <h5>quiz</h5>
            <p className="chat-text">{output.quiz.length} questions generated</p>
          </div>
          <div className="chat-part">
            <h5>study_plan</h5>
            <p className="chat-text">{output.study_plan.length} study sessions generated</p>
          </div>
        </article>
      </div>
    </section>
  );
}
