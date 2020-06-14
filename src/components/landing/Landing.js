import React from "react"
import styles from "./Landing.module.scss"

function Landing() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          Hi, it's Ben! I am a front-end developer from Italy, living in{" "}
          <span>Japan</span>. Let me help you build things that{" "}
          <em>make sense</em>.
        </h1>
      </header>
    </div>
  )
}

export default Landing
