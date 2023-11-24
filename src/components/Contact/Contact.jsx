import React from 'react'

import styles from "./Contact.module.css"
import { getImageURL } from '../../utils'

export const Contact = () => {
  return (
    <footer id="Contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
            </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageURL("contact/emailIcon.png")} alt="Email icon"
                />
                <a href="mailto:jeremherring@gmail.com">jeremherring@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageURL("contact/linkedinIcon.png")} alt="LinkedIn icon"
                />
                <a href="https://www.linkedin.com/in/jeremiahherring/" target='_blank'>linkedin.com/jeremiahherring</a>
            </li>
            <li className={styles.link}>
                <img src={getImageURL("contact/githubIcon.png")} alt="GitHub icon"
                />
                <a href="https://www.github.com/jeremiahherring" target='_blank'>github.com/jeremiahherring</a>
            </li>
        </ul>
    </footer>
  )
}
