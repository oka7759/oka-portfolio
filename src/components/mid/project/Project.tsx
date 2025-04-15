import tw from 'tailwind-styled-components'
import { ProjectItem } from './ProjectItem'
import { useRecoilState } from 'recoil'
import { SelectedProjectIndex } from '@/recoil/atoms/CommonAtom'

export const Project = () => {
  const [selected, setSelected] = useRecoilState(SelectedProjectIndex)
  return (
    <Projects>
      <Nav>
        <Active $active={selected === 0} onClick={() => setSelected(0)}>
          All
        </Active>
        <Active $active={selected === 1} onClick={() => setSelected(1)}>
          Team
        </Active>
        <Active $active={selected === 2} onClick={() => setSelected(2)}>
          Personal
        </Active>
      </Nav>
      <Container>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </Container>
    </Projects>
  )
}

export const Projects = tw.div`
flex flex-col items-start gap-10  min-h-lvh  max-w-[1700px] py-10
`

export const Nav = tw.nav`
flex px-5 py-2 rounded-full bg-neutral-800 gap-3 font-extrabold text-xl text-white items-center
`

export const Active = tw.span<{ $active?: boolean }>`
  ${(p) => (p.$active ? 'bg-white text-black px-4 py-3 rounded-3xl' : '')}
`

export const Container = tw.div`
grid grid-cols-3 w-full  gap-5
`
