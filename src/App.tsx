import './App.css'
import { Top } from '@/components/top/Top'
import GlobalStyles from '@/styles/Globalstyles.styles'
import ReactGA from 'react-ga4'
import '@/font/index.css'
import SideButton from './components/sideButtons/SideButton'
import { AboutMe } from './components/aboutMe/AboutMe'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Mid } from './components/mid/Mid'
import { Bottom } from './components/bottom/Bottom'
import { ProjectModal } from './components/ProjectModal'
import { useRecoilValue } from 'recoil'
import { ModalProps } from './recoil/atoms/CommonAtom'

function App() {
  ReactGA.initialize('G-D702SXPF4F')
  const selectedMenu = useRecoilValue(ModalProps)
  return (
    <>
      <GlobalStyles />
      <SideButton />
      <Top />
      <AboutMe />
      <Mid />
      <Bottom />
      {selectedMenu.isOpen && <ProjectModal />}
    </>
  )
}

export default App
