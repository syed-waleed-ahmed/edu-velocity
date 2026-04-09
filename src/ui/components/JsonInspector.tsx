import type { ReactNode } from "react";

type JsonInspectorProps = {
  title: string;
  data: unknown;
  footer?: ReactNode;
};

export function JsonInspector({ title, data, footer }: JsonInspectorProps) {
  return (
    <section className="inspector">
      <h4 className="section-title">{title}</h4>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
      {footer}
    </section>
  );
}
