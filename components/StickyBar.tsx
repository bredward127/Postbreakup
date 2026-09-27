"use client";

import { useEffect, useState } from "react";

// Appears once the hero scrolls away; hides again when the offer box is on screen.
export default function StickyBar({ label, price, cta = "Get it now" }: { label: string; price: string; cta?: string }) {
  const [heroGone, setHeroGone] = useState(false);
  const [offerVisible, setOfferVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const offer = document.getElementById("offer");
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) setHeroGone(!e.isIntersecting);
        if (e.target === offer) setOfferVisible(e.isIntersecting);
      }
    });
    if (hero) obs.observe(hero);
    if (offer) obs.observe(offer);
    return () => obs.disconnect();
  }, []);

  const show = heroGone && !offerVisible;
  return (
    <div className={`sticky-bar${show ? " is-on" : ""}`} aria-hidden={!show}>
      <div>
        <strong>{label}</strong>
        <span>{price} · instant PDF</span>
      </div>
      <a href="#offer" className="btn btn-sm" tabIndex={show ? 0 : -1}>
        {cta}
      </a>
    </div>
  );
}
