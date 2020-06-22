import React, { useContext } from "react"
import { AppContext } from "../../contexts/appContext"
import classNames from "classnames/bind"
import styles from "./Navbar.module.scss"
import { projects } from "../../assets/text/projects"

let cx = classNames.bind(styles)

function Navbar() {
  const { state, projectHandlers } = useContext(AppContext)
  const { activeProject, hover } = state
  const { handleClick, handleMouseEnter, handleMouseLeave } = projectHandlers

  let navbar = cx({
    navbar: true,
  })

  let navList = cx({
    navList: true,
  })

  let listItem1 = cx({
    listItem: true,
    listItem1: true,
    textWhite: !activeProject,
    textBlack: activeProject !== 1,
    textRed: activeProject === 1,
    listItemHovered: activeProject % 2 === 1 && hover === 1,
    listItemHoveredDark: activeProject % 2 === 0 && hover === 1,
  })
  let listItem2 = cx({
    listItem: true,
    listItem2: true,
    textWhite: !activeProject,

    textBlack: activeProject !== 2,
    textRed: activeProject === 2,

    listItemHovered: activeProject % 2 === 1 && hover === 2,
    listItemHoveredDark: activeProject % 2 === 0 && hover === 2,
  })
  let listItem3 = cx({
    listItem: true,
    listItem3: true,
    textWhite: !activeProject,

    textBlack: activeProject !== 3,
    textRed: activeProject === 3,
    listItemHovered: activeProject % 2 === 1 && hover === 3,
    listItemHoveredDark: activeProject % 2 === 0 && hover === 3,
  })
  let listItem4 = cx({
    listItem: true,
    listItem4: true,
    textWhite: !activeProject,

    textBlack: activeProject !== 4,
    textRed: activeProject === 4,
    listItemHovered: activeProject % 2 === 1 && hover === 4,
    listItemHoveredDark: activeProject % 2 === 0 && hover === 4,
  })
  const ListItem = ({ className, num }) => (
    <li
      className={className}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter(num)}
      onClick={handleClick(num)}
    >
      <a href="#/">{projects[num].display}</a>
    </li>
  )

  return (
    <nav className={navbar}>
      <ul className={navList}>
        <ListItem className={listItem1} num={1} />
        <ListItem className={listItem2} num={2} />
        <ListItem className={listItem3} num={3} />
        <ListItem className={listItem4} num={4} />
      </ul>
    </nav>
  )
}

export default Navbar
