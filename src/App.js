import React, { useEffect } from "react";
import "./App.css";
import "./Roots.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Tokemonics from "./Components/Tokemonics";
import Rarity from "./Components/Rarity";
import BTT from "./Components/BTT";
import Loader from "./Components/Loader";
import Faqs from "./Components/Faqs";
import Roadmap from "./Components/Roadmap";
import Footer from "./Components/Footer";

function App() {
  //   useEffect(() => {
  //     AOS.init();
  //   }, []);
  return (
    <>
      <Loader />
      <BTT />
      <Header />
      <Hero />
      <Tokemonics />
      <Rarity />
      <Roadmap />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
