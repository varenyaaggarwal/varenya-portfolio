import {
  Route,
  Routes,
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

import SmoothScroll from './components/SmoothScroll'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import InteractionEngine from './components/InteractionEngine'
import CinematicLoader from './components/CinematicLoader'
import GlobalEffects from './components/GlobalEffects'
import SectionMarquee from './components/SectionMarquee'

import ProjectCaseStudy from './pages/ProjectCaseStudy'

function HomePage() {
  return (
    <>
      <Hero />

      <About />

      <SectionMarquee />

      <Projects />

      <Skills />

      <SectionMarquee />

      <Experience />

      <Contact />
    </>
  )
}

function App() {
  return (
    <>
      <CinematicLoader />

      <SmoothScroll />

      <ScrollProgress />

      <GlobalEffects />

      <CustomCursor />

      <InteractionEngine />

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/projects/:slug"
          element={
            <ProjectCaseStudy />
          }
        />
      </Routes>
    </>
  )
}

export default App