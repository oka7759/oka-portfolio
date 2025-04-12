import './App.css'
import { Top } from '@/components/Top'
import GlobalStyles from '@/styles/Globalstyles.styles'
import ReactGA from 'react-ga4'
import '@/font/index.css'
import SideButton from './components/SideButton'
import { AboutMe } from './components/AboutMe'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Career } from './components/Career'

function App() {
  ReactGA.initialize('G-D702SXPF4F')
  return (
    <>
      <GlobalStyles />
      <SideButton />
      <Top />
      <AboutMe />
      <Career />
    </>
  )
}

export default App
