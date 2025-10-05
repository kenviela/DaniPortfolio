import { useState } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projectss/Projects";
import Footer from "./components/Footer/Footer";
import Greeting from "./components/Greeting/Greeting";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Greeting/>
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
