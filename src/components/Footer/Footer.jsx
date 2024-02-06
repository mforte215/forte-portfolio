import styles from "./Footer.module.css";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/LinkedIn.png";
import instagram from "../../assets/images/Instagram.png";
const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <a className={styles["foot-link"]} href="https://github.com/mforte215">
        <img src={github} alt="github logo" />
      </a>
      <a className={styles["foot-link"]} href="https://github.com/mforte215">
        <img src={linkedin} alt="Linkedin logo" />
      </a>
      <a className={styles["foot-link"]} href="https://github.com/mforte215">
        <img src={instagram} alt="Instagram logo" />
      </a>
    </div>
  );
};

export default Footer;
