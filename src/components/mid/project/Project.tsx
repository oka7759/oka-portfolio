import tw from 'tailwind-styled-components'
import { ProjectItem } from './ProjectItem'
import { useRecoilState } from 'recoil'
import { SelectedProjectIndex } from '@/recoil/atoms/CommonAtom'
import { PROJECT_DATA } from '@/MockData'
import { ScrollAni } from '@/utils/animation'
import { useArrivedScroll } from '@/hooks/useArrivedScroll'

export const Project = () => {
  const [selected, setSelected] = useRecoilState(SelectedProjectIndex)
  const filteredProjects = PROJECT_DATA.filter((project) => {
    if (selected === 0) return true // 모두 표시
    return project.type === selected - 1 // selected 1이면 type 0, selected 2이면 type 1
  })
  const { scrollRef, scrollEl } = useArrivedScroll()
  return (
    <ScrollAni
      className={`${scrollEl ? 'fadeAn fadeIn max-w-[1700px] xl:mb-100 flex flex-col  items-start  gap-10  ' : 'fadeOut'}`}
      ref={scrollRef}
    >
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
        <ProjectItem project={filteredProjects} />
      </Container>
    </ScrollAni>
  )
}

export const Projects = tw.div`
flex 
flex-col 
items-start 
gap-10  
min-h-lvh  
max-w-[1700px] 
py-10
`

export const Nav = tw.nav`
flex 
px-5 
py-2 
rounded-full 
bg-neutral-800 
gap-3 
font-extrabold 
text-xl 
text-white 
items-center
`

export const Active = tw.span<{ $active?: boolean }>`
  ${(p) => (p.$active ? 'bg-white text-black px-4 py-3 rounded-3xl' : '')}
`

export const Container = tw.div`
grid 
grid-cols-1
lg:grid-cols-2
xl:grid-cols-3
w-full  
gap-5
`
