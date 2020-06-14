import React, { useState } from "react"
import styles from "./LandingSplit.module.scss"
import { useScrollPosition } from "../../hooks/useScrollPosition"
import classNames from "classnames/bind"
let cx = classNames.bind(styles)

function Landing() {
  const [isLeftOn, setLeftOn] = useState(false)
  const [isRightOn, setRightOn] = useState(false)
  const [isScrolled, setScrolled] = useState(false)
  const [isDone, setDone] = useState(false)

  useScrollPosition(({ prevPos, currPos }) => {
    if (-currPos.y > window.innerHeight * 0.7 && !isScrolled) {
      setLeftOn(false)
      setRightOn(false)
      setScrolled(true)
      setTimeout(function () {
        setDone(false)
      }, 300)
    }
    if (-currPos.y < window.innerHeight * 0.7 && isScrolled) setScrolled(false)
  })

  const toggleClasses = () => {
    if (!isLeftOn && !isRightOn) {
      setLeftOn(prevState => (prevState ? false : true))
      setRightOn(false)
    } else if (isLeftOn && !isRightOn) {
      setRightOn(prevState => (prevState ? false : true))
      setLeftOn(false)
    } else if (isRightOn && !isLeftOn) {
      setRightOn(false)
      setLeftOn(false)
      setDone(true)
    }
  }
  let header = cx({
    header: true,
    bgScrolled: isScrolled,
  })
  let bgLeft = cx({
    bgLeft: true,
    bgVisible: isLeftOn,
    bgScrolled: isScrolled,
  })
  let bgRight = cx({
    bgRight: true,
    bgVisible: isRightOn,
    bgScrolled: isScrolled,
  })
  let headerLeftTop = cx({
    headerLeft: true,
    isLeftSide: true,
    isHidden: !isLeftOn,
    isVisible: isLeftOn,
    colorBlack: true,
  })
  let headerRightTop = cx({
    headerRight: true,
    isRightSide: true,
    colorWhite: true,
    isHidden: !isRightOn,
    isVisible: isRightOn,
  })
  let headerCenter = cx({
    headerCenter: true,
    isHidden: isLeftOn || isRightOn,
    isVisible: !isLeftOn && !isRightOn,
  })
  let headerLeftBottom = cx({
    headerLeftBottom: true,
    isLeftSide: true,
    isHidden: !isRightOn,
    isVisible: isRightOn,
    headerLeftBottomOn: isRightOn,
  })
  let headerRightBottom = cx({
    headerRightBottom: true,
    headerRightBottomOn: isLeftOn,
    isRightSide: true,
    isHidden: !isLeftOn,
    isVisible: isLeftOn,
  })
  let centerLeft = cx({
    headerCenterLeft: true,
    isLeftSide: true,
    colorWhite: isLeftOn,
  })
  let centerRight = cx({
    headerCenterRight: true,
    isRightSide: true,
    colorBlack: isRightOn,
  })
  let more = cx({
    more: true,
    colorRed: isLeftOn,
    colorBlack: isLeftOn,
    colorWhite: isRightOn,
    moreFall: isDone,
    isVisible: !isScrolled,
    isHidden: isScrolled,
  })

  return (
    <div onClick={toggleClasses} className={styles.container}>
      <header className={header}>
        <div className={bgLeft}></div>
        <div className={bgRight}></div>
        <h1 className={headerLeftTop}>Hi, I am</h1>
        <h1 className={headerLeftBottom}>Is a front-end dev</h1>
        <h1 className={headerCenter}>In</h1>
        <h1 className={centerLeft}>Ben</h1>
        <h1 className={headerRightTop}>Coding from</h1>
        <h1 className={centerRight}>Japan</h1>
        <h1 className={headerRightBottom}>Is my home</h1>
        <span className={more}>
          {!isDone ? "Click / scroll for more" : "Scroll for more"}
        </span>
      </header>
    </div>
  )
}

export default Landing
