import { product } from "./product";

const base = () =>
  process.env.PAYPAL_ENV === "live" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com";

export function paypalConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID && process.env.PAYPAL_CLIENT_SECRET);
}

async function accessToken() {
  const id = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_CLIENT_SECRET;
  if (!id || !secret) throw new Error("PayPal credentials are not configured");
  const res = await fetch(`${base()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${id}:${secret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`PayPal auth failed: ${res.status}`);
  return ((await res.json()) as { access_token: string }).access_token;
}

async function call<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${base()}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${await accessToken()}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`PayPal ${path} failed: ${res.status} ${JSON.stringify(data)}`);
  return data as T;
}

type Order = {
  id: string;
  status: string;
  purchase_units?: { reference_id?: string; amount?: { value: string; currency_code: string } }[];
};

// The price is set here on the server, never taken from the browser.
export function createOrder() {
  return call<Order>("/v2/checkout/orders", {
    method: "POST",
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          reference_id: product.sku,
          description: product.name,
          amount: { currency_code: product.currency, value: product.price },
        },
      ],
      payment_source: {
        paypal: { experience_context: { shipping_preference: "NO_SHIPPING", brand_name: product.shortName } },
      },
    }),
  });
}

export function captureOrder(id: string) {
  return call<Order>(`/v2/checkout/orders/${encodeURIComponent(id)}/capture`, { method: "POST" });
}

export async function isPaidOrder(id: string) {
  const order = await call<Order>(`/v2/checkout/orders/${encodeURIComponent(id)}`);
  const unit = order.purchase_units?.[0];
  return (
    order.status === "COMPLETED" &&
    unit?.reference_id === product.sku &&
    unit?.amount?.value === product.price &&
    unit?.amount?.currency_code === product.currency
  );
}

export const validOrderId = (id: unknown): id is string => typeof id === "string" && /^[A-Z0-9]{8,40}$/.test(id);
