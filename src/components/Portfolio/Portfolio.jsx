import styles from "./Portfolio.module.css";
import forecastScreenshot from "../../assets/images/five-day-forecast.png";
import myMediaFavorites from "../../assets/images/mymediafavorites.png";
import fractal from "../../assets/images/fractal_one.png";
import readMeGenerator from "../../assets/images/readmeGenerator.png";
import workDayPlanner from "../../assets/images/work-day-planner.png";
import svgGenerator from "../../assets/images/svggenerator.png";
const Portfolio = () => {
  return (
    <>
      <div className={styles["content-container"]}>
        <h1>Portfolio Examples</h1>
        <h2>A sample of some of my work</h2>
        <div className={styles["info-paragraph"]}>
          <div className={styles["project-card"]}>
            <a
              className={styles["project-link"]}
              href="https://mforte215.github.io/five-day-forecast/"
            >
              <img
                className={styles["project-image"]}
                src={forecastScreenshot}
                alt="project screenshot"
              />
              <div className={styles["project-info"]}>
                <p className={styles["project-text"]}>Five Day Forecast</p>
              </div>
            </a>
          </div>
          <div className={styles["project-card"]}>
            <a
              className={styles["project-link"]}
              href="https://mforte215.github.io/my-media-library/"
            >
              <img
                className={styles["project-image"]}
                src={myMediaFavorites}
                alt="project screenshot"
              />
              <div className={styles["project-info"]}>
                <p className={styles["project-text"]}>My Media Favorites</p>
              </div>
            </a>
          </div>
          <div className={styles["project-card"]}>
            <a
              className={styles["project-link"]}
              href="https://mforte215.github.io/work-day-planner/"
            >
              <img
                className={styles["project-image"]}
                src={workDayPlanner}
                alt="project screenshot"
              />
              <div className={styles["project-info"]}>
                <p className={styles["project-text"]}>Work Day Planner</p>
              </div>
            </a>
          </div>
          <div className={styles["project-card"]}>
            <a
              className={styles["project-link"]}
              href="https://github.com/mforte215/readme-generator"
            >
              <img
                className={styles["project-image"]}
                src={readMeGenerator}
                alt="project screenshot"
              />
              <div className={styles["project-info"]}>
                <p className={styles["project-text"]}>Read Me Generator</p>
              </div>
            </a>
          </div>
          <div className={styles["project-card"]}>
            <a
              className={styles["project-link"]}
              href="https://github.com/mforte215/svg-logo-generator"
            >
              <img
                className={styles["project-image"]}
                src={svgGenerator}
                alt="project screenshot"
              />
              <div className={styles["project-info"]}>
                <p className={styles["project-text"]}>SVG Generator</p>
              </div>
            </a>
          </div>
          <div className={styles["project-card"]}>
            <a
              className={styles["project-link"]}
              href="https://github.com/mforte215/squad-up"
            >
              <img
                className={styles["project-image"]}
                src={fractal}
                alt="project screenshot"
              />
              <div className={styles["project-info"]}>
                <p className={styles["project-text"]}>Squad Up</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
