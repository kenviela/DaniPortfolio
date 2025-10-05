import { useState } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projectss/Projects";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
