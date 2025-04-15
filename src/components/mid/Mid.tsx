import tw from 'tailwind-styled-components'
import { Workspace } from './workspace/Workspace'
import { ContentsArea } from './ContentsArea'
import { Project } from './project/Project'
import { useRecoilState } from 'recoil'
import { SelectedMenuIndex } from '@/recoil/atoms/CommonAtom'

export const Mid = () => {
  const [selectedMenu, setSelectedMenu] = useRecoilState(SelectedMenuIndex)
  return (
    <Wrap>
      <div>
        <LeftMenu>
          <Title $active={selectedMenu === 0} onClick={() => setSelectedMenu(0)}>
            Career
          </Title>
          <Title $active={selectedMenu === 1} onClick={() => setSelectedMenu(1)}>
            Project
          </Title>
          <Title $active={selectedMenu === 2} onClick={() => setSelectedMenu(2)}>
            Education
          </Title>
        </LeftMenu>
      </div>
      <Contents>
        <Workspace />
        <Project /> <Workspace />
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
flex
gap-15
min-h-lvh

`
export const LeftMenu = tw.div`
sticky left-0 top-10 flex flex-col pl-10 gap-5 flex-1
`

export const Title = tw.h1<{ $active?: boolean }>`
text-6xl font-extrabold cursor-pointer
  ${(p) => (p.$active ? 'text-white' : 'text-neutral-400')}
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
export const Contents = tw.div`
w-full m-10 max-w-full mx-auto mt-30 
`
