import React, { useContext, useRef, useEffect, useState } from "react"
import { AppContext } from "../../contexts/appContext"
import { Element } from "react-scroll"
import AnimatedRects from "./AnimatedRects"
import ProjectContainerLg from "./ProjectContainerLg"
import styles from "./ProjectsLg.module.scss"
import classNames from "classnames/bind"
import MainNav from "../about/layout/MainNav"
import { WindowSizeContext } from "../../contexts/windowSizeContext"
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
    if (y < 0 && -y < height - 50 && navHide) setNavHide(false)
    if ((y > 0 || -y > height - 50) && !navHide) setNavHide(true)
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
      <section id="projects" ref={sectionRef} className={styles.container}>
        {!navHide && <MainNav position="right" />}
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
                {" "}
                Book club{" "}
              </a>
            </li>

            <li
              onMouseEnter={handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick(2)}
              className={listItem(2)}
            >
              <a onFocus={handleFocus("projects")} href="#/">
                {" "}
                Kogetaro{" "}
              </a>
            </li>
            <li
              onMouseEnter={handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick(3)}
              className={listItem(3)}
            >
              <a onFocus={handleFocus("projects")} href="#/">
                {" "}
                Charts{" "}
              </a>
            </li>
            <li
              onMouseEnter={handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick(4)}
              className={listItem(4)}
            >
              <a onFocus={handleFocus("projects")} href="#/">
                {" "}
                Something{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className={mainText}>
          <p>
            Tempor ipsum non qui magna. Excepteur duis commodo culpa tempor et
            laboris magna ad. Occaecat culpa eiusmod mollit ex Lorem minim et
            tempor reprehenderit nulla occaecat amet ex do. Voluptate ut eiusmod
            mollit labore enim.
          </p>
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
