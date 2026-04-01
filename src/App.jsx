import { useState } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Greeting from "./components/Greeting/Greeting";
import WaveDivider from "./components/WaveDivider/WaveDivider";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Greeting />
      <WaveDivider color="#35a29f" />
      <main>
        <Projects />
        <WaveDivider flip color="#0b666a" />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
