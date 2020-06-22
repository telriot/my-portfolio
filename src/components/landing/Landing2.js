import React, { useState, useContext, useRef, useEffect } from "react"
import styles from "./Landing2.module.scss"
import { AppContext } from "../../contexts/appContext"
import { Element } from "react-scroll"
import classNames from "classnames/bind"
import MainNav from "../layout/MainNav"
import { WindowSizeContext } from "../../contexts/windowSizeContext"
let cx = classNames.bind(styles)

function Landing2() {
  const { projectHandlers } = useContext(AppContext)
  const { position } = useContext(WindowSizeContext)
  const { currPos } = position
  const [isLeftOn, setLeftOn] = useState(true)
  const [isRightOn, setRightOn] = useState(false)
  const [isScrolled, setScrolled] = useState(false)
  const [navHide, setNavHide] = useState(false)
  const [isDone, setDone] = useState(false)
  const { handleFocus } = projectHandlers
  const sectionRef = useRef()

  useEffect(() => {
    if (-currPos.y > window.innerHeight * 0.5 && !isScrolled) {
      setScrolled(true)
      setTimeout(function () {
        setDone(false)
      }, 300)
    }
    if (-currPos.y < window.innerHeight * 0.5 && isScrolled) setScrolled(false)
    if (-currPos.y > window.innerHeight && !navHide) setNavHide(true)
    if (-currPos.y < window.innerHeight && navHide) setNavHide(false)
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

    isVisible: isLeftOn,
    colorBlack: true,
  })

  let headerRightBottom = cx({
    headerRightBottom: true,
    headerRightBottomOn: isLeftOn,
    isRightSide: true,
    isVisible: isLeftOn,
    colorWhite: isRightOn,
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
    <Element name="landing">
      <section id="landing" ref={sectionRef} className={styles.container}>
        {!navHide ? <MainNav origin="landing" /> : null}
        <header className={header}>
          <div className={bgLeft}></div>
          <div className={bgRight}></div>
          <p className={headerLeftTop}>Hi, I am</p>
          <p className={centerLeft}>Ben</p>
          <p className={centerRight}>A front-end dev</p>
          <p className={headerRightBottom}>In Japan</p>
          <div onFocus={handleFocus("landing")} className={more}></div>
        </header>
      </section>
    </Element>
  )
}

export default Landing2

/* {isLeftOn && !isRightOn ? (
            <>
            
            </>
          ) : !isLeftOn && isRightOn ? (
            <>
              <p className={headerLeftTop}>Feel free to</p>
              <p className={centerLeft}>Peek</p>
              <p className={centerRight}>At some of my</p>
              <p className={headerRightBottom}>recent projects</p>
            </>
          ) : (
            <>
              <p className={headerLeftTop}>Or contact me</p>
              <p className={centerLeft}>Here</p>
              <p className={centerRight}>Be it work,</p>
              <p className={headerRightBottom}>or just a chat!</p>
            </>
          )}*/
