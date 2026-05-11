export interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Resume {
  name: string;
  title: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  about: string;
  philosophy: string[];
  skills: SkillGroup[];
  experience: ExperienceEntry[];
  achievements: string[];
}
