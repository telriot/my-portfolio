import React, { useContext } from "react"
import { AppContext } from "../../contexts/appContext"
import AnimatedBars from "./AnimatedBars"
import ProjectContainerLg from "./ProjectContainerLg"
import styles from "./Projects.module.scss"
import classNames from "classnames/bind"
let cx = classNames.bind(styles)

function Projects() {
  const { state, projectHandlers } = useContext(AppContext)
  const { activeProject, hover } = state
  const { handleClick, handleMouseEnter, handleMouseLeave } = projectHandlers

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
    <section className={styles.container}>
      <div className={barContainer}>
        <AnimatedBars
          activeProject={activeProject}
          hover={hover}
          handleClick={handleClick}
        />
      </div>

      <div className={styles.sidebar}>
        <h2 onClick={handleClick(0)} className={header}>
          Projects
        </h2>
      </div>
      <div
        onMouseEnter={handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick(1)}
        className={projectClass(1)}
      >
        Book Club
      </div>
      <div
        onMouseEnter={handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick(2)}
        className={projectClass(2)}
      >
        Kogetaro
      </div>
      <div
        onMouseEnter={handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick(3)}
        className={projectClass(3)}
      >
        Charts
      </div>
      <div
        onMouseEnter={handleMouseEnter(4)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick(4)}
        className={projectClass(4)}
      >
        Something
      </div>
      <ProjectContainerLg tile={1} activeProject={activeProject} />
      <ProjectContainerLg tile={2} activeProject={activeProject} />
      <ProjectContainerLg tile={3} activeProject={activeProject} />
      <ProjectContainerLg tile={4} activeProject={activeProject} />
    </section>
  )
}

export default Projects
