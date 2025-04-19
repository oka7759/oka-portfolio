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

function App() {
  ReactGA.initialize('G-D702SXPF4F')
  return (
    <>
      <GlobalStyles />
      <SideButton />
      <Top />
      <AboutMe />
      <Mid />
      <Bottom />
    </>
  )
}

export default App
