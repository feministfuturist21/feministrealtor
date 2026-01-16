import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type WhatsNewType = "property" | "article" | "policy" | "podcast" | "book" | "community";

export type WhatsNewItem = {
  id: string;
  type: WhatsNewType;
  title: string;
  subtitle?: string;
  date: string; // YYYY-MM-DD
  href: string;
  image: string; // /public/... path
  badge?: string;
  tags?: string[];
  featured?: boolean;
};

const DIR = path.join(process.cwd(), "content", "whats-new");

export function getWhatsNewItems(limit = 8): WhatsNewItem[] {
  if (!fs.existsSync(DIR)) return [];

  const files = fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  const items: WhatsNewItem[] = files
    .map((file) => {
      const fullPath = path.join(DIR, file);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(raw);

      return {
        id: String(data.id || file.replace(/\.(md|mdx)$/i, "")),
        type: data.type,
        title: data.title,
        subtitle: data.subtitle,
        date: data.date,
        href: data.href,
        image: data.image,
        badge: data.badge,
        tags: Array.isArray(data.tags) ? data.tags : [],
        featured: Boolean(data.featured),
      } as WhatsNewItem;
    })
    .filter((it) => it.type && it.title && it.date && it.href && it.image);

  // Featured first, then newest
  return items
    .sort((a, b) => {
      const fa = a.featured ? 1 : 0;
      const fb = b.featured ? 1 : 0;
      if (fa !== fb) return fb - fa;
      return b.date.localeCompare(a.date);
    })
    .slice(0, limit);
}
