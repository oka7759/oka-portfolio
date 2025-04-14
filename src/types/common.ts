export interface SectionData<T> {
  color: string
  title: string
  data: T // T 타입의 배열
}
export interface AboutData {
  imageUrl: string
  title: string
  icon: string
  content: string
}

export interface ArchiveData {
  imageUrl: string
  title: string
  content: string
}

export interface SkillData {
  type: SkillType
  icon: string
  skill: { name: string; color: string }[]
}

export enum SkillType {
  LANGUAGE = 'Language',
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  ETC = 'Etc',
}

export interface ProjectData {
  title: string
  date: string
  description: string
  resource: number
  subtitle: string
  content: string[]
  url: string
  stacks: string[]
}

export interface CareerData {
  name: string
  date: string
  role: string
  description: string
  img: string
}

export type Menu = 'Main' | 'Introduce' | 'Skill' | 'Archive' | 'Project' | 'Experience'
