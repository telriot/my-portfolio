import React, { useContext } from "react"
import { AppContext } from "../../contexts/appContext"
import AnimatedBars from "./AnimatedBars"
import Navbar from "./Navbar"
import ProjectContainer from "./ProjectContainer"
import styles from "./ProjectsSm.module.scss"
import classNames from "classnames/bind"
let cx = classNames.bind(styles)

function Projects() {
  const { state, projectHandlers } = useContext(AppContext)
  const { activeProject, hover } = state
  const { handleClick } = projectHandlers

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
    <section className={container}>
      <Navbar
        activeProject={activeProject}
        hover={hover}
        handleClick={handleClick}
      />
      <h2 className={mainText}>
        Duis velit elit magna laboris occaecat laboris.Sit officia veniam sit
        occaecat excepteur incididunt nisi proident sunt id.
      </h2>
      <div className={styles.projects}></div>

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
  )
}

export default Projects
