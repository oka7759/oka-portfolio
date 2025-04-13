import tw from 'tailwind-styled-components'
import { Workspace } from './workspace/Workspace'
import { ContentsArea } from './ContentsArea'
import { Project } from './project/Project'
import { Education } from './education/Education'

export const Mid = () => {
  return (
    <Wrap>
      <LeftMenu>
        <Title>Career</Title>
        <Title>Project</Title>
        <Title>Education</Title>
      </LeftMenu>
      <ContentsArea items={<Education />} />
    </Wrap>
  )
}

export const Wrap = tw.div`
relative
w-full 
bg-[#1E1E1E]
bg-cover 
bg-center
flex
gap-15
`

export const Title = tw.h1`
text-white text-6xl font-extrabold 
`

export const Character = tw.img`
mb-30
`

export const Section = tw.section`
w-full mb-30
`
export const SectionTitle = tw.h3`
text-4xl text-white font-black
`

export const LeftMenu = tw.div`
sticky top-10 flex flex-col pl-10 gap-5
`
