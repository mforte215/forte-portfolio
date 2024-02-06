import styles from "./Resume.module.css";
import pdfResume from "../../assets/files/Mark-Forte-Resume.pdf";
const Resume = () => {
  return (
    <>
      <div className={styles["content-container"]}>
        <h1>Check out my resume!</h1>
        <h2>
          <a href={pdfResume}>Download PDF</a>
        </h2>
        <h4 className={styles["info-paragraph"]}>
          <ul>
            <li>Python, JavaScript, Java</li>
            <li>Django, Spring, React.js, Node.js</li>
            <li>MySQL, Postgresql, MongoDB</li>
          </ul>
        </h4>
      </div>
    </>
  );
};

export default Resume;
