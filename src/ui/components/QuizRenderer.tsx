import type { QuizQuestion } from "../../schemas/studyPackage.schema";

type QuizRendererProps = {
  quiz: QuizQuestion[];
};

export function QuizRenderer({ quiz }: QuizRendererProps) {
  return (
    <div>
      <h4 className="section-title">Quiz</h4>
      <ol className="quiz-list">
        {quiz.map((item, index) => (
          <li key={`${item.question}-${index}`} className="quiz-item">
            <div className="quiz-question">{item.question}</div>
            <ul className="quiz-options">
              {item.options.map((option) => (
                <li key={option}>
                  {option}
                  {option === item.correct ? " (correct)" : ""}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
