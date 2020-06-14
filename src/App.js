import React, { useContext } from "react"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import LandingSplit from "./components/landing/LandingSplit"
import ProjectsSm from "./components/projects/ProjectsSm"
import Projects from "./components/projects/Projects"
import ProjectsLg from "./components/projects/ProjectsLg"
import { WindowSizeContext } from "./contexts/windowSizeContext"

function App() {
  const { isSM, isLG } = useContext(WindowSizeContext)
  return (
    <React.Fragment>
      <LandingSplit />
      {!isSM ? (
        <ProjectsSm />
      ) : !isLG ? (
        <Projects />
      ) : isLG ? (
        <ProjectsLg />
      ) : null}
      <About />

      <Contact />
    </React.Fragment>
  )
}

export default App
