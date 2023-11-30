
// about type

export interface SkillBartype {
  barId: number;
  label: string;
  percentage: number;
  color?: string;
}

export interface SkillBarProps {
  data: SkillBartype;
}