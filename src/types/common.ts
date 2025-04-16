export interface SkillData {
  position: string
  skill: StackIcon[]
}

export interface InterviewData {
  question: string
  answer: string
}

export interface CareerAndEduData {
  due: string
  name: string
  position: string
  working: string[]
  skills: StackIcon[]
}

export type StackIcon =
  | 'JAVA'
  | 'JS'
  | 'TS'
  | 'REACT_JS'
  | 'NEXT_JS'
  | 'HTML'
  | 'CSS'
  | 'SPRING_BOOT'
  | 'MARIADB'
  | 'DOCKER'
  | 'VSCODE'
  | 'INTELLIJ'
  | 'TAILWIND'

export interface ProjectData {
  type: number
  img: string
  name: string
  desc: string
  tags: string[]
}
