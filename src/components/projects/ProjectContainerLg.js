import React, { useContext } from "react"
import classNames from "classnames/bind"
import styles from "./ProjectContainerLg.module.scss"
import ProjectImage from "./links/ProjectImage"
import { AppContext } from "../../contexts/appContext"
import { icons } from "../../assets/icons/index"

import { projects } from "../../assets/text/projects"

let cx = classNames.bind(styles)

function ProjectContainerLg(props) {
  const { state } = useContext(AppContext)
  const { activeProject } = state
  const { tile } = props

  let projectContainer = cx({
    projectContainer: true,
    isVisible: activeProject === tile,
    isHidden: activeProject !== tile,
  })
  let projectTitle = cx({
    projectTitle: true,
  })
  let projectImage = cx({
    projectImage: true,
  })

  let buttonDiv = cx({
    buttonDiv: true,
  })
  return (
    <div className={projectContainer}>
      <div className={styles.titleDiv}>
        <>
          <h3 className={projectTitle}>{projects[tile].title}</h3>
          <div className={styles.iconDiv}>
            {icons[tile].map((icon, index) => (
              <img
                className={styles.icon}
                src={icons[tile][index]}
                key={`icon-${index}`}
                alt={`icon-${index}`}
              ></img>
            ))}
          </div>
        </>
      </div>

      <ProjectImage tile={tile} className={projectImage} />

      <div className={buttonDiv}>
        <a className={styles.button} href={projects[tile].git} target="_blank">
          Github
        </a>
        <a className={styles.button} href={projects[tile].web} target="_blank">
          Website
        </a>
      </div>
    </div>
  )
}

export default ProjectContainerLg
