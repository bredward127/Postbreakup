"use client";

import Link from "next/link";
import { useState } from "react";

// weight is added to the score when the answer matches `risky`.
const QUESTIONS = [
  { q: "Is the message about something practical, like belongings, bills or kids?", risky: false, weight: 0, practical: true },
  { q: "Is it late at night, or have you been drinking?", risky: true, weight: 2 },
  { q: "Are you hoping for a particular reply?", risky: true, weight: 2 },
  { q: "Would you be okay if they never replied?", risky: false, weight: 2 },
  { q: "Have you messaged them in the last week without a reply you liked?", risky: true, weight: 2 },
  { q: "Have you talked to anyone else about how you feel today?", risky: false, weight: 1 },
];

export default function Quiz() {
  const [answers, setAnswers] = useState<boolean[]>([]);
  const i = answers.length;
  const done = i === QUESTIONS.length;

  let score = 0;
  let practical = false;
  answers.forEach((a, k) => {
    const Q = QUESTIONS[k];
    if (Q.practical) practical = a;
    else if (a === Q.risky) score += Q.weight;
  });

  const result = practical && score <= 2 ? "practical" : score >= 4 ? "wait" : "sleep";

  return (
    <div className="tool">
      {!done ? (
        <>
          <p className="quiz-progress">
            Question {i + 1} of {QUESTIONS.length}
          </p>
          <p className="quiz-q">{QUESTIONS[i].q}</p>
          <div className="tool-row">
            <button type="button" className="tool-btn primary" onClick={() => setAnswers([...answers, true])}>
              Yes
            </button>
            <button type="button" className="tool-btn" onClick={() => setAnswers([...answers, false])}>
              No
            </button>
          </div>
        </>
      ) : (
        <div aria-live="polite">
          {result === "practical" && (
            <>
              <p className="result-h">A short, practical message is fine.</p>
              <p>
                Keep it to the logistics, write it calmly, send it once, and don&apos;t add anything personal. If it
                turns into a conversation, it&apos;s okay to step back. See{" "}
                <Link href="/guides/how-to-get-your-stuff-back-from-your-ex">message templates for belongings</Link>.
              </p>
            </>
          )}
          {result === "sleep" && (
            <>
              <p className="result-h">Sleep on it. Decide tomorrow.</p>
              <p>
                Nothing about this message needs to happen tonight. Write it somewhere private instead, and read it again
                in the morning. If you still want to send it then, you&apos;ll be deciding with a clearer head.
              </p>
            </>
          )}
          {result === "wait" && (
            <>
              <p className="result-h">Don&apos;t send it right now.</p>
              <p>
                Your answers suggest this message is more about relief than about what you actually want, and it&apos;s
                likely to leave you feeling worse. Put the phone in another room, write the message on paper, and talk to
                someone else tonight. Try the{" "}
                <Link href="/guides/before-you-text-your-ex-checklist">6-question checklist</Link> if the urge comes back.
              </p>
            </>
          )}
          <div className="tool-row">
            <button type="button" className="tool-btn" onClick={() => setAnswers([])}>
              Start again
            </button>
          </div>
          <p className="fr-note" style={{ marginTop: 14 }}>
            This is a reflection tool, not advice about your specific situation. If you feel unsafe, contact local support
            services or emergency help.
          </p>
        </div>
      )}
    </div>
  );
}
