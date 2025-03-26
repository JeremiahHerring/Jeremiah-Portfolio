import React from 'react'

import styles from "./Hero.module.css"
import { getImageURL } from '../../utils'

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jeremiah</h1>
        <p className={styles.description}>I'm a student at Cal State Fullerton and am looking for software engineering opportunities. Feel free to contact me!</p>
            <a className={styles.contactBtn} href="mailto:jeremherring@gmail.com">Contact Me</a>
        </div>
        <img src={getImageURL("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
  </section>
  )
}
