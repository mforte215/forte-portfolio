import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <div className={styles["content-container"]}>
        <h1>About Me</h1>
        <h2>
          I am a software developer currently living in Philadelphia,
          Pennsylvania.
        </h2>
        <h4 className={styles["info-paragraph"]}>
          I graduated from Temple University in December 2018 with a Bachelor of
          Science in Information Science and Technology. I have 4+ years
          experience as a software developer including time as a full stack
          engineer, data analyst, and other jobs related to the software
          development lifecycle.
        </h4>
        <h4 className={styles["info-paragraph"]}>
          A few of my hobbies include sports, hiking, cooking and trying new
          foods, going to museums and other cultural events, playing videogames,
          and also coding. I have long had a passion for technology and can
          probably trace it all back to my lifelong love of all things sci-fi.
        </h4>
      </div>
    </>
  );
};

export default About;
