import React, { useContext } from "react"
import { AppContext } from "../../contexts/appContext"
import BookClub from "./links/BookClub"
import styles from "./ProjectsSm.module.scss"
import classNames from "classnames/bind"

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
          textWhite: true,
        })
      case 2:
        return cx({
          projectContainerRight: true,
          isVisible: activeProject === 2,
          isHidden: activeProject !== 2,
          textWhite: true,
        })
      case 3:
        return cx({
          projectContainerCenter: true,
          isVisible: activeProject === 3,
          isHidden: activeProject !== 3,
          textBlack: true,
        })
      case 4:
        return cx({
          projectContainerCenter: true,
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
    textBlack: activeProject === 1 || activeProject === 3,
    textWhite: activeProject === 2 || activeProject === 4,
  })
  let projectImage = cx({
    projectImage: true,
  })
  let projectText = cx({
    projectText: true,
    textBlack: activeProject === 1 || activeProject === 3,
    textWhite: activeProject === 2 || activeProject === 4,
  })
  let buttonDiv = cx({
    buttonDiv: activeProject === 1 || activeProject === 3,
    buttonBlack: activeProject === 2 || activeProject === 4,
  })
  return (
    <div className={containerClassSelector(tile)}>
      <BookClub className={projectImage} />
      <h3 className={projectTitle}>Book Club</h3>
      <p className={projectText}>
        Sint magna pariatur ad velit magna consectetur cupidatat. Do nisi ut
        aute exercitation adipisicing in proident enim amet voluptate ex laboris
        duis.
      </p>
      <div className={buttonDiv}>
        <button>Github</button>
        <button>Website</button>
      </div>
    </div>
  )
}

export default ProjectContainer
