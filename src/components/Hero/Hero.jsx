import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
// import cvFile from "../../../assets/hero/VarshithaPalakonda.pdf";

export const Hero = () => {
    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = "../../../assets/hero/VarshithaPalakonda.pdf"; 
        link.download = "Varshitha_Palakonda_CV.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Varshitha</h1>
                <p className={styles.description}>I'm a frontend developer with 3 years of experience in Angular, React and NodeJS. Reach out if you'd like to learn more!</p>
                <div>
                <a href="mailto:vpalakonda@hawk.iit.edu" className={styles.contactBtn}>Contact Me</a>
                <a onClick={downloadCV} className={styles.downloadBtn}>
                    Download CV
                </a>
                </div>
          </div>
            <img src={getImageUrl("hero/profile.jpg")} alt="Profile Image" className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}