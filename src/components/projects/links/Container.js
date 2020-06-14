import React, { useState } from "react"
import styles from "./Links.module.scss"
import { icons } from "../../../assets/index"
import classNames from "classnames/bind"
let cx = classNames.bind(styles)

const BookClub = ({ children }) => {
  const {
    css,
    d3,
    html5,
    js,
    mongo,
    node,
    react,
    sass,
    githubIcon,
    www,
  } = icons
  const [isSpread, setSpread] = useState(false)
  const [hover, setHover] = useState(false)
  const handleClick = () => {
    setHover(true)

    setSpread((prevState) => (prevState ? false : true))
  }
  const handleMouseEnter = () => {
    setHover(true)
  }
  const handleMouseLeave = () => {
    setHover(false)
    setSpread(false)
  }
  let overlay = cx({
    overlay: true,
    overlayHover: true,
    overlaySpread: hover && isSpread,
  })
  let icon = cx({
    icon: true,
    isHidden: isSpread,
    isVisible: !isSpread,
  })
  let gitContainer = cx({
    gitContainer: true,
    isHidden: !isSpread,
    isVisible: hover && isSpread,
  })
  let webContainer = cx({
    webContainer: true,
    isHidden: !isSpread,
    isVisible: hover && isSpread,
  })
  let github = cx({
    github: true,
    isHidden: !isSpread,
    isVisible: hover && isSpread,
  })
  let website = cx({
    website: true,
    isHidden: !isSpread,
    isVisible: hover && isSpread,
  })

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.container}
      onClick={handleClick}
    >
      <div className={overlay}>
        <img className={icon} src={react} alt="react" />
        <img className={icon} src={js} alt="js" />
        <img className={icon} src={html5} alt="html" />
        <img className={icon} src={css} alt="css" />
        {/* <img className={icon} src={sass} alt="sass" />
        <img className={icon} src={node} alt="node" />
        <img className={icon} src={mongo} alt="mongo" /> 
        <img className={icon} src={d3} alt="d3" />*/}
        <div className={webContainer}>
          <img className={website} src={www} alt="www"></img>
        </div>
        <div className={gitContainer}>
          <img className={github} src={githubIcon} alt="github"></img>
        </div>
      </div>
      {children}
    </div>
  )
}

export default BookClub
