import React, { useContext, useRef, useEffect, useState } from "react"
import { AppContext } from "../../contexts/appContext"
import { WindowSizeContext } from "../../contexts/windowSizeContext"
import { Element } from "react-scroll"
import AnimatedBars from "./AnimatedBars"
import ProjectContainerLg from "./ProjectContainerLg"
import styles from "./Projects.module.scss"
import classNames from "classnames/bind"
import MainNav from "../about/layout/MainNav"

let cx = classNames.bind(styles)

function Projects() {
  const { state, projectHandlers } = useContext(AppContext)
  const { activeProject, hover } = state
  const { position } = useContext(WindowSizeContext)
  const [navHide, setNavHide] = useState(false)

  const {
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    handleFocus,
  } = projectHandlers

  const sectionRef = useRef()

  useEffect(() => {
    const { y, height } = sectionRef.current.getBoundingClientRect()
    if (y < 0 && -y < height - 50 && navHide) setNavHide(false)
    if ((y > 0 || -y > height - 50) && !navHide) setNavHide(true)
  }, [position.currPos])

  let header = cx({
    header: true,
  })
  let barContainer = cx({
    barContainer: true,
  })
  let projectClass = (num) =>
    cx({
      project1: num === 1,
      project2: num === 2,
      project3: num === 3,
      project4: num === 4,
      isVisible: !activeProject,
      isHidden: activeProject,
      projectHover: hover === num,
    })

  return (
    <Element name="projects">
      <section id="projects" ref={sectionRef} className={styles.container}>
        {!navHide && <MainNav position="right" />}

        <div className={barContainer}>
          <AnimatedBars
            activeProject={activeProject}
            hover={hover}
            handleClick={handleClick}
          />
        </div>

        <div className={styles.sidebar}>
          <h2
            onFocus={handleFocus("projects")}
            onClick={handleClick(0)}
            className={header}
          >
            <a href="#/">Projects</a>
          </h2>
        </div>
        <div
          onMouseEnter={handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick(1)}
          className={projectClass(1)}
        >
          <a href="#/"> Book Club</a>
        </div>
        <div
          onMouseEnter={handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick(2)}
          className={projectClass(2)}
        >
          <a href="#/"> Kogetaro</a>
        </div>
        <div
          onMouseEnter={handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick(3)}
          className={projectClass(3)}
        >
          <a href="#/"> Charts</a>
        </div>
        <div
          onMouseEnter={handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick(4)}
          className={projectClass(4)}
        >
          <a href="#/"> Something</a>
        </div>
        <ProjectContainerLg tile={1} activeProject={activeProject} />
        <ProjectContainerLg tile={2} activeProject={activeProject} />
        <ProjectContainerLg tile={3} activeProject={activeProject} />
        <ProjectContainerLg tile={4} activeProject={activeProject} />
      </section>
    </Element>
  )
}

export default Projects
