import React, { useContext } from "react"
import { AppContext } from "../../contexts/appContext"
import classNames from "classnames/bind"
import styles from "./AnimatedRectsSm.module.scss"

let cx = classNames.bind(styles)

function AnimatedRectsSm() {
  const { state, projectHandlers } = useContext(AppContext)
  const { hover } = state
  const { handleClick, handleMouseEnter, handleMouseLeave } = projectHandlers

  const rectClass = (num) =>
    cx({
      rect: true,
      rect1: num === 1,
      rect2: num === 2,
      rect3: num === 3,
      rect4: num === 4,
      tabHover: hover === num,
    })

  return (
    <React.Fragment>
      <div
        onMouseEnter={handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick(1)}
        className={rectClass(1)}
      ></div>
      <div
        onMouseEnter={handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick(2)}
        className={rectClass(2)}
      ></div>
      <div
        onMouseEnter={handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick(3)}
        className={rectClass(3)}
      ></div>
      <div
        onMouseEnter={handleMouseEnter(4)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick(4)}
        className={rectClass(4)}
      ></div>
    </React.Fragment>
  )
}

export default AnimatedRectsSm
