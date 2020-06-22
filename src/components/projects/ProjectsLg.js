import React, { useContext, useRef, useEffect, useState } from "react"
import { AppContext } from "../../contexts/appContext"
import { Element } from "react-scroll"
import AnimatedRects from "./AnimatedRects"
import ProjectContainerLg from "./ProjectContainerLg"
import styles from "./ProjectsLg.module.scss"
import classNames from "classnames/bind"
import MainNav from "../layout/MainNav"
import { WindowSizeContext } from "../../contexts/windowSizeContext"
import { projects, projectIntro } from "../../assets/text/projects"
let cx = classNames.bind(styles)

function ProjectsXl() {
  const { state, projectHandlers } = useContext(AppContext)
  const { position } = useContext(WindowSizeContext)
  const [navHide, setNavHide] = useState(false)
  const { activeProject, hover } = state
  const {
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    handleFocus,
  } = projectHandlers
  const sectionRef = useRef()

  useEffect(() => {
    const { y, height } = sectionRef.current.getBoundingClientRect()
    if (y < 50 && -y < height - 50 && navHide) setNavHide(false)
    if ((y > 50 || -y > height - 50) && !navHide) setNavHide(true)
  }, [position.currPos])
  let header = cx({
    header: true,
  })
  const listItem = (num) =>
    cx({
      listItem: true,
      listItemHover: hover === num,
      textRed: activeProject === num,
    })
  const mainText = cx({
    mainText: true,
    isVisible: !activeProject,
    isHidden: activeProject,
  })

  return (
    <Element name="projects">
      {!navHide && <MainNav position="right" origin="projects" />}
      <section id="projects" ref={sectionRef} className={styles.container}>
        <div className={styles.sidebar}>
          <h2 className={header} onClick={handleClick(0)}>
            <a onFocus={handleFocus("projects")} href="#/">
              {" "}
              Projects{" "}
            </a>
          </h2>

          <div className={styles.animatedRects}>
            <AnimatedRects handleClick={handleClick} />
          </div>

          <ul>
            <li
              onMouseEnter={handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick(1)}
              className={listItem(1)}
            >
              <a onFocus={handleFocus("projects")} href="#/">
                {projects[1].display}
              </a>
            </li>

            <li
              onMouseEnter={handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick(2)}
              className={listItem(2)}
            >
              <a onFocus={handleFocus("projects")} href="#/">
                {projects[2].display}
              </a>
            </li>
            <li
              onMouseEnter={handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick(3)}
              className={listItem(3)}
            >
              <a onFocus={handleFocus("projects")} href="#/">
                {projects[3].display}
              </a>
            </li>
            <li
              onMouseEnter={handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick(4)}
              className={listItem(4)}
            >
              <a onFocus={handleFocus("projects")} href="#/">
                {projects[4].display}
              </a>
            </li>
          </ul>
        </div>
        <div className={mainText}>
          <p>{projectIntro}</p>
        </div>
        <ProjectContainerLg tile={1} activeProject={activeProject} />
        <ProjectContainerLg tile={2} activeProject={activeProject} />
        <ProjectContainerLg tile={3} activeProject={activeProject} />
        <ProjectContainerLg tile={4} activeProject={activeProject} />
      </section>
    </Element>
  )
}

export default ProjectsXl
