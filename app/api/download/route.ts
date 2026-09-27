import { readFile } from "node:fs/promises";
import path from "node:path";
import { isPaidOrder, validOrderId } from "@/lib/paypal";

export async function GET(req: Request) {
  const orderId = new URL(req.url).searchParams.get("order");
  if (!validOrderId(orderId)) return new Response("Missing or invalid order number.", { status: 400 });
  try {
    if (!(await isPaidOrder(orderId))) return new Response("We couldn't find a completed payment for that order.", { status: 403 });
  } catch (err) {
    console.error(err);
    return new Response("We couldn't verify that order right now. Please try again in a minute.", { status: 502 });
  }
  const file = await readFile(path.join(process.cwd(), "private", "no-contact-journal.pdf"));
  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="The-No-Contact-Journal.pdf"',
      "Cache-Control": "private, no-store",
    },
  });
}
