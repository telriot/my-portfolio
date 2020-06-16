import React from "react"
import styles from "./Contact.module.scss"
import { social } from "../../assets/text/social"
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelopeOpenText,
} from "react-icons/fa"
function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <footer className={styles.footer}>
        <ul className={styles.list}>
          <li>
            <a href={social.github}>
              <FaGithub />
            </a>
          </li>
          <li>
            <a href={social.linkedin}>
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href={social.twitter}>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href={`mailto:${social.email}`}>
              <FaEnvelopeOpenText />
            </a>
          </li>
        </ul>
      </footer>
    </section>
  )
}

export default Contact
