
import React ,{useState} from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, source },
}) => {
  const [showMore, setShowMore] = useState(false);
  const maxDescriptionLength = 100;
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}> {showMore || description.length <= maxDescriptionLength
          ? description
          : `${description.substring(0, maxDescriptionLength)}... `}
        {description.length > maxDescriptionLength && (
          <span className={styles.readMore} onClick={() => setShowMore(!showMore)}>
            {showMore ? " Show Less" : " Read More"}
          </span>
        )}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={source} className={styles.link} target="_blank">
          Source
        </a>
      </div>
    </div>
  );
};
