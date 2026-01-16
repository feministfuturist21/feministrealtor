import fs from "fs";
import path from "path";

export type LeadType = "shortlist" | "viewing" | "pinkscore";

export type LeadRecord = {
  id: string;
  type: LeadType;
  createdAt: string;
  payload: Record<string, unknown>;
};

function getStorePath() {
  // On Vercel, the filesystem is read-only except /tmp.
  // Locally, /tmp is fine too.
  return path.join("/tmp", "gta-women-homebuyer-leads.json");
}

export function appendLead(type: LeadType, payload: Record<string, unknown>): LeadRecord {
  const record: LeadRecord = {
    id: crypto.randomUUID(),
    type,
    createdAt: new Date().toISOString(),
    payload,
  };

  const fp = getStorePath();
  try {
    const existing = fs.existsSync(fp) ? JSON.parse(fs.readFileSync(fp, "utf8")) : [];
    const next = Array.isArray(existing) ? [...existing, record] : [record];
    fs.writeFileSync(fp, JSON.stringify(next, null, 2), "utf8");
  } catch {
    // If writing fails (some deployments), we still return success for MVP.
  }

  return record;
}
