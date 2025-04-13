import tw from 'tailwind-styled-components'
import { ProjectItem } from './ProjectItem'

export const Project = () => {
  return (
    <Projects>
      <Nav>
        <Active>All</Active>
        <span>Team</span>
        <span>Personal</span>
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
flex flex-col items-start gap-10 
`

export const Nav = tw.nav`
flex px-5 py-2 rounded-full bg-neutral-800 gap-3 font-extrabold text-xl text-white items-center
`

export const Active = tw.span`
bg-white text-black px-4 py-3 rounded-3xl
`

export const Container = tw.div`
grid grid-cols-4 w-full  gap-5
`
