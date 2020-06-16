import React, { useState } from "react"
import styles from "./MainNav.module.scss"
import classNames from "classnames/bind"
import { Link, animateScroll as scroll } from "react-scroll"

let cx = classNames.bind(styles)
function MainNav(props) {
  const { position } = props
  const [hover, setHover] = useState(false)
  let navbar = cx({
    navbar: true,
    navRight: position === "right",
  })
  let rect = cx({
    rect: true,
    backgroundRed: position === "right",
  })
  let text = cx({
    text: true,
    textAlt: position === "right",
  })
  return (
    <nav className={navbar}>
      <ul className={styles.navList}>
        <li>
          <div className={rect}>
            <Link className={text} to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </div>
        </li>
        <li>
          <div className={rect}>
            <Link className={text} to="about" smooth={true} duration={500}>
              {" "}
              About
            </Link>
          </div>
        </li>
        <li>
          <div className={rect}>
            <Link className={text} to="contact" smooth={true} duration={500}>
              Contact{" "}
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav
