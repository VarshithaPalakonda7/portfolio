import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = "../../../assets/hero/Varshitha Palakonda.pdf";
        link.download = "Varshitha_Palakonda_CV.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Varshitha</h1>
                <p className={styles.description}>A frontend developer passionate about crafting responsive, high-performance apps using React and Angular. Reach out if you'd like to learn more!</p>
                <div>
                <a href="mailto:vpalakonda@hawk.iit.edu" className={styles.contactBtn}>Contact Me</a>
                <a onClick={downloadCV} className={styles.downloadBtn}>
                    Download CV
                </a>
                </div>
          </div>
            <img src={getImageUrl("hero/myImage.jpg")} alt="Profile Image" className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}