import styles from "./Navbar.module.css";

export default function Navbar(props) {
  return (
    <div className={styles["custom-nav-bar"]}>
      <div className={styles["logo-container"]}>
        <div className={styles["link-container"]}>
          <a
            className={styles["link"]}
            onClick={() => props.changePage("Home")}
            href="#Home"
          >
            <p>Mark Forte</p>
          </a>
        </div>
      </div>
      <div className={styles["links-container"]}>
        <div className={styles["link-container"]}>
          <a
            className={styles["link"]}
            onClick={() => props.changePage("About")}
            href="#About"
          >
            <p>About</p>
          </a>
        </div>
        <div className={styles["link-container"]}>
          <a
            className={styles["link"]}
            onClick={() => props.changePage("Contact")}
            href="#Contact"
          >
            <p>Contact</p>
          </a>
        </div>
        <div className={styles["link-container"]}>
          <a
            className={styles["link"]}
            onClick={() => props.changePage("Resume")}
            href="#Resume"
          >
            <p>Resume</p>
          </a>
        </div>
        <div className={styles["link-container"]}>
          <a
            className={styles["link"]}
            onClick={() => props.changePage("Portfolio")}
            href="#Portfolio"
          >
            <p>Portfolio</p>
          </a>
        </div>
      </div>
    </div>
  );
}
