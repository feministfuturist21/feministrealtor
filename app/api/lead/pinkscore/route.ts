import { NextResponse } from "next/server";
import { appendLead } from "@/lib/leadStore";

export const runtime = "nodejs";

function isEmail(email: unknown) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));

  if (!isEmail(body?.email)) {
    return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
  }

  const address = typeof body?.address === "string" ? body.address.trim() : "";
  if (!address) {
    return NextResponse.json({ error: "Address is required." }, { status: 400 });
  }

  const record = appendLead("pinkscore", {
    email: String(body.email).trim(),
    address,
    city: typeof body?.city === "string" ? body.city : "",
    weights: typeof body?.weights === "object" && body.weights ? body.weights : {},
    selfScores: typeof body?.selfScores === "object" && body.selfScores ? body.selfScores : {},
    result: typeof body?.result === "object" && body.result ? body.result : {},
    consent: Boolean(body?.consent),
    userAgent: req.headers.get("user-agent") || "",
  });

  return NextResponse.json({ ok: true, id: record.id });
}
