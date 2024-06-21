interface AchievementValue {
  id: number;
  achievement: string;
}

export interface ExperienceDataValue {
  id: number;
  title: string;
  company: string;
  date: string;
  keyAchievement: AchievementValue[];
}

export interface ProjectDataValue {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  keyAchievement: AchievementValue[];
  link: string;
}

export interface EducationDataValue {
  id: number;
  course: string;
  location: string;
  sy: string;
  keyAchievement: AchievementValue[];
}
