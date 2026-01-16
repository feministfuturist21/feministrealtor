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

  const record = appendLead("shortlist", {
    email: String(body.email).trim(),
    name: typeof body?.name === "string" ? body.name : "",
    budget: typeof body?.budget === "string" ? body.budget : "",
    area: typeof body?.area === "string" ? body.area : "",
    timeline: typeof body?.timeline === "string" ? body.timeline : "",
    chips: Array.isArray(body?.chips) ? body.chips : [],
    userAgent: req.headers.get("user-agent") || "",
  });

  return NextResponse.json({ ok: true, id: record.id });
}
