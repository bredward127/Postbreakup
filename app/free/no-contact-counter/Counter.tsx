"use client";

import { useEffect, useState } from "react";

const KEY = "ncj-start-date";
const MILESTONES = [1, 3, 7, 14, 21, 30, 60, 90];

const today = () => new Date().toISOString().slice(0, 10);
const daysSince = (iso: string) =>
  Math.floor((Date.parse(today()) - Date.parse(iso)) / 86_400_000);

export default function Counter() {
  const [start, setStart] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved) setStart(saved);
    } catch {}
  }, []);

  const save = (v: string) => {
    setStart(v);
    try {
      if (v) localStorage.setItem(KEY, v);
      else localStorage.removeItem(KEY);
    } catch {}
  };

  const n = start ? Math.max(0, daysSince(start)) : null;
  const next = n === null ? null : MILESTONES.find((m) => m > n);

  return (
    <div className="tool">
      <label htmlFor="start">When did your no contact start?</label>
      <input id="start" type="date" max={today()} value={start} onChange={(e) => save(e.target.value)} />
      {n !== null && (
        <>
          <p className="big-count" aria-live="polite">
            {n}
          </p>
          <p>
            {n === 1 ? "day" : "days"} of no contact.{" "}
            {next ? `${next - n} more to your ${next}-day milestone.` : "You've passed 90 days. That's huge."}
          </p>
          <ul className="milestones" aria-label="Milestones">
            {MILESTONES.map((m) => (
              <li key={m} className={n >= m ? "hit" : ""}>
                {m} {m === 1 ? "day" : "days"}
              </li>
            ))}
          </ul>
          <div className="tool-row">
            <button type="button" className="tool-btn" onClick={() => save(today())}>
              I slipped. Restart from today
            </button>
          </div>
          <p className="fr-note" style={{ marginTop: 14 }}>
            Slipping doesn&apos;t erase your progress. Write down what led up to it, then start again.
          </p>
        </>
      )}
    </div>
  );
}
