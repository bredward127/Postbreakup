import { NextResponse } from "next/server";
import { createOrder } from "@/lib/paypal";

export async function POST() {
  try {
    const order = await createOrder();
    return NextResponse.json({ id: order.id });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Could not start checkout" }, { status: 500 });
  }
}
