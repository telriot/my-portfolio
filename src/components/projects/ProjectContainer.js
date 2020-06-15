import React, { useContext } from "react"
import { AppContext } from "../../contexts/appContext"
import ProjectImage from "./links/ProjectImage"
import styles from "./ProjectContainer.module.scss"
import classNames from "classnames/bind"
import { projects } from "../../assets/text/Projects"
import { icons } from "../../assets/icons/index"
import { isBrowser, isMobile } from "react-device-detect"

let cx = classNames.bind(styles)

function ProjectContainer(props) {
  const { state } = useContext(AppContext)
  const { activeProject } = state
  const { tile } = props

  const containerClassSelector = (tile) => {
    switch (tile) {
      case 1:
        return cx({
          projectContainer: true,
          isVisible: activeProject === 1,
          isHidden: activeProject !== 1,
          textBlack: true,
        })
      case 2:
        return cx({
          projectContainer: true,
          isVisible: activeProject === 2,
          isHidden: activeProject !== 2,
          textBlack: true,
        })
      case 3:
        return cx({
          projectContainer: true,
          isVisible: activeProject === 3,
          isHidden: activeProject !== 3,
          textBlack: true,
        })
      case 4:
        return cx({
          projectContainer: true,
          isVisible: activeProject === 4,
          isHidden: activeProject !== 4,
          textBlack: true,
        })
      default:
        return null
    }
  }
  let projectTitle = cx({
    projectTitle: true,
    textBlack: true,
  })
  let projectImage = cx({
    projectImage: true,
    textBlack: true,
  })
  let projectText = cx({
    projectText: true,
    textBlack: true,
  })
  let buttonDiv = cx({
    buttonDiv: true,
  })
  let iconClass = cx({
    icon: true,
    iconMobile: isMobile,
  })
  return (
    <div className={containerClassSelector(tile)}>
      <h3 className={projectTitle}>{projects[tile].title}</h3>

      <ProjectImage className={projectImage} tile={tile} />
      {/*<div className={styles.descriptionDiv}>
       <h3 className={projectTitle}>{projects[tile].title}</h3> 
        <p className={projectText}>{projects[tile].description}</p>
      </div>*/}
      <div className={styles.iconDiv}>
        {icons[tile].map((icon, index) => (
          <img
            className={iconClass}
            src={icons[tile][index]}
            key={`icon-${index}`}
            alt={`icon-${index}`}
          ></img>
        ))}
      </div>
      <div className={buttonDiv}>
        <button>Github</button>
        <button>Website</button>
      </div>
    </div>
  )
}

export default ProjectContainer
