import React from "react"
import { images } from "../../../assets/images/index"
function ProjectImage(props) {
  const { tile, className } = props
  return <img src={images[tile]} className={className} />
}

export default ProjectImage
