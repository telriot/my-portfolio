import React, { useContext } from "react"
import { images } from "../../../assets/images/index"
import { projects } from "../../../assets/text/projects"
import { WindowSizeContext } from "../../../contexts/windowSizeContext"
function ProjectImage(props) {
  const { isSM } = useContext(WindowSizeContext)
  const { tile, className } = props
  const responsiveImg = !isSM ? images[tile].sm : images[tile].md

  return (
    <a
      className={className}
      href={projects[tile].web}
      rel="noopener noreferrer"
      target="_blank"
    >
      <img src={responsiveImg} alt={projects[tile].display} />
    </a>
  )
}

export default ProjectImage
