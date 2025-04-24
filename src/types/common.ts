export interface SkillData {
  position: string
  skill: StackIcon[]
}

export interface InterviewData {
  question: string
  answer: string
}

export interface CareerData {
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

export interface EduData {
  due: string
  name: string
  disc: string
  skills: StackIcon[]
}

export interface SideBtnData {
  icon: string
  tooltipId: string
  tooltipText: string
  actionKey?: 'goToTop' | 'goToGithub' | 'copyEmail'
  link: string
  onClick?: () => void
}

export interface LinkData {
  text: string
  url: string
}

export interface Project {
  id: number
  meta: ProjectData
  due: string
  member?: string
  description: string
  keyFeatures?: string[]
  language: string[]
  contribution?: { title: string; text: string[] }[]
  trouble?: { title: string; text: string[] }[]
  remembrance?: string[]
  images: string[]
  urls?: { git?: string; deployment?: string }
}

export interface ModalPropsData {
  id: number | null
  isOpen: boolean
}
