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
      textWhite: activeProject === num,
    })
  const mainText = cx({
    mainText: true,
    isVisible: !activeProject,
    isHidden: activeProject,
  })

  return (
    <section className={styles.container}>
      <div className={styles.sidebar}>
        <h2 className={header} onClick={handleClick(0)}>
          Projects
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
  )
}

export default ProjectsXl
