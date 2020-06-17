import React, { useState, useContext, useRef, useEffect } from "react"
import styles from "./LandingSplit.module.scss"
import { AppContext } from "../../contexts/appContext"
import { Element } from "react-scroll"

import { useScrollPosition } from "../../hooks/useScrollPosition"
import classNames from "classnames/bind"
import MainNav from "../layout/MainNav"
import { WindowSizeContext } from "../../contexts/windowSizeContext"
let cx = classNames.bind(styles)

function Landing() {
  const { projectHandlers } = useContext(AppContext)
  const { position } = useContext(WindowSizeContext)
  const { currPos } = position
  const [isLeftOn, setLeftOn] = useState(false)
  const [isRightOn, setRightOn] = useState(false)
  const [isScrolled, setScrolled] = useState(false)
  const [navHide, setNavHide] = useState(false)
  const [isDone, setDone] = useState(false)
  const { handleFocus } = projectHandlers
  const sectionRef = useRef()

  useEffect(() => {
    if (-currPos.y > window.innerHeight * 0.7 && !isScrolled) {
      setLeftOn(false)
      setRightOn(false)
      setScrolled(true)
      setTimeout(function () {
        setDone(false)
      }, 300)
    }
    if (-currPos.y < window.innerHeight * 0.7 && isScrolled) setScrolled(false)
    if (-currPos.y > window.innerHeight - 50 && !navHide) setNavHide(true)
    if (-currPos.y < window.innerHeight - 50 && navHide) setNavHide(false)
  }, [currPos])

  const toggleClasses = () => {
    if (!isLeftOn && !isRightOn) {
      setLeftOn((prevState) => (prevState ? false : true))
      setRightOn(false)
    } else if (isLeftOn && !isRightOn) {
      setRightOn((prevState) => (prevState ? false : true))
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
  const handleKeyDown = (e) => {
    e.persist()
    e.keyCode === 13 && toggleClasses()
  }
  return (
    <Element name="landing">
      <section id="landing" ref={sectionRef} className={styles.container}>
        {!navHide ? <MainNav origin="landing" /> : null}
        <header onClick={toggleClasses} className={header}>
          <div className={bgLeft}></div>
          <div className={bgRight}></div>
          <h1 className={headerLeftTop}>Hi, I am</h1>
          <h1 className={headerLeftBottom}>Is a front-end dev</h1>
          <h1 className={headerCenter}>In</h1>
          <h1 className={centerLeft}>Ben</h1>
          <h1 className={headerRightTop}>Coding from</h1>
          <h1 className={centerRight}>Japan</h1>
          <h1 className={headerRightBottom}>Is my home</h1>
          <span
            onFocus={handleFocus("landing")}
            onKeyDown={handleKeyDown}
            className={more}
          >
            <a href="#/">
              {!isDone ? "Click / scroll for more" : "Scroll for more"}
            </a>
          </span>
        </header>
      </section>
    </Element>
  )
}

export default Landing
