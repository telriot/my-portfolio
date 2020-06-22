import React, { useContext, useState } from "react"
import styles from "./MainNav.module.scss"
import classNames from "classnames/bind"
import { Link, animateScroll as scroll } from "react-scroll"
import { isMobile } from "react-device-detect"
import { AppContext } from "../../contexts/appContext"
import { WindowSizeContext } from "../../contexts/windowSizeContext"

let cx = classNames.bind(styles)
function MainNav(props) {
  const { position, origin } = props
  const { projectHandlers } = useContext(AppContext)
  const { isXS } = useContext(WindowSizeContext)
  const { handleFocus } = projectHandlers
  const [hover, setHover] = useState(false)
  let navbar = cx({
    navbar: true,
    //navbarXSShifted: !isXS && origin === "projects",
    //navRight: position === "right",
  })
  let navList = cx({
    navList: isXS,
    navListXS: !isXS,
  })
  let rect = cx({
    rect: true,
    backgroundRed: position === "right",
  })
  let text = cx({
    text: true,
    textAlt: position === "right",
  })

  const RectLink = ({ target, display }) =>
    origin !== target ? (
      <li>
        <div onClick={!isMobile && handleFocus(target)} className={rect}>
          <Link className={text} to={target} smooth={true} duration={500}>
            {display}
          </Link>
        </div>
      </li>
    ) : null

  return (
    <nav className={navbar}>
      <ul className={navList}>
        <RectLink target="landing" display="landing" />
        <RectLink target="projects" display="projects" />
        <RectLink target="about" display="Info & Contact" />
      </ul>
    </nav>
  )
}

export default MainNav
