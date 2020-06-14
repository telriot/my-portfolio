import React, { useContext } from "react"
import { AppContext } from "../../contexts/appContext"
import AnimatedRects from "./AnimatedRects"
import ProjectContainerLg from "./ProjectContainerLg"
import styles from "./ProjectsLg.module.scss"
import classNames from "classnames/bind"
let cx = classNames.bind(styles)

function ProjectsXl() {
  const { state, projectHandlers } = useContext(AppContext)
  const { activeProject, hover } = state
  const { handleClick, handleMouseEnter, handleMouseLeave } = projectHandlers
  let header = cx({
    header: true,
  })
  const listItem = (num) =>
    cx({
      listItem: true,
      listItemHover: hover === num,
    })

  return (
    <section className={styles.container}>
      <div className={styles.sidebar}>
        <h2 className={header}>Projects</h2>
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
            Book club
          </li>
          <li
            onMouseEnter={handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick(2)}
            className={listItem(2)}
          >
            Kogetaro
          </li>
          <li
            onMouseEnter={handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick(3)}
            className={listItem(3)}
          >
            Charts
          </li>
          <li
            onMouseEnter={handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick(4)}
            className={listItem(4)}
          >
            Something
          </li>
        </ul>
      </div>
      <ProjectContainerLg tile={1} activeProject={activeProject} />
      <ProjectContainerLg tile={2} activeProject={activeProject} />
      <ProjectContainerLg tile={3} activeProject={activeProject} />
      <ProjectContainerLg tile={4} activeProject={activeProject} />
    </section>
  )
}

export default ProjectsXl
