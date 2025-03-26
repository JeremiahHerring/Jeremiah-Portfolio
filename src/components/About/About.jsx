import React from 'react'

import styles from "./About.module.css"
import { getImageURL } from '../../utils'

export const About = () => {
  return (
    <section className={styles.container} id="About">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageURL("about/aboutImage.png")} alt="me sitting with laptop" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/cursorIcon.png")} alt="Cursor"></img>
            <div className={styles.aboutItemText}>
              <h3>Computer Science Undergraduate</h3>
              <p>I'm a fourth year undergraduate student pursuing a Bachelor's Degree in Computer Science</p>
            </div>
            </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/serverIcon.png")} alt="Cursor"></img>
          <div className={styles.aboutItemText}>
            <h3>Full-Stack Developer</h3>
            <p>I have lots of experience with full stack projects. Check out some of my work!</p>
          </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/uiIcon.png")} alt="UI Icon"></img>
          <div className={styles.aboutItemText}>
            <h3>Software Engineer</h3>
            <p>I've interned at companies such as Sandia National Laboratories and Meta.</p>
          </div>
          </li>
          </ul>
      </div>
      </section>
  )
}
