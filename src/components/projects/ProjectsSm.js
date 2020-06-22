import React, { useContext, useEffect, useRef, useState } from "react"
import { AppContext } from "../../contexts/appContext"
import { WindowSizeContext } from "../../contexts/windowSizeContext"

import AnimatedBars from "./AnimatedBars"
import MainNav from "../layout/MainNav"
import Navbar from "./Navbar"
import ProjectContainer from "./ProjectContainer"
import { projectIntro } from "../../assets/text/projects"
import styles from "./ProjectsSm.module.scss"
import classNames from "classnames/bind"
let cx = classNames.bind(styles)

function Projects() {
  const { state, projectHandlers } = useContext(AppContext)
  const { position } = useContext(WindowSizeContext)
  const { activeProject, hover } = state
  const { handleClick } = projectHandlers
  const [navHide, setNavHide] = useState(false)
  const sectionRef = useRef()

  useEffect(() => {
    const { y, height } = sectionRef.current.getBoundingClientRect()
    if (y < 0 && -y < height && navHide) setNavHide(false)
    if ((y > 0 || -y > height) && !navHide) setNavHide(true)
  }, [position.currPos])

  let container = cx({
    container: true,
    bgBlack: activeProject === 0,
  })
  let barContainer = cx({
    barContainer: true,
    isHidden: activeProject,
  })

  let mainText = cx({
    mainText: true,
    isHidden: activeProject !== 0,
  })

  return (
    <React.Fragment>
      {!navHide && <MainNav position="right" origin="projects" />}
      <section ref={sectionRef} id="projects" className={container}>
        <Navbar
          activeProject={activeProject}
          hover={hover}
          handleClick={handleClick}
        />

        <h2 className={mainText}>{projectIntro}</h2>

        <ProjectContainer tile={1} activeProject={activeProject} />
        <ProjectContainer tile={2} activeProject={activeProject} />
        <ProjectContainer tile={3} activeProject={activeProject} />
        <ProjectContainer tile={4} activeProject={activeProject} />
        <div className={barContainer}>
          <AnimatedBars
            activeProject={activeProject}
            hover={hover}
            handleClick={handleClick}
          />
        </div>
      </section>
    </React.Fragment>
  )
}

export default Projects
