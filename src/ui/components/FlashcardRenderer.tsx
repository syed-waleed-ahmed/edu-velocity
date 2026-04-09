import type { Flashcard } from "../../schemas/studyPackage.schema";

type FlashcardRendererProps = {
  flashcards: Flashcard[];
};

export function FlashcardRenderer({ flashcards }: FlashcardRendererProps) {
  return (
    <div>
      <h4 className="section-title">Flashcards</h4>
      <div className="flashcard-grid">
        {flashcards.map((card, index) => (
          <article key={`${card.question}-${index}`} className="flashcard">
            <strong>Q:</strong> {card.question}
            <p className="flashcard-answer">
              <strong>A:</strong> {card.answer}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
