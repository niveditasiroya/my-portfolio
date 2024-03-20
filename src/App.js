import { createRef, useRef } from "react";
import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  const about = useRef(null);
  const contact = useRef(null);
  const service = useRef(null);

  const executeScroll = () => {
    service.current.scrollMyDivToBottom();
    contact.current.scrollMyDivToBottom();
    about.current.scrollMyDivToBottom();
  };

  return (
    <>
      <Header executeScroll={executeScroll} />
      <Banner />
      <About myref={about} />
      <Services myref={service} />
      <Expertise />
      {/* <Projects /> */}
      <Contact myref={contact} />
      <Footer />
    </>
  );
}

export default App;
