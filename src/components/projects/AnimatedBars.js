import React, { useContext } from "react"
import { AppContext } from "../../contexts/appContext"
import styles from "./AnimatedBars.module.scss"
import classNames from "classnames/bind"
let cx = classNames.bind(styles)

function AnimatedBars() {
  const { state, projectHandlers } = useContext(AppContext)
  const { hover } = state
  const { handleClick, handleMouseEnter, handleMouseLeave } = projectHandlers
  let barClass = (num) =>
    cx({
      bar1: num === 1,
      bar2: num === 2,
      bar3: num === 3,
      bar4: num === 4,
      tabHover: hover === num,
    })

  return (
    <React.Fragment>
      <div
        onMouseEnter={handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick(1)}
        className={barClass(1)}
      ></div>
      <div
        onMouseEnter={handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick(2)}
        className={barClass(2)}
      ></div>
      <div
        onMouseEnter={handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick(3)}
        className={barClass(3)}
      ></div>
      <div
        onMouseEnter={handleMouseEnter(4)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick(4)}
        className={barClass(4)}
      ></div>
    </React.Fragment>
  )
}

export default AnimatedBars
