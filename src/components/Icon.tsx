import Java from '@/assets/icons/Java.svg?react'
import Js from '@/assets/icons/Js.svg?react'
import Nextjs from '@/assets/icons/Nextjs.svg?react'
import Docker from '@/assets/icons/Docker.svg?react'
import Css from '@/assets/icons/CSS3.svg?react'
import Html from '@/assets/icons/HTML5.svg?react'
import MySql from '@/assets/icons/MySQL.svg?react'
import REACT_JS from '@/assets/icons/React.svg?react' // React 이름 충돌 방지
import Spring from '@/assets/icons/Spring.svg?react'
import Ts from '@/assets/icons/TypeScript.svg?react'
import Vscode from '@/assets/icons/VsCode.svg?react'
import IntelliJ from '@/assets/icons/IntelliJ.svg?react'
import TailWindCss from '@/assets/icons/TailwindCSS.svg?react'

import tw from 'tailwind-styled-components'
import { StackIcon } from '@/types/common' // Importing StackIcon enum

type Props = {
  icon: StackIcon // Allow string keys from StackIcon enum
}

const iconMap: Record<StackIcon, React.FC<React.SVGProps<SVGSVGElement>>> = {
  HTML: Html,
  CSS: Css,
  JS: Js,
  TS: Ts,
  JAVA: Java,
  REACT_JS: REACT_JS,
  NEXT_JS: Nextjs,
  SPRING_BOOT: Spring,
  MARIADB: MySql,
  DOCKER: Docker,
  VSCODE: Vscode,
  INTELLIJ: IntelliJ,
  TAILWIND: TailWindCss,
}

export const Icon = ({ icon }: Props) => {
  const IconComponent = iconMap[icon]
  return IconComponent ? <IconComponent className='bg-black w-16 h-12 rounded-xl p-2 ' /> : null
}

export const Item = tw.div`
  bg-black w-16 h-12 rounded-xl
`
