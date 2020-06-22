import React, { useContext, useEffect } from "react"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import LandingSplit from "./components/landing/LandingSplit"
import Landing2 from "./components/landing/Landing2"

import ProjectsSm from "./components/projects/ProjectsSm"
import Projects from "./components/projects/Projects"
import ProjectsLg from "./components/projects/ProjectsLg"
import { WindowSizeContext } from "./contexts/windowSizeContext"
import { AppContext } from "./contexts/appContext"

function App() {
  const { isXS, isSM, isLG } = useContext(WindowSizeContext)
  const { state, dispatch } = useContext(AppContext)
  useEffect(() => {
    dispatch({ type: "RESET" })
  }, [])
  return (
    <React.Fragment>
      <Landing2 />
      {!isXS ? (
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
