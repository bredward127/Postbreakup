"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    paypal?: {
      Buttons: (opts: Record<string, unknown>) => { render: (el: HTMLElement) => Promise<void>; close?: () => void };
    };
  }
}

const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

function loadSdk(): Promise<void> {
  if (window.paypal) return Promise.resolve();
  const existing = document.getElementById("paypal-sdk") as HTMLScriptElement | null;
  return new Promise((resolve, reject) => {
    const s = existing ?? document.createElement("script");
    s.addEventListener("load", () => resolve());
    s.addEventListener("error", () => reject(new Error("PayPal failed to load")));
    if (!existing) {
      s.id = "paypal-sdk";
      s.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD&intent=capture&components=buttons`;
      document.body.appendChild(s);
    }
  });
}

export default function PayPalCheckout() {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!clientId || !ref.current) return;
    let cancelled = false;
    loadSdk()
      .then(() => {
        if (cancelled || !ref.current || !window.paypal) return;
        ref.current.innerHTML = "";
        return window.paypal
          .Buttons({
            style: { layout: "vertical", shape: "pill", label: "pay", height: 48 },
            createOrder: async () => {
              setError(null);
              const res = await fetch("/api/paypal/create-order", { method: "POST" });
              const data = await res.json();
              if (!res.ok) throw new Error(data.error);
              return data.id;
            },
            onApprove: async ({ orderID }: { orderID: string }) => {
              const res = await fetch("/api/paypal/capture-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ orderId: orderID }),
              });
              const data = await res.json();
              if (!res.ok) {
                setError("Your payment didn't go through. You haven't been charged. Please try again.");
                return;
              }
              router.push(`/thank-you?order=${encodeURIComponent(data.orderId)}`);
            },
            onError: () => setError("Something went wrong with PayPal. Please try again."),
          })
          .render(ref.current);
      })
      .catch(() => setError("PayPal couldn't load. Check your connection and refresh."));
    return () => {
      cancelled = true;
    };
  }, [router]);

  if (!clientId) {
    return (
      <div className="checkout-pending" role="status">
        Checkout is being set up. Please check back shortly.
      </div>
    );
  }

  return (
    <div>
      <div ref={ref} className="paypal-slot" aria-label="Pay with PayPal or card" />
      {error && (
        <p className="checkout-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
