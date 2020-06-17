import React, { useContext, useRef, useEffect, useState } from "react"
import { Element } from "react-scroll"
import { AppContext } from "../../contexts/appContext"
import styles from "./About.module.scss"
import MainNav from "../layout/MainNav"
import { fullStack } from "../../assets/icons/index"
import { WindowSizeContext } from "../../contexts/windowSizeContext"

function About() {
  const { position } = useContext(WindowSizeContext)
  const { projectHandlers } = useContext(AppContext)
  const { handleFocus } = projectHandlers
  const [navHide, setNavHide] = useState(false)
  const sectionRef = useRef()
  useEffect(() => {
    const { y, height } = sectionRef.current.getBoundingClientRect()
    if (y < 15 && navHide) setNavHide(false)
    if (y > 15 && !navHide) setNavHide(true)
  }, [position.currPos])

  return (
    <Element name="about">
      <section id="about" ref={sectionRef} className={styles.container}>
        {!navHide && <MainNav origin="about" />}

        <h2
          onFocus={handleFocus("about")}
          tabIndex={0}
          className={styles.header}
        >
          About
        </h2>
        <p className={styles.text}>
          Hi! I am Beniamino Tartarini, a teacher converted to (mostly)
          front-end development and located in sunny Miyazaki, Japan. <br />I am
          comfortable working on the MERN stack (MongoDB-Express-React-NodeJS)
          as a whole, and my main area of expertise is Hooks-based React
          development. I can easily switch between CSS modules and frameworks
          like Boostrap, and I love delving into all kinds of new technologies
          and ideas.
          <br />
          Feel free to get in touch with me about anything development related,
          or even just for a chat!
        </p>
        <div className={styles.iconDiv}>
          {fullStack.map((icon, index) => (
            <img
              className={styles.icon}
              src={fullStack[index]}
              key={`icon-${index}`}
              alt={`icon-${index}`}
            ></img>
          ))}
        </div>
      </section>
    </Element>
  )
}

export default About
