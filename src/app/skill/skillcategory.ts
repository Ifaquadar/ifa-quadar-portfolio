import { SkillItem } from "./skill-item";

export interface SkillCategory {
    name: string;
    subtitle: string;
    emoji: string;
    iconClass: string;
    fillClass: string;
    items: SkillItem[];
}
