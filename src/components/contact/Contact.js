import React from "react"
import styles from "./Contact.module.scss"
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelopeOpenText,
} from "react-icons/fa"
function Contact() {
  return (
    <section className={styles.container}>
      <footer className={styles.footer}>
        <ul className={styles.list}>
          <li>
            <a>
              <FaGithub />
            </a>
          </li>
          <li>
            <a>
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a>
              <FaEnvelopeOpenText />
            </a>
          </li>
        </ul>
      </footer>
    </section>
  )
}

export default Contact
