import React, { useContext, useRef, useEffect, useState } from "react"
import { Element } from "react-scroll"
import { AppContext } from "../../contexts/appContext"

import styles from "./About.module.scss"
import MainNav from "../about/layout/MainNav"
import { WindowSizeContext } from "../../contexts/windowSizeContext"

function About() {
  const { position } = useContext(WindowSizeContext)
  const { state, projectHandlers } = useContext(AppContext)
  const { handleFocus } = projectHandlers
  const [navHide, setNavHide] = useState(false)
  const sectionRef = useRef()
  useEffect(() => {
    const { y, height } = sectionRef.current.getBoundingClientRect()
    if (y < 5 && navHide) setNavHide(false)
    if (y > 5 && !navHide) setNavHide(true)
  }, [position.currPos])

  return (
    <Element name="about">
      <section id="about" ref={sectionRef} className={styles.container}>
        {!navHide && <MainNav />}

        <h2
          onFocus={handleFocus("about")}
          tabIndex={0}
          className={styles.header}
        >
          About
        </h2>
        <p className={styles.text}>
          Deserunt tempor magna laborum commodo non pariatur exercitation.
          Mollit exercitation consequat veniam nostrud magna quis nulla. Sint
          aliqua cupidatat in nostrud adipisicing mollit nostrud excepteur qui
          qui do Lorem. Proident fugiat reprehenderit est non commodo sint in
          tempor. Commodo sit ea sunt nisi dolor ex velit laborum commodo
          exercitation amet. Nostrud duis id incididunt consequat. Exercitation
          incididunt tempor sint aute aute proident irure ipsum id velit minim
          voluptate. Elit mollit ex cillum et culpa duis laboris occaecat. Ut
          fugiat ut dolore minim reprehenderit elit ipsum sit ut proident
          consequat exercitation irure.
        </p>
      </section>
    </Element>
  )
}

export default About
