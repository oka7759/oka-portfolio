import tw from 'tailwind-styled-components'
import { Workspace } from './workspace/Workspace'
import { Project } from './project/Project'
import { useRecoilValue } from 'recoil'
import { SelectedMenuIndex } from '@/recoil/atoms/CommonAtom'
import { CAREER_DATA, EDU_DATA } from '@/MockData'
import useSelectMenu from '@/hooks/useSelectMenu'
import { Education } from './education/Education'

export const Mid = () => {
  const selectedMenu = useRecoilValue(SelectedMenuIndex)
  const { careerRef, projectRef, educationRef, scrollToSection } = useSelectMenu()
  return (
    <Wrap>
      <MenuContainer>
        <LeftMenu>
          <Title $active={selectedMenu === 0} onClick={() => scrollToSection(0)}>
            Career
          </Title>
          <Title $active={selectedMenu === 1} onClick={() => scrollToSection(1)}>
            Project
          </Title>
          <Title $active={selectedMenu === 2} onClick={() => scrollToSection(2)}>
            Education
          </Title>
        </LeftMenu>
      </MenuContainer>
      <Contents>
        <div ref={careerRef}>
          <Workspace career={CAREER_DATA} />
        </div>
        <div ref={projectRef}>
          <Project />
        </div>
        <div ref={educationRef}>
          <Education edu={EDU_DATA} />
        </div>
      </Contents>
    </Wrap>
  )
}

export const Wrap = tw.div`
relative
w-full 
bg-[#1E1E1E]
bg-cover 
bg-center
xl:flex
gap-15
min-h-lvh
p-4
`

export const MenuContainer = tw.div`
sticky 
top-0
z-999

`
export const LeftMenu = tw.div`
flex 
gap-5  
lg:top-10 
pl-10 
p-4
bg-[#1E1E1E]
xl:flex-col 
xl:h-screen
xl:sticky
xl:left-0

`

export const Title = tw.h1<{ $active?: boolean }>`
text-2xl
lg:text-3xl
xl:text-6xl
font-extrabold
cursor-pointer
  ${(p) => (p.$active ? 'text-white' : 'text-neutral-400')}
`

export const Character = tw.img`
mb-30
`

export const Section = tw.section`
w-full mb-30
`
export const SectionTitle = tw.h3`
text-4xl
text-white
font-black
`
export const Contents = tw.div`
w-full
m-10
max-w-full 
mx-auto 
mt-0
xl:mt-30 
`
