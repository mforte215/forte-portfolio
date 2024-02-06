import styles from "./App.module.css";

import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const onChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <header>
        <Navbar changePage={onChangePage} />
      </header>
      <main className={styles["main-content"]}>{renderPage(currentPage)}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
