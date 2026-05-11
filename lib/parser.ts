import fs from "fs";
import path from "path";
import { Resume, ExperienceEntry, SkillGroup } from "@/types/resume";

export function parseResume(): Resume {
  const filePath = path.join(process.cwd(), "resume.md");
  const content = fs.readFileSync(filePath, "utf-8");

  const lines = content.split("\n");

  // Parse frontmatter
  let name = "";
  let title = "";
  let tagline = "";
  let location = "";
  let phone = "";
  let email = "";
  let linkedin = "";

  // Extract from markdown body
  for (const line of lines) {
    if (line.startsWith("# ") && !name) {
      name = line.replace("# ", "").trim();
    }
    if (line.startsWith("## Blockchain")) {
      title = line.replace("## ", "").trim();
    }
    if (line.startsWith("*") && line.includes("generalist")) {
      tagline = line.replace(/\*/g, "").trim();
    }
  }

  // Extract contact info
  for (const line of lines) {
    if (line.includes("Bangalore")) location = "Bangalore, India";
    if (line.includes("📧") || (line.includes("@") && line.includes("email"))) {
      const match = line.match(
        /[\w.-]+@[\w.-]+\.\w+/
      );
      if (match) email = match[0];
    }
    if (line.includes("linkedin.com")) {
      const match = line.match(/https?:\/\/(?:www\.)?linkedin\.com\/in\/\S+/);
      if (match) linkedin = match[0].replace(")", "");
    }
    if (line.includes("+91")) {
      const match = line.match(/\+91\s*\d+/);
      if (match) phone = match[0];
    }
  }

  // Parse sections by heading
  const sections = extractSections(content);

  // About — strip trailing horizontal rules
  const about = (sections["About Me"] || "").replace(/\n---\s*$/, "").trim();

  // Philosophy
  const philosophyRaw = sections["Philosophy"] || "";
  const philosophy = philosophyRaw
    .split("\n")
    .filter((l) => l.startsWith(">"))
    .map((l) => l.replace(/^>\s*/, "").trim())
    .filter(Boolean);

  // Skills
  const skills = parseSkills(sections);

  // Experience
  const experience = parseExperience(content);

  // Achievements
  const achievementsRaw = sections["Achievements"] || "";
  const achievements = achievementsRaw
    .split("\n")
    .filter((l) => l.startsWith("- "))
    .map((l) => l.replace("- ", "").trim());

  return {
    name,
    title,
    tagline,
    location,
    phone,
    email,
    linkedin,
    about,
    philosophy,
    skills,
    experience,
    achievements,
  };
}

function extractSections(content: string): Record<string, string> {
  const sections: Record<string, string> = {};
  const lines = content.split("\n");
  let currentSection = "";
  let currentContent: string[] = [];

  for (const line of lines) {
    const h2Match = line.match(/^## (.+)/);
    const h1Match = line.match(/^# (.+)/);

    if (h2Match || h1Match) {
      if (currentSection) {
        sections[currentSection] = currentContent.join("\n").trim();
      }
      currentSection = (h2Match || h1Match)![1].trim();
      currentContent = [];
    } else {
      currentContent.push(line);
    }
  }

  if (currentSection) {
    sections[currentSection] = currentContent.join("\n").trim();
  }

  return sections;
}

function parseSkills(sections: Record<string, string>): SkillGroup[] {
  const skillCategories = [
    "Languages",
    "Backend & Distributed Systems",
    "Blockchain & Protocol Engineering",
    "Smart Contracts & Security",
    "Applied Cryptography",
    "DeFi & Mechanism Design",
    "AI Systems",
    "LLMs & Agentic Systems",
    "AI × Blockchain",
    "Architecture & Ownership",
    "Infrastructure & DevOps",
  ];

  const groups: SkillGroup[] = [];

  for (const cat of skillCategories) {
    const raw = sections[cat];
    if (raw) {
      const skills = raw
        .split("\n")
        .filter((l) => l.startsWith("- "))
        .map((l) => l.replace("- ", "").trim());
      groups.push({ category: cat, skills });
    }
  }

  return groups;
}

function parseExperience(content: string): ExperienceEntry[] {
  const entries: ExperienceEntry[] = [];
  const lines = content.split("\n");

  let i = 0;
  // Find Work Experience section
  while (i < lines.length && !lines[i].match(/^# Work Experience/)) {
    i++;
  }
  i++;

  let currentEntry: Partial<ExperienceEntry> | null = null;

  while (i < lines.length) {
    const line = lines[i];

    // Stop at next top-level section
    if (line.match(/^# /) && !line.match(/^# Work Experience/)) break;

    const titleMatch = line.match(/^## (.+)/);
    if (titleMatch) {
      if (currentEntry && currentEntry.title) {
        entries.push(currentEntry as ExperienceEntry);
      }
      currentEntry = {
        title: titleMatch[1].trim(),
        company: "",
        location: "",
        period: "",
        bullets: [],
      };
      i++;
      continue;
    }

    if (currentEntry) {
      if (line.startsWith("**") && line.includes("—")) {
        const parts = line.replace(/\*/g, "").split("—");
        currentEntry.company = parts[0].trim();
        currentEntry.location = parts[1]?.trim() || "";
      } else if (line.startsWith("*") && !line.startsWith("**")) {
        currentEntry.period = line.replace(/\*/g, "").trim();
      } else if (line.startsWith("- ")) {
        currentEntry.bullets!.push(line.replace("- ", "").trim());
      }
    }

    i++;
  }

  if (currentEntry && currentEntry.title) {
    entries.push(currentEntry as ExperienceEntry);
  }

  return entries;
}
