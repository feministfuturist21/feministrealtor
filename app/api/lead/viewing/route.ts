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

  const record = appendLead("viewing", {
    email: String(body.email).trim(),
    name: typeof body?.name === "string" ? body.name : "",
    preferredTimes: typeof body?.preferredTimes === "string" ? body.preferredTimes : "",
    mustHaves: typeof body?.mustHaves === "string" ? body.mustHaves : "",
    dealbreakers: typeof body?.dealbreakers === "string" ? body.dealbreakers : "",
    userAgent: req.headers.get("user-agent") || "",
  });

  return NextResponse.json({ ok: true, id: record.id });
}
