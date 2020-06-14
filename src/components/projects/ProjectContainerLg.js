import React, { useContext } from "react"
import classNames from "classnames/bind"
import styles from "./ProjectContainerLg.module.scss"
import BookClub from "./links/BookClub"
import { AppContext } from "../../contexts/appContext"

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
  let projectText = cx({
    projectText: true,
  })
  let buttonDiv = cx({
    buttonDiv: true,
  })
  return (
    <div className={projectContainer}>
      <h3 className={projectTitle}>Book Club</h3>
      <BookClub className={projectImage} />

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

export default ProjectContainerLg
