import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Designer</h3>
              <p>
              I have designed multiple Figma layouts and landing pages, and I have also created design systems.
              </p>
            </div>
          </li>
        </ul> */}
         <p className={styles.about}>
          I'm Varshitha Palakonda, a frontend developer and UX designer with 2.7 years of experience building responsive, user-focused web and mobile applications. Currently pursuing my Master’s in IT and Management at Illinois Tech, I specialize in React.js, Angular, and modern UI frameworks. I love creating intuitive interfaces that blend design and performance seamlessly.
         </p>

      </div>
    </section>
  );
};