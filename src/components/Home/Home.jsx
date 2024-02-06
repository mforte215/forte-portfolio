import styles from "./Home.module.css";
const Home = () => {
  const handleButtonClick = (page) => {
    console.log("clicked:");
    console.log(page);
    //load the
  };

  return (
    <>
      <div className={styles["content-container"]}>
        <h1>Hey there! My name is Mark Forte. </h1>
        <h2>
          I am a software developer currently living in Philadelphia,
          Pennsylvania.
        </h2>
        <h3>
          I'm a highly passionate developer that loves all things technology,
          always up for a new challenge and learning new things.
        </h3>
        <h3 className={styles["more-info"]}>
          <a>Click to learn more!</a>
        </h3>
      </div>
      {/*       <div className={styles["button-container"]}>
        <button
          onClick={() => handleButtonClick("About")}
          className={styles["big-button"]}
        >
          About
        </button>
        <button
          onClick={() => handleButtonClick("Contact")}
          className={styles["big-button"]}
        >
          Contact
        </button>
        <button
          onClick={() => handleButtonClick("Resume")}
          className={styles["big-button"]}
        >
          Resume
        </button>
        <button
          onClick={() => handleButtonClick("Portfolio")}
          className={styles["big-button"]}
        >
          Portfolio
        </button>
      </div> */}
    </>
  );
};

export default Home;
