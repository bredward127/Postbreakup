import { NextResponse } from "next/server";
import { captureOrder, validOrderId } from "@/lib/paypal";

export async function POST(req: Request) {
  const { orderId } = await req.json().catch(() => ({}));
  if (!validOrderId(orderId)) return NextResponse.json({ error: "Invalid order" }, { status: 400 });
  try {
    const order = await captureOrder(orderId);
    if (order.status !== "COMPLETED") {
      return NextResponse.json({ error: "Payment not completed", status: order.status }, { status: 402 });
    }
    return NextResponse.json({ orderId: order.id });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Could not complete payment" }, { status: 500 });
  }
}
